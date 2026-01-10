/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function ProjectCard({ project, index }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? "md:grid-flow-dense" : ""
                }`}
        >
            {/* Image */}
            <div className={index % 2 === 1 ? "md:col-start-2" : ""}>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl border border-gray-800"
                />
            </div>

            {/* Content */}
            <div className={index % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <span className="text-blue-400 text-sm font-medium">
                    {project.category} • {project.duration}
                </span>

                <h2 className="text-3xl font-bold text-white mt-3 mb-4">
                    {project.title}
                </h2>

                <p className="text-gray-400 mb-6">{project.description}</p>

                <div className="space-y-4 text-gray-300 mb-6">
                    <p><strong className="text-blue-400">Problem:</strong> {project.problem}</p>
                    <p><strong className="text-green-400">Solution:</strong> {project.solution}</p>
                    <p><strong className="text-purple-400">Challenge:</strong> {project.challenge}</p>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="px-3 py-1 text-sm bg-gray-800 border border-gray-700 rounded"
                        >
                            {t}
                        </span>
                    ))}
                </div>

                <div className="flex gap-6">
                    <a href={project.github} target="_blank" className="text-blue-400  border border-blue-400 rounded-sm transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 px-2">Code</a>
                    {(project.live === "#") ?
                        <a className="text-red-400 border border-red-400 rounded-sm px-2 pointer-none:">Live Not Avaibale</a>
                        :
                        <a href={project.live} target="_blank" className="text-blue-400  border border-blue-400 rounded-sm transition-transform duration-300 ease-in-out transform scale-100 hover:scale-110 px-2">Live</a>}
                </div>
            </div>
        </motion.div>
    );
}
