"use client";

import { motion } from "framer-motion";
import { Users, Globe, ArrowUpRight, Code } from "lucide-react";

export default function CareerSection() {
  return (
    <section
      id="careers"
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 px-4 py-40 min-h-screen"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-extrabold text-center"
      >
        Join Our Team
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 text-3xl sm:text-4xl font-semibold text-white text-center"
      >
        Building the Future Together
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-6 max-w-4xl text-center text-gray-300 text-lg sm:text-xl"
      >
        Where innovation meets opportunity • Where talent thrives • Where
        careers evolve
      </motion.p>

      {/* Stats Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-12 flex flex-col sm:flex-row gap-6 flex-wrap justify-center"
      >
        <button className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 text-white hover:bg-white/20 transition shadow-lg">
          <ArrowUpRight className="h-6 w-6 text-cyan-400" />
          Team Growth 250%
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 text-white hover:bg-white/20 transition shadow-lg">
          <Globe className="h-6 w-6 text-violet-400" />
          Global Reach 15+ Countries
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 text-white/80 hover:text-white transition shadow-lg">
          <Users className="h-6 w-6 text-gray-400" />
          Career Advancement 85%
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4 text-white hover:bg-white/20 transition shadow-lg">
          <Code className="h-6 w-6 text-cyan-400" />
          Web Development 98%
        </button>
      </motion.div>
    </section>
  );
}
