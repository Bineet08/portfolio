import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "./Logo";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);


    const links = [
        { path: "/", label: "Index" },
        { path: "/about", label: "Profile" },
        { path: "/projects", label: "Projects" },
        { path: "/skills", label: "Capabilities" },
        { path: "/contact", label: "Contact" },
    ];


    return (
        <nav className="fixed top-0 w-full bg-[#050505] border-b border-neutral-900 z-50">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-5 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-3 group" aria-label="Home">
                    <Logo className="w-5 h-5 grayscale group-hover:grayscale-0 group-hover:rotate-6 transition-all duration-500 ease-out" />
                    <span className="text-[10px] font-black uppercase tracking-[0.25em] text-neutral-400 group-hover:text-neutral-100 transition-colors mt-0.5">
                        BINEET GUPTA
                    </span>
                </Link>

                {/* Desktop Nav with interactive dimming */}
                <div className="hidden md:flex gap-8 items-center group/nav">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            className={({ isActive }) =>
                                `relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 pb-1.5 ${isActive
                                    ? "text-neutral-50"
                                    : "text-neutral-500 group-hover/nav:text-neutral-600 hover:!text-neutral-200"
                                }`
                            }
                        >
                            {({ isActive }) => (
                                <>
                                    {link.label}
                                    {isActive && (
                                        <motion.div
                                            layoutId="nav_underline"
                                            className="absolute left-0 right-0 bottom-0 h-[2px] bg-neutral-100"
                                            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                                        />
                                    )}
                                </>
                            )}
                        </NavLink>
                    ))}
                </div>

                {/* Mobile toggle */}
                <button
                    className="md:hidden p-2 text-neutral-500 hover:text-neutral-200 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle navigation menu"
                    aria-expanded={isOpen}
                >
                    <div className="w-5 h-5 relative flex items-center justify-center">
                        <span className={`absolute block w-full h-[1px] bg-current transition-transform duration-300 ease-[0.16,1,0.3,1] ${isOpen ? 'rotate-45' : '-translate-y-1.5'}`} />
                        <span className={`absolute block w-full h-[1px] bg-current transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                        <span className={`absolute block w-full h-[1px] bg-current transition-transform duration-300 ease-[0.16,1,0.3,1] ${isOpen ? '-rotate-45' : 'translate-y-1.5'}`} />
                    </div>
                </button>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="md:hidden border-t border-neutral-900 bg-[#050505] overflow-hidden"
                    >
                        <div className="flex flex-col px-6 py-4">
                            {links.map((link) => (
                                <NavLink
                                    key={link.path}
                                    to={link.path}
                                    onClick={() => setIsOpen(false)}
                                    className={({ isActive }) =>
                                        `py-3 text-[11px] font-bold uppercase tracking-[0.15em] transition-colors ${isActive ? "text-neutral-50" : "text-neutral-500"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}