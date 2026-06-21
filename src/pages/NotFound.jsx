import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-[#050505]">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="text-8xl font-bold text-neutral-800 mb-4"
      >
        404
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-neutral-500 mb-8 max-w-sm"
      >
        This page doesn't exist. It might have been moved or removed.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <Link
          to="/"
          className="px-5 py-2.5 text-sm font-medium rounded-sm border border-neutral-800 text-neutral-300 hover:border-neutral-600 hover:text-neutral-100 transition-colors"
        >
          Back to Home
        </Link>
      </motion.div>
    </div>
  );
}
