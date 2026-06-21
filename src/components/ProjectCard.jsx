import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function ProjectCard({ project }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 py-16 border-t border-neutral-900"
    >
      {/* Content - Left Side */}
      <div className="md:col-span-5 flex flex-col justify-center order-2 md:order-1">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold text-neutral-100 tracking-tight group-hover:text-white transition-colors">
              {project.title}
            </h2>
            <span className="text-xs font-mono text-neutral-600 px-2 border border-neutral-800 rounded-sm shrink-0">
              {project.year}
            </span>
          </div>
          <p className="text-sm font-medium text-neutral-400 mb-6">{project.subtitle}</p>
          <p className="text-neutral-500 leading-relaxed text-sm">
            {project.description}
          </p>
        </div>

        {/* Features List */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <div className="mb-10">
            <h3 className="eyebrow mb-4">Engineering Focus</h3>
            <ul className="space-y-3">
              {project.keyFeatures.map((d, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-neutral-400">
                  <span className="text-neutral-600 mt-0.5 select-none shrink-0">—</span>
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Footer: Tech & Links */}
        <div className="mt-auto pt-8 border-t border-neutral-900">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-neutral-500 border border-neutral-800 rounded-sm hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-all duration-300 cursor-default"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="flex gap-6 text-sm font-medium">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative inline-flex items-center gap-1 text-neutral-400 hover:text-neutral-50 transition-colors pb-0.5"
              >
                <span>Source</span>
                <span className="absolute -bottom-0.5 left-0 w-0 h-[1px] bg-neutral-50 transition-all group-hover/link:w-full" />
              </a>
            )}
            {project.live === "#" ? (
              <span className="text-neutral-700 select-none">Local only</span>
            ) : (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link relative inline-flex items-center gap-1.5 text-neutral-50 hover:text-white transition-colors pb-0.5"
              >
                <span>Visit Site</span>
                <span className="absolute -bottom-0.5 left-0 w-full h-[1px] bg-neutral-600 transition-colors group-hover/link:bg-white" />
                <span className="transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5">↗</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Image - Right Side */}
      <div className="md:col-span-7 order-1 md:order-2 flex items-center">
        <div className="editorial-frame w-full aspect-[4/3] md:aspect-[16/10] bg-[#0a0a0a]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-all duration-700 group-hover:scale-[1.02]"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
        </div>
      </div>
    </motion.article>
  );
}
