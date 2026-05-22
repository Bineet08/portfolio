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
    <section className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-20 bg-[#050505]">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-20 max-w-2xl"
        >
          <span className="eyebrow block mb-6">Archive</span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-6 tracking-tighter">
            Projects
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Full-stack builds focusing on resilient architecture
            and high-fidelity interfaces.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-4 pb-8 border-b border-neutral-900">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCategory(c)}
              className={`px-4 py-2 text-xs font-bold tracking-widest uppercase rounded-sm transition-all duration-300 ${
                selectedCategory === c
                  ? "bg-neutral-100 text-black"
                  : "text-neutral-500 hover:text-neutral-300 border border-neutral-800 hover:border-neutral-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Project List */}
        <div>
          <AnimatePresence mode="popLayout">
            {filtered.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ProjectCard project={p} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
