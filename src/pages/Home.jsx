/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import FeaturedProject from "../components/FeaturedProduct";

export default function Home() {
  const sectionRef = useRef(null);

  /* ------------------ ENTRY ANIMATION ------------------ */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  /* ------------------ SCROLL ANIMATION ------------------ */
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.6]);
  const visualY = useTransform(scrollYProgress, [0, 0.5], [0, 120]);
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  /* ------------------ SKILLS DATA ------------------ */
  const skills = [
    { name: "React", level: 85, color: "from-cyan-500 to-blue-500" },
    { name: "Node.js", level: 75, color: "from-green-500 to-emerald-500" },
    { name: "JavaScript", level: 70, color: "from-blue-500 to-indigo-500" },
    { name: "C++", level: 80, color: "from-yellow-500 to-orange-500" },
    { name: "MongoDB", level: 65, color: "from-green-600 to-teal-500" },
    { name: "Tailwind CSS", level: 90, color: "from-sky-400 to-cyan-400" },
  ];

  return (
    <>
      {/* =============== HERO SECTION =============== */}
      <section
        ref={sectionRef}
        className="min-h-screen pt-20 px-6 flex items-center
        bg-gradient-to-br from-gray-900 via-black to-gray-900
        relative overflow-hidden"
      >
        {/* Ambient background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* ---------------- LEFT : TEXT ---------------- */}
          <motion.div
            style={{ y: textY, opacity: textOpacity }}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl font-bold mb-6 text-white"
            >
              Hi, I'm <span className="text-blue-400">Bineet</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-400 mb-8"
            >
              Student Developer · Full-Stack Learner
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 italic mb-12 max-w-xl
              border-l-4 border-blue-500/50 pl-4"
            >
              I design logic, then teach it how to speak.
            </motion.p>

            <motion.div variants={itemVariants} className="flex gap-6">
              <motion.a
                href="/projects"
                className="px-7 py-3 rounded-lg bg-blue-500 text-black font-semibold
                hover:bg-blue-400 transition relative overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.a>

              <motion.a
                href="/contact"
                className="px-7 py-3 rounded-lg border-2 border-gray-600
                hover:border-blue-400 hover:text-blue-400 transition"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.a>
            </motion.div>

            {/* Scroll indicator - fades out completely */}
            <motion.div
              className="mt-16 flex items-center gap-2 text-gray-500 text-sm"
              style={{ opacity: scrollIndicatorOpacity }}
            >
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </motion.div>
              <span>Scroll to explore</span>
            </motion.div>
          </motion.div>

          {/* ---------------- RIGHT : VISUAL ---------------- */}
          <motion.div
            className="hidden md:flex justify-center items-center relative"
            style={{ y: visualY }}
          >
            {/* Floating blob */}
            <motion.div
              className="absolute w-80 h-80 rounded-full
              bg-gradient-to-tr from-blue-500/40 to-purple-500/40 blur-3xl"
              animate={{ y: [0, -25, 0], scale: [1, 1.1, 1] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Rotating ring */}
            <motion.div
              className="w-64 h-64 rounded-full border-2 border-blue-400/20"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            {/* Center glow */}
            <motion.div
              className="absolute w-32 h-32 rounded-full
              bg-gradient-to-r from-blue-400 to-purple-400 opacity-50"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.7, 0.5],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </section>
      <FeaturedProject />

      {/* =============== ABOUT & SKILLS SECTION =============== */}
      <section className="min-h-screen py-20 px-6 bg-black relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          {/* About Me */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              About <span className="text-blue-400">Me</span>
            </h2>
            <div className="max-w-3xl">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I'm a passionate student developer on a journey to master full-stack development.
                My fascination with technology began with curiosity about how things work behind
                the screen, and it has evolved into a dedicated pursuit of building meaningful
                digital experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                From crafting intuitive user interfaces to architecting robust backend systems,
                I love every aspect of bringing ideas to life through code. When I'm not coding,
                you'll find me exploring new frameworks, contributing to open source, or documenting
                my learning journey.
              </p>
            </div>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-5xl font-bold text-white mb-12">
              Technical <span className="text-blue-400">Skills</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 + 0.3, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-50px" }}
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA to Projects */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="mt-20 text-center"
          >
            <p className="text-gray-400 mb-6">Want to see what I've built?</p>
            <motion.a
              href="/projects"
              className="inline-block px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 
              text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore My Projects →
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}