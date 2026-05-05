import { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const links = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/projects", label: "Projects" },
        { path: "/skills", label: "Skills" },
        { path: "/contact", label: "Contact" },
    ];

    // Close mobile menu whenever the route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Framer Motion Variants for Staggered Mobile Menu
    const menuVariants = {
        closed: {
            opacity: 0,
            height: 0,
            transition: { staggerChildren: 0.05, staggerDirection: -1 }
        },
        open: {
            opacity: 1,
            height: "auto",
            transition: { staggerChildren: 0.1, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, x: -16 },
        open: { opacity: 1, x: 0 }
    };

    return (
        <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                {/* Branding: Logo + Name aligned on same baseline */}
                <Link
                    to="/"
                    className="flex items-center gap-3 group"
                    aria-label="Back to home"
                >
                    <Logo className="w-9 h-9 transition-transform duration-300 group-hover:rotate-12" />
                    <span className="text-xl font-bold text-white tracking-tighter">
                        Bineet
                    </span>
                </Link>

                {/* Desktop Menu: Refined Typography */}
                <div className="hidden md:flex gap-8 items-center">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `text-sm font-medium tracking-wide transition-all duration-300 ${isActive
                                    ? "text-blue-400"
                                    : "text-gray-400 hover:text-white"
                                }`
                            }
                        >
                            {link.label}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile Toggle: Accessible & Interactive */}
                <button
                    className="md:hidden p-2 text-gray-400 hover:text-white focus:outline-none transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <div className="w-6 h-6 relative flex items-center justify-center">
                        <span className={`absolute block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? 'rotate-45' : '-translate-y-2'}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`} />
                        <span className={`absolute block w-full h-0.5 bg-current transition-transform duration-300 ${isOpen ? '-rotate-45' : 'translate-y-2'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu Dropdown */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="md:hidden bg-gray-900/95 border-b border-gray-800 overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-8 space-y-6">
                            {links.map((link) => (
                                <motion.div key={link.path} variants={itemVariants}>
                                    <NavLink
                                        to={link.path}
                                        className={({ isActive }) =>
                                            `text-2xl font-semibold tracking-tight transition-colors ${isActive ? "text-blue-400" : "text-gray-300"
                                            }`
                                        }
                                    >
                                        {link.label}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}