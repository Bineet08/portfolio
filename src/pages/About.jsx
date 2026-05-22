import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

export default function About() {
  const timeline = [
    {
      year: "2023",
      title: "Algorithms First",
      detail: "Learned programming through competitive problems in C++. Understood memory, constraints, and optimization before touching a web framework.",
    },
    {
      year: "2024",
      title: "First Applications",
      detail: "Built isolated systems like attendance trackers. Learned the hard way that async data flows and state mismatches are harder than algorithms.",
    },
    {
      year: "2025",
      title: "Production Systems",
      detail: "Shipping full-stack applications. Focusing intensely on error boundaries, schema design, and seamless user feedback loops.",
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-32 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 max-w-3xl"
        >
          <span className="eyebrow block mb-6">Manifesto</span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-8 tracking-tighter">
            Philosophy
          </h1>
          <div className="space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed font-medium">
            <p>
              Writing code is the easy part. Handling edge cases, failures, 
              and unpredictable user behavior is where the actual work happens.
            </p>
            <p>
              I don't build generic templates. I build systems that are technically 
              resilient and visually uncompromising.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
          
          {/* Narrative & Focus */}
          <div className="lg:col-span-7 space-y-32">
            
            {/* Story */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-6 text-base text-neutral-400 leading-relaxed"
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-8 tracking-tight">The Origin</h2>
              <p>
                My foundation in C++ and competitive programming gave me a structural advantage. 
                I learned to decompose problems logically before I ever worried about padding or flexbox.
              </p>
              <p>
                However, I realized that algorithms alone don't solve human problems. I transitioned to 
                full-stack development because I wanted to build tangible tools—starting with systems to 
                solve friction in my own life, like an online presence for my family's store.
              </p>
              <p>
                Today, I care deeply about architecture. I document <em className="text-neutral-200 not-italic">why</em> decisions 
                are made, not just <em className="text-neutral-200 not-italic">how</em> things work.
              </p>
            </motion.div>

            {/* Principles */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-12 tracking-tight">Engineering Focus</h2>
              <div className="space-y-12">
                {[
                  {
                    title: "Failure State Design",
                    detail: "Every asynchronous operation needs explicit error handling. A polished UI is useless if an unhandled rejection crashes the production build.",
                  },
                  {
                    title: "Schema Immutability",
                    detail: "Data modeling decisions compound exponentially. A flawed schema is harder to correct than a flawed interface because it dictates everything downstream.",
                  },
                  {
                    title: "Strict API Contracts",
                    detail: "Frontend and backend must agree on response shapes implicitly. Designing robust data fetching hooks prevents days of debugging mismatched expectations.",
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex gap-6 items-start">
                    <span className="text-neutral-600 font-mono text-sm mt-1">0{i + 1}</span>
                    <div>
                      <h3 className="text-lg font-bold text-neutral-200 mb-2">{item.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Timeline (Right Column) */}
          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-12 tracking-tight">Timeline</h2>
              
              <div className="space-y-0">
                {timeline.map((item, i) => (
                  <div key={item.year} className="relative flex gap-8 pb-16 last:pb-0 group">
                    {/* Line */}
                    {i !== timeline.length - 1 && (
                      <div className="absolute top-8 left-[3.5px] bottom-0 w-[1px] bg-neutral-900 group-hover:bg-neutral-700 transition-colors" />
                    )}
                    {/* Dot */}
                    <div className="absolute top-2 left-0 w-[8px] h-[8px] rounded-full bg-neutral-700 group-hover:bg-neutral-300 transition-colors" />
                    
                    <div className="pl-6">
                      <div className="text-xs font-mono text-neutral-500 mb-2 tracking-widest">{item.year}</div>
                      <h3 className="text-lg font-bold text-neutral-200 mb-3">{item.title}</h3>
                      <p className="text-sm text-neutral-500 leading-relaxed">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>

        {/* CTA */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-32 pt-16 border-t border-neutral-900 flex flex-col sm:flex-row gap-6 items-center"
        >
          <span className="text-neutral-500 text-sm font-medium uppercase tracking-widest">Next Steps</span>
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 text-neutral-50 font-bold text-xl pb-1"
          >
            <span className="relative z-10">Initiate Contact</span>
            <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-neutral-50 transition-all group-hover:w-full z-0" />
            <span className="relative z-10 transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}