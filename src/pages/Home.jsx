import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import FeaturedProject from "../components/FeaturedProject";
import profilePic from "../assets/displaypic/profile.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const stats = [
  { value: "4+", label: "Projects Shipped" },
  { value: "2+", label: "Years Coding" },
  { value: "1500+", label: "Codeforces" },
  { value: "2100+", label: "LeetCode" },
];

const services = [
  { num: "01", title: "Full-Stack Engineering", desc: "End-to-end apps — schema design, REST APIs, auth, and deployment." },
  { num: "02", title: "UI & Interaction", desc: "Interfaces built with tight typography, intentional spacing, and smooth motion." },
  { num: "03", title: "Systems & Architecture", desc: "Resilient data flows, WebSocket integration, and maintainable code structure." },
];

export default function Home() {
  const tools = ["React", "Node.js", "Express", "MongoDB", "Framer Motion", "Tailwind CSS"];

  return (
    <div className="bg-[#050505] relative min-h-screen overflow-x-hidden bg-grid-pattern">
      {/* Ambient lighting spot */}
      <div className="absolute inset-0 bg-vignette pointer-events-none" />

      {/* ─────────────────── HERO ─────────────────── */}
      <section className="relative z-10 px-6 md:px-12 lg:px-24 pt-32 pb-12 min-h-screen flex flex-col justify-between">
        <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-between relative">

          {/* Top Bar with coordinates */}
          <div className="flex items-center justify-between border-b border-neutral-900/60 pb-6 mb-8 md:mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-6"
            >
              <span className="text-[10px] font-mono tracking-widest text-neutral-600">SYS_REF // INDEX_2026</span>
              <span className="hidden sm:inline w-[1px] h-3 bg-neutral-800" />
              <span className="hidden sm:inline text-[10px] font-mono tracking-widest text-neutral-600">LOC: 25.3176° N, 82.9739° E</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="flex items-center gap-2"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-400">Open to Work</span>
            </motion.div>
          </div>

          {/* 12-Column Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-start my-auto relative py-4">

            {/* LEFT 8 COLUMNS: Large Typography, Bio, CTA */}
            <motion.div
              initial="hidden" animate="visible" variants={stagger}
              className="md:col-span-8 flex flex-col gap-10"
            >
              {/* Big Title with Mobile Portrait */}
              <div className="flex items-center justify-between gap-4">
                <motion.h1
                  variants={fadeUp}
                  className="text-[clamp(2.75rem,10vw,7.5rem)] font-black text-neutral-50 tracking-[-0.05em] leading-[0.82] flex-1"
                >
                  BINEET<br />GUPTA
                </motion.h1>

                {/* Mobile square profile pic */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="md:hidden shrink-0 w-28 h-28 sm:w-36 sm:h-36 border border-neutral-900 bg-[#070707]/30 p-1 sm:p-1.5 rounded-[4px] relative self-center"
                >
                  <div className="absolute inset-0 bg-neutral-900/40 rounded-[2px] transform translate-x-1 translate-y-1" />
                  <div className="relative z-10 w-full h-full overflow-hidden rounded-[2px] aspect-square bg-neutral-950">
                    <img
                      src={profilePic}
                      alt="Bineet Gupta portrait"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </motion.div>
              </div>

              {/* Sub-row: bio and stats preview */}
              <motion.div
                variants={fadeUp}
                className="grid sm:grid-cols-12 gap-8 items-start border-t border-neutral-900/60 pt-8"
              >
                {/* Developer statement */}
                <div className="sm:col-span-8">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-1 h-1 bg-neutral-500 rounded-full" />
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-neutral-500">
                      Full-Stack Architect
                    </span>
                  </div>
                  <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md">
                    Architecting production-ready web apps through structured engineering, clean schema patterns, and uncompromising layout quality.
                  </p>
                </div>

                {/* Micro tech overview */}
                <div className="sm:col-span-4 flex flex-col gap-2">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-neutral-600">Focus Areas</span>
                  <div className="space-y-1 font-mono text-[10px] text-neutral-400">
                    <p>● Systems Engineering</p>
                    <p>● Creative Frontend</p>
                    <p>● Schema & DB Security</p>
                  </div>
                </div>
              </motion.div>

              {/* Awwwards-style Magnetic custom buttons */}
              <motion.div variants={fadeUp} className="flex flex-wrap gap-4 mt-4">
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 bg-neutral-100 text-black font-mono text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 rounded-[2px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Projects <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span>
                  </span>
                  <span className="absolute inset-0 bg-neutral-200 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </Link>

                <a
                  href="/public_resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 border border-neutral-800 text-neutral-400 font-mono text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 hover:border-neutral-500 hover:text-white hover:bg-neutral-900/40 rounded-[2px]"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Resume
                    <span className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </span>

                  <span className="absolute inset-0 bg-neutral-900/50 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </a>

                <Link
                  to="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3.5 border border-neutral-800 text-neutral-400 font-mono text-[11px] uppercase tracking-[0.2em] font-bold overflow-hidden transition-all duration-300 hover:border-neutral-500 hover:text-white rounded-[2px]"
                >
                  <span className="relative z-10">Contact</span>
                  <span className="absolute inset-0 bg-neutral-900/50 transform scale-y-0 group-hover:scale-y-100 origin-bottom transition-transform duration-500 ease-[0.16,1,0.3,1]" />
                </Link>
              </motion.div>
            </motion.div>

            {/* RIGHT 4 COLUMNS: Structured Portrait card with Tension & Alignment */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="hidden md:flex md:col-span-4 justify-end"
            >
              {/* Structural border box to anchor portrait */}
              <div className="relative group/portrait p-4 border border-neutral-900 bg-[#070707]/30 backdrop-blur-[2px] rounded-[4px] w-full max-w-[200px] sm:max-w-[240px] md:max-w-[260px] lg:max-w-[280px] xl:max-w-[320px]">

                {/* Small blueprint indicators */}
                <div className="absolute -top-1.5 -left-1.5 font-mono text-[8px] text-neutral-800">+</div>
                <div className="absolute -bottom-1.5 -right-1.5 font-mono text-[8px] text-neutral-800">+</div>

                {/* Location details shelf */}
                <div className="flex justify-between w-full text-[8px] font-mono text-neutral-600 uppercase tracking-widest pb-3 mb-4 border-b border-neutral-900">
                  <span>SYS_ID // 08</span>
                  <span>IIT (BHU) VARANASI</span>
                </div>

                {/* Image container with custom shadows */}
                <div className="relative overflow-hidden aspect-[3/4.2] rounded-[2px] bg-neutral-950 mb-4">
                  {/* Subtle offset shadow backing */}
                  <div className="absolute inset-0 bg-neutral-900/40 rounded-[2px] transform translate-x-1.5 translate-y-1.5 group-hover/portrait:-translate-x-1 group-hover/portrait:-translate-y-1 transition-transform duration-500 ease-[0.16,1,0.3,1]" />

                  <img
                    src={profilePic}
                    alt="Bineet Gupta portrait"
                    className="relative z-10 w-full h-full object-cover object-top transition-all duration-700 scale-100 group-hover/portrait:scale-105"
                  />
                </div>

                {/* Identity labels below portrait */}
                <div className="space-y-1 mt-4">
                  <p className="text-[11px] font-black uppercase tracking-[0.25em] text-neutral-200">BINEET GUPTA</p>
                  <p className="text-[9px] font-mono uppercase tracking-[0.15em] text-neutral-500">Full-Stack Engineer</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Scroll Cue / Footnote */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 1 }}
            className="flex items-center gap-3 pt-6 border-t border-neutral-900"
          >
            <motion.span
              animate={{ y: [0, 4, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="text-neutral-700 text-sm font-mono"
            >
              ↓
            </motion.span>
            <span className="text-[9px] font-mono uppercase tracking-[0.25em] text-neutral-700">Scroll to explore</span>
            <div className="ml-auto hidden md:flex items-center gap-5 text-[9px] font-mono uppercase tracking-[0.15em] text-neutral-700">
              <span>IIT VARANASI</span>
              <span>·</span>
              <span>EST_2026</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── STATS BAR ─────────────────── */}
      <section className="relative z-10 border-t border-b border-neutral-900 bg-[#080808]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid grid-cols-2 md:grid-cols-4 divide-x divide-neutral-900"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="py-8 px-4 md:px-8 flex flex-col gap-1"
              >
                <span className="text-3xl md:text-4xl font-black text-neutral-100 tracking-tight">{stat.value}</span>
                <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─────────────────── DISCIPLINE ─────────────────── */}
      <section className="relative z-10 py-20 px-6 md:px-12 lg:px-24 bg-[#050505]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp} className="mb-10"
          >
            <span className="eyebrow">Discipline</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-neutral-900">
            {services.map((s, i) => (
              <motion.div
                key={s.num}
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
                variants={fadeUp}
                className={`py-10 group pr-8
                  ${i < services.length - 1 ? "border-b md:border-b-0 md:border-r border-neutral-900" : ""}
                  ${i > 0 ? "md:pl-8" : ""}`}
              >
                <span className="text-xs font-mono text-neutral-700 block mb-5">{s.num}</span>
                <h3 className="text-base font-bold text-neutral-200 mb-3 group-hover:text-white transition-colors">{s.title}</h3>
                <p className="text-sm text-neutral-500 leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─────────────────── SELECTED WORK ─────────────────── */}
      <section className="relative z-10 py-24 border-t border-neutral-900 bg-[#050505]">
        <FeaturedProject />
      </section>

      {/* ─────────────────── PROFILE & STACK ─────────────────── */}
      <section className="relative z-10 py-32 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-t border-neutral-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">

            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeUp} className="lg:col-span-4"
            >
              <span className="eyebrow block mb-6">About</span>
              <h2 className="text-4xl md:text-5xl font-black text-neutral-100 tracking-tight leading-tight">
                Profile &<br />Capabilities
              </h2>
            </motion.div>

            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-16">

              <motion.div
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="eyebrow block mb-6">Background</span>
                <div className="text-neutral-400 space-y-4 leading-relaxed text-sm">
                  <p>
                    Started with competitive programming in C++, which gave me a
                    structural approach to problems before touching a web framework.
                  </p>
                  <p>
                    Today I build maintainable full-stack systems — from resilient schemas
                    to polished interfaces — prioritizing correctness at every layer.
                  </p>
                </div>
                <Link
                  to="/about"
                  className="group relative inline-flex items-center gap-2 mt-8 text-neutral-50 text-xs font-bold uppercase tracking-widest pb-1"
                >
                  <span>Full Story</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-700 group-hover:bg-neutral-50 transition-colors duration-300" />
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </motion.div>

              <motion.div
                initial="hidden" whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={fadeUp}
              >
                <span className="eyebrow block mb-6">Core Tech</span>
                <div className="flex flex-wrap gap-2 mb-8">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-neutral-500 border border-neutral-850 rounded-sm hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-all duration-300 cursor-default"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Link
                  to="/skills"
                  className="group relative inline-flex items-center gap-2 text-neutral-50 text-xs font-bold uppercase tracking-widest pb-1"
                >
                  <span>All Skills</span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-neutral-700 group-hover:bg-neutral-50 transition-colors duration-300" />
                  <span className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">↗</span>
                </Link>
              </motion.div>

            </div>
          </div>

          {/* CTA strip */}
          <motion.div
            initial="hidden" whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            className="mt-24 pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          >
            <p className="text-neutral-600 text-xs uppercase tracking-widest font-bold">
              Open to internships & freelance
            </p>
            <Link
              to="/contact"
              className="group relative inline-flex items-center gap-3 text-neutral-50 font-black text-xl uppercase tracking-tight pb-1"
            >
              <span>Start a Conversation</span>
              <span className="absolute bottom-0 left-0 w-0 group-hover:w-full h-[2px] bg-neutral-50 transition-all duration-500 ease-[0.16,1,0.3,1]" />
              <span>→</span>
            </Link>
          </motion.div>

        </div>
      </section>
    </div>
  );
}