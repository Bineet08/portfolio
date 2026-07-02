import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { fetchLeetCodeData, fetchLeetCodeContestData } from "../services/leetcodeApi";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const RATINGS = {
  codeforces: "1500+",
  leetcode: "2100+",
  codechef: "1700+",
};

const links = {
  codeforces: "https://codeforces.com/profile/bineet0917",
  leetcode: "https://leetcode.com/ankit__1729",
  codechef: "https://www.codechef.com/users/ankit_0917",
};

export default function Skills() {
  const coreStack = [
    { name: "React", detail: "Component architecture, hooks, context, routing" },
    { name: "JavaScript (ES6+)", detail: "Async patterns, closures, prototypes, module systems" },
    { name: "Node.js", detail: "HTTP servers, middleware pipelines, process management" },
    { name: "Express.js", detail: "REST APIs, auth middleware, error handling, file uploads" },
    { name: "MongoDB", detail: "Schema design, aggregation, indexing, Mongoose ODM" },
    { name: "Tailwind CSS", detail: "Utility-first styling, responsive design, design systems" },
  ];

  const other = {
    "Frontend": ["HTML5", "CSS3", "Framer Motion", "Responsive Design", "Accessibility"],
    "Backend": ["JWT Auth", "REST APIs", "File Uploads", "WebSockets"],
    "Tools": ["Git", "GitHub", "VS Code", "npm", "Postman", "Vercel", "Render"],
    "Fundamentals": ["Data Structures", "Algorithms", "Problem Solving", "System Design"],
  };

  const [leetcode, setLeetcode] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchLeetCodeData("ankit__1729");
        setLeetcode(data);
      } catch (error) {
        console.error("Error fetching LeetCode data:", error);
      }
    };

    fetchData();
  },[]);

  const [contestData, setContestData] = useState({});

  useEffect(() => {
    const fetchContestData = async () => {
      try {
        const data = await fetchLeetCodeContestData("ankit__1729");
        console.log(data);
        setContestData(data);
      } catch (error) {
        console.error("Error fetching LeetCode contest data:", error);
      }
    };

    fetchContestData();
  }, []);

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-32 bg-[#050505] relative z-10">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-32 max-w-2xl"
        >
          <span className="eyebrow block mb-6">Capabilities</span>
          <h1 className="text-5xl md:text-7xl font-bold text-neutral-50 mb-6 tracking-tighter">
            Technical Arsenal
          </h1>
          <p className="text-neutral-400 text-lg leading-relaxed">
            The languages, frameworks, and methodologies I employ 
            to architect robust software systems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
          
          {/* Left Column: Core Stack & CP */}
          <div className="lg:col-span-7 space-y-24">
            
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-8 tracking-tight border-b border-neutral-900 pb-4">
                Core Stack
              </h2>
              <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
                {coreStack.map((skill) => (
                  <div key={skill.name} className="group">
                    <h3 className="text-base font-semibold text-neutral-200 mb-2 group-hover:text-white transition-colors">
                      {skill.name}
                    </h3>
                    <p className="text-sm text-neutral-500 leading-relaxed">
                      {skill.detail}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-8 tracking-tight border-b border-neutral-900 pb-4">
                Algorithm & Logic
              </h2>
              <div className="grid sm:grid-cols-2 gap-8">
                <div className="stark-panel p-6 border-l-2 border-l-neutral-600 group hover:border-l-white transition-colors">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-base font-bold text-neutral-200 hover:text-white transition-colors ">Codeforces</span>
                    <span className="text-sm font-mono text-neutral-500">{RATINGS.codeforces}</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Regular contest participation. Focus on implementation accuracy and complexity analysis.
                  </p>
                </div>
                <div className="stark-panel p-6 border-l-2 border-l-neutral-600 group hover:border-l-white transition-colors">
                  <div className="flex items-baseline justify-between mb-4">
                    <a
                      href={links.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-neutral-200 hover:text-white transition-colors"
                    >
                      LeetCode
                    </a>
                    <span className="text-sm font-mono text-neutral-500">{RATINGS.leetcode}</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Consistent problem solving across data structures. Preferring clean over clever code.
                  </p>
                  <p className="text-sm text-neutral-500 leading-relaxed mt-2">
                    Ranking: {contestData?.contestGlobalRanking??"N/A"}
                  </p>
                </div>
                <div className="stark-panel p-6 border-l-2 border-l-neutral-600 group hover:border-l-white transition-colors">
                  <div className="flex items-baseline justify-between mb-4">
                    <a
                      href={links.codechef}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base font-bold text-neutral-200 hover:text-white transition-colors"
                    >
                      CodeChef
                    </a>
                    <span className="text-sm font-mono text-neutral-500">{RATINGS.codechef}</span>
                  </div>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Regular contest participation. Focus on implementation accuracy and complexity analysis.
                  </p>
                </div>
              </div>
            </motion.div>

          </div>

          {/* Right Column: Other Skills */}
          <div className="lg:col-span-4 lg:col-start-9">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="sticky top-32 space-y-16"
            >
              <h2 className="text-2xl font-bold text-neutral-100 mb-8 tracking-tight border-b border-neutral-900 pb-4">
                Peripheral Knowledge
              </h2>
              
              <div className="space-y-10">
                {Object.entries(other).map(([category, skills]) => (
                  <div key={category}>
                    <h3 className="text-xs font-semibold text-neutral-600 uppercase tracking-widest mb-4">
                      {category}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-1 text-[10px] font-semibold tracking-wider uppercase text-neutral-500 border border-neutral-850 rounded-sm hover:bg-neutral-100 hover:text-black hover:border-neutral-100 transition-all duration-300 cursor-default"
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

        </div>
      </div>
    </section>
  );
}
