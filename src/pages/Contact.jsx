import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("ankitgupta170620@gmail.com");
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      console.warn("Clipboard API not available");
    }
  };

  const links = [
    {
      label: "Email",
      value: "ankitgupta170620@gmail.com",
      href: "mailto:ankitgupta170620@gmail.com",
    },
    {
      label: "GitHub",
      value: "github.com/Bineet08",
      href: "https://github.com/Bineet08",
      external: true,
    },
    {
      label: "LinkedIn",
      value: "Bineet Gupta",
      href: "https://www.linkedin.com/in/bineet-gupta-024407308/",
      external: true,
    },
  ];

  return (
    <section className="min-h-screen px-6 md:px-12 lg:px-24 pt-40 pb-20 bg-[#050505] relative z-10 flex flex-col">
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
          
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7"
          >
            <motion.div variants={fadeUp} className="mb-6">
              <span className="eyebrow">Communication</span>
            </motion.div>
            
            <motion.h1
              variants={fadeUp}
              className="text-5xl md:text-7xl lg:text-[6rem] font-bold text-neutral-50 mb-8 tracking-tighter leading-none"
            >
              Let's build<br />something.
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-neutral-400 text-lg leading-relaxed max-w-md">
              Whether you want to discuss a project, ask about my work, or just
              say hi — my inbox is open. I prioritize direct, clear communication.
            </motion.p>

            <motion.div variants={fadeUp} className="mt-12 flex flex-col sm:flex-row gap-4 items-start">
              <a
                href="mailto:ankitgupta170620@gmail.com"
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-neutral-100 text-[#050505] font-bold text-sm uppercase tracking-widest overflow-hidden"
              >
                <span className="relative z-10">Send an Email</span>
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-[0.16,1,0.3,1] z-0" />
              </a>

              <button
                onClick={handleCopyEmail}
                className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 border border-neutral-800 text-neutral-400 font-bold text-sm uppercase tracking-widest hover:border-neutral-600 hover:text-neutral-200 transition-colors"
              >
                {copiedEmail ? "Copied ✓" : "Copy Address"}
              </button>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="visible"
            className="lg:col-span-4 lg:col-start-9 space-y-6"
          >
            {links.map((link) => (
              <motion.a
                key={link.label}
                variants={fadeUp}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="block group border-b border-neutral-900 pb-6"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-2">
                  {link.label}
                </div>
                <div className="flex items-center justify-between text-neutral-300 group-hover:text-neutral-50 transition-colors">
                  <span className="text-lg font-medium">{link.value}</span>
                  <span className="transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                    {link.external ? "↗" : "✉"}
                  </span>
                </div>
              </motion.a>
            ))}
          </motion.div>

        </div>

      </div>
      
      {/* Footer nudge */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-7xl mx-auto w-full mt-24 pt-8 border-t border-neutral-900 flex justify-between items-center"
      >
        <p className="text-neutral-600 text-xs font-bold tracking-widest uppercase">
          Based in India
        </p>
        <Link
          to="/projects"
          className="text-xs font-bold tracking-widest uppercase text-neutral-500 hover:text-neutral-200 transition-colors"
        >
          View Archive →
        </Link>
      </motion.div>
    </section>
  );
}