import { motion, AnimatePresence } from "framer-motion";
import { useState, useMemo } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = useMemo(
    () => ["All", ...new Set(projects.map((p) => p.category))],
    []
  );

  const filtered = useMemo(
    () =>
      selectedCategory === "All"
        ? projects
        : projects.filter((p) => p.category === selectedCategory),
    [selectedCategory]
  );

  return (
    <section className="min-h-screen px-6 py-24 bg-black">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl font-bold text-white mb-12"
        >
          Projects
        </motion.h1>

        <div className="flex flex-wrap gap-3 mb-16">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-5 py-2 rounded-full ${selectedCategory === c
                ? "bg-blue-500 text-black"
                : "bg-gray-800 text-gray-300"
                }`}
            >
              {c}
            </button>
          ))}
        </div>

        <motion.div layout className="space-y-24">
          <AnimatePresence mode="popLayout">
            {filtered.map((p, i) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
