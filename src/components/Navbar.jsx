import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="fixed top-0 w-full bg-black/80 border-b border-gray-800 z-50">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between">
                <span className="text-xl font-bold text-white">Portfolio</span>

                <div className="flex gap-6 text-gray-400">
                    <Link to="/" className="hover:text-white">Home</Link>
                    <Link to="/about" className="hover:text-white">About</Link>
                    <Link to="/projects" className="hover:text-white">Projects</Link>
                    <Link to="/skills" className="hover:text-white">Skills</Link>
                    <Link to="/contact" className="hover:text-white">Contact</Link>
                </div>
            </div>
        </nav>
    );
}
