import { motion } from "framer-motion";

const links = [
  { label: "GitHub", href: "https://github.com/Bineet08", external: true },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bineet-gupta-024407308/", external: true },
  { label: "Email", href: "mailto:ankitgupta170620@gmail.com", external: false },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[#050505] border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-16">

        {/* Top row: name + links */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">

          {/* Left: identity */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-2xl font-black text-neutral-100 tracking-tight mb-1">
              Bineet Gupta
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-neutral-500 mb-0.5">
              Full-Stack Developer
            </p>
            <p className="text-xs text-neutral-700 uppercase tracking-widest">
              Varanasi, India
            </p>
          </motion.div>

          {/* Right: nav links */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-8"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="group relative text-xs font-bold uppercase tracking-widest text-neutral-500 hover:text-neutral-100 transition-colors duration-300 pb-0.5"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-neutral-100 group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </motion.div>
        </div>

        {/* Bottom row: built-with + year */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-12 pt-8 border-t border-neutral-900"
        >
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
            Built with React + Tailwind CSS
          </p>
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-700">
            © 2026 Bineet Gupta
          </p>
        </motion.div>

      </div>
    </footer>
  );
}
