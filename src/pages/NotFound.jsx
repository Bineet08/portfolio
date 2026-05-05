import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-900 via-black to-gray-900 px-6 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-9xl font-bold text-blue-500 mb-4"
      >
        404
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-3xl md:text-4xl font-semibold text-white mb-6"
      >
        Page Not Found
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-gray-400 mb-10 max-w-md"
      >
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link
          to="/"
          className="px-8 py-3 rounded-lg border-2 border-blue-500 text-white font-semibold
          hover:bg-blue-500 hover:text-black transition inline-block"
        >
          Return Home
        </Link>
      </motion.div>
    </div>
  );
}
