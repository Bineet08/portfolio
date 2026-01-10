import { motion } from "framer-motion";

export default function Skills() {
    const coreSkills = [
        {
            name: "React",
            description: "Component architecture, hooks, state management, routing",
        },
        {
            name: "JavaScript (ES6+)",
            description: "Asynchronous patterns, closures, clean logic",
        },
        {
            name: "Node.js",
            description: "Backend services, APIs, authentication flows",
        },
        {
            name: "Express.js",
            description: "REST APIs, middleware, validation, error handling",
        },
        {
            name: "MongoDB",
            description: "Schema design, queries, indexing, data modeling",
        },
        {
            name: "Tailwind CSS",
            description: "Responsive UI, design systems, utility-first styling",
        },
    ];

    const otherSkills = {
        Frontend: [
            "HTML5",
            "CSS3",
            "Framer Motion",
            "Responsive Design",
            "Accessibility (Basics)",
        ],
        Backend: [
            "JWT Authentication",
            "REST API Design",
            "File Uploads",
            "WebSockets",
        ],
        Tools: [
            "Git & GitHub",
            "VS Code",
            "npm",
            "Postman",
            "Vercel",
        ],
        Fundamentals: [
            "Data Structures",
            "Algorithms",
            "Problem Solving",
            "Basic System Design",
        ],
    };

    return (
        <section className="min-h-screen px-6 pt-28 pb-20 bg-gradient-to-b from-black via-gray-900 to-black relative">
            {/* Ambient background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                {/* Page Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-20"
                >
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                        Skills & <span className="text-blue-400">Tools</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl">
                        Technologies I use regularly, and fundamentals I continue to refine.
                    </p>
                </motion.div>

                {/* Core Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-semibold text-white mb-10">
                        Core Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {coreSkills.map((skill) => (
                            <div
                                key={skill.name}
                                className="bg-gray-900/60 border border-gray-800 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-medium text-white mb-2">
                                    {skill.name}
                                </h3>
                                <p className="text-gray-400">{skill.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Competitive Programming */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-24"
                >
                    <h2 className="text-3xl font-semibold text-white mb-10">
                        Problem Solving & Competitive Programming
                    </h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Codeforces */}
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-medium text-white mb-3">
                                Codeforces
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Regular participation in algorithmic contests with focus on
                                implementation accuracy, edge cases, and time complexity.
                            </p>
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-500/10 
              text-blue-400 text-sm border border-blue-500/30">
                                Rating: 1400+
                            </span>
                        </div>

                        {/* LeetCode */}
                        <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-6">
                            <h3 className="text-xl font-medium text-white mb-3">
                                LeetCode
                            </h3>
                            <p className="text-gray-400 mb-4">
                                Consistent problem solving across data structures and algorithms,
                                emphasizing clean and optimal solutions.
                            </p>
                            <span className="inline-block px-4 py-2 rounded-full bg-green-500/10 
              text-green-400 text-sm border border-green-500/30">
                                Rating: 1850+
                            </span>
                        </div>
                    </div>
                </motion.div>

                {/* Other Skills */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-semibold text-white mb-10">
                        Other Technical Skills
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12">
                        {Object.entries(otherSkills).map(([category, skills]) => (
                            <div key={category}>
                                <h3 className="text-lg font-medium text-gray-300 mb-4">
                                    {category}
                                </h3>
                                <div className="flex flex-wrap gap-3">
                                    {skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-4 py-2 rounded-full bg-gray-800 
                      border border-gray-700 text-sm text-gray-300 
                      hover:border-blue-400 hover:text-blue-400 transition"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
