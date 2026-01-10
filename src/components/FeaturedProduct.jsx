/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import projects from "../data/projects";

export default function FeaturedProject() {
    const featured = projects.find((p) => p.featured);
    if (!featured) return null;

    /* ---------------- Animation Variants ---------------- */

    const container = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.1,
            },
        },
    };

    const item = {
        hidden: { opacity: 0, y: 24 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" },
        },
    };

    return (
        <section className="px-6 py-28 bg-black relative overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-120px" }}
                    className="grid md:grid-cols-2 gap-12 items-center"
                >
                    {/* LEFT — Story */}
                    <motion.div variants={item}>
                        <motion.span
                            variants={item}
                            className="inline-block mb-4 text-sm tracking-wider uppercase text-blue-400"
                        >
                            Featured Project
                        </motion.span>

                        <motion.h2
                            variants={item}
                            className="text-4xl md:text-5xl font-bold text-white mb-6"
                        >
                            {featured.title}
                        </motion.h2>

                        <motion.p
                            variants={item}
                            className="text-gray-400 text-lg mb-8 leading-relaxed"
                        >
                            {featured.description}
                        </motion.p>

                        <motion.ul
                            variants={item}
                            className="space-y-4 text-gray-300 mb-10"
                        >
                            <li>
                                <span className="text-blue-400 font-medium">Problem:</span>{" "}
                                {featured.problem}
                            </li>
                            <li>
                                <span className="text-green-400 font-medium">Solution:</span>{" "}
                                {featured.solution}
                            </li>
                            <li>
                                <span className="text-purple-400 font-medium">Challenge:</span>{" "}
                                {featured.challenge}
                            </li>
                        </motion.ul>

                        <motion.div
                            variants={item}
                            className="flex flex-wrap gap-3 mb-10"
                        >
                            {featured.tech.map((tech) => (
                                <span
                                    key={tech}
                                    className="px-4 py-2 text-sm bg-gray-800 border border-gray-700 
                  rounded-full text-gray-300"
                                >
                                    {tech}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div variants={item} className="flex gap-4">
                            <motion.a
                                href={featured.live}
                                className="px-6 py-3 rounded-lg bg-blue-500 text-black 
                font-semibold hover:bg-blue-400 transition"
                                whileHover={{ x: 4 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                View Live →
                            </motion.a>

                            <motion.a
                                href={featured.github}
                                target="_blank"
                                rel="noreferrer"
                                className="px-6 py-3 rounded-lg border border-gray-700 
                hover:border-blue-400 hover:text-blue-400 transition"
                                whileHover={{ x: -4 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            >
                                View Code
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT — Visual */}
                    <motion.div
                        variants={item}
                        whileHover={{ y: -6 }}
                        transition={{ type: "spring", stiffness: 120, damping: 18 }}
                        className="relative"
                    >
                        <div className="relative overflow-hidden rounded-2xl border border-gray-800">
                            <img
                                src={featured.image}
                                alt={featured.title}
                                className="w-full h-80 object-cover opacity-90"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
