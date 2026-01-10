/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

export default function About() {
  const values = [
    {
      icon: "🎯",
      title: "System thinking",
      description: "Designing flows that scale beyond the first version."
    },
    {
      icon: "🏗️",
      title: "Clean architecture",
      description: "Separating concerns and writing maintainable code."
    },
    {
      icon: "🔧",
      title: "Real-world problems",
      description: "Working on projects with practical constraints."
    },
    {
      icon: "📚",
      title: "Continuous learning",
      description: "Improving fundamentals alongside new tools."
    }
  ];

  const timeline = [
    {
      year: "2023",
      title: "Started Full-Stack Journey",
      description: "Began learning web development, built first CRUD application"
    },
    {
      year: "2024",
      title: "Deep Dive into Backend",
      description: "Explored system design, databases, and API architecture"
    },
    {
      year: "2025",
      title: "Building Real Solutions",
      description: "Creating production-ready applications with proper testing"
    }
  ];

  return (
    <section className="min-h-screen px-6 py-28 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Enhanced ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Page heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-blue-400">Me</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            A short story about how I think, build, and keep improving.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div className="grid md:grid-cols-2 gap-16 items-start mb-24">
          {/* LEFT — Narrative */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-6 text-gray-300 leading-relaxed text-lg"
          >
            <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-blue-400 first-letter:mr-2 first-letter:float-left">
              I'm a student developer who enjoys building systems that feel
              simple on the surface but are thoughtfully designed underneath.
              I'm most interested in how ideas turn into working software —
              from the first line of logic to the final user experience.
            </p>

            <p>
              Over time, I've worked on full-stack projects involving real-time
              communication, file uploads, authentication, and data modeling.
              These projects taught me that good software isn't just about
              features — it's about handling edge cases, tradeoffs, and failure
              scenarios gracefully.
            </p>

            <p>
              I care deeply about code structure, readability, and long-term
              maintainability. I prefer clean abstractions over clever hacks,
              and I enjoy refactoring as much as building something new.
            </p>

            <p>
              Outside of development, I like learning how systems behave at
              scale, solving algorithmic problems, and understanding why things
              break — not just how to fix them.
            </p>

            {/* Quick stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">15+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">3+</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-1">∞</div>
                <div className="text-sm text-gray-500 uppercase tracking-wider">Learning</div>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Highlights */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-gray-900/60 border border-gray-800 rounded-2xl p-8 hover:border-gray-700 transition-colors"
          >
            <h2 className="text-2xl font-semibold text-white mb-8">
              What I focus on
            </h2>

            <div className="space-y-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-4 group"
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <div>
                    <h3 className="text-blue-400 font-medium mb-1">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-10"
            >
              <motion.a
                href="/projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-blue-500 
                text-black font-semibold hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/30"
                whileHover={{ scale: 1.05, x: 2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View My Work</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Journey Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
            My <span className="text-blue-400">Journey</span>
          </h2>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-transparent" />

            <div className="space-y-16">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                    }`}
                >
                  {/* Content card */}
                  <div className="flex-1">
                    <div className={`${index % 2 === 0 ? "text-right" : "text-left"
                      }`}>
                      <div className="inline-block bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors">
                        <div className="text-blue-400 font-bold text-sm mb-2">{item.year}</div>
                        <h3 className="text-white font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="relative flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                      viewport={{ once: true }}
                      className="w-4 h-4 rounded-full bg-blue-500 border-4 border-black z-10"
                    />
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-900/80 to-gray-800/80 border border-gray-800 rounded-2xl p-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Let's Build Something Together
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and opportunities
            to collaborate with other developers.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <motion.a
              href="/contact"
              className="px-8 py-4 rounded-lg bg-blue-500 text-black font-semibold 
              hover:bg-blue-400 transition-all shadow-lg shadow-blue-500/30"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/projects"
              className="px-8 py-4 rounded-lg border-2 border-gray-700 text-white 
              hover:border-blue-400 hover:text-blue-400 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}