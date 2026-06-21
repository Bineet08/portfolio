import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import projects from "../data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function FeaturedProject() {
  const featured = projects.filter(p => p.featured || p.id <= 2).slice(0, 2);

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
        <div>
          <span className="eyebrow block mb-4">Case Studies</span>
          <h2 className="text-4xl md:text-5xl font-bold text-neutral-100 tracking-tight">Projects</h2>
        </div>
        <Link
          to="/projects"
          className="group relative inline-flex items-center gap-2 text-neutral-50 font-medium pb-1 self-start md:self-auto"
        >
          <span>View Index</span>
          <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-neutral-600 group-hover:bg-neutral-50 transition-colors duration-300" />
          <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
        {featured.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="group relative flex flex-col"
          >
            {/* Editorial Image Frame */}
            <div className="editorial-frame aspect-[4/3] w-full bg-[#0a0a0a] mb-6">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1">
              <div className="flex items-baseline justify-between mb-2">
                <h3 className="text-2xl font-bold text-neutral-100 tracking-tight group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <span className="text-xs font-mono text-neutral-500 shrink-0 ml-4">
                  {project.year}
                </span>
              </div>
              <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto relative z-20 pointer-events-none">
                {project.tech.slice(0, 3).map((t) => (
                  <span
                    key={t}
                    className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-neutral-500 border border-neutral-800 rounded-sm hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-all duration-300 cursor-default"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Clickable Overlay */}
            <Link to="/projects" className="absolute inset-0 z-10">
              <span className="sr-only">View {project.title} details</span>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
