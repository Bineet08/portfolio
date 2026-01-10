/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useState } from "react";
import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  const filtered =
    selectedCategory === "All"
      ? projects
      : projects.filter(p => p.category === selectedCategory);

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

        <div className="flex gap-3 mb-16">
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

        <div className="space-y-24">
          {filtered.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
