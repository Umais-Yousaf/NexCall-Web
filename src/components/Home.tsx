"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const headings = [
  "Scale Your Business Globally with 24/7 Outsourcing Solutions",
  "Transform Operations with NexCall & Web Business Solutions",
  "Reduce Costs by 60% with Expert BPO Services",
];

export default function HomeSection() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % headings.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    id="home"
     className="relative flex min-h-screen items-center justify-center overflow-hidden bg-slate-950 px-4 pt-24 md:pt-0">
      {/* Glow background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-200px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-200px] left-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-5xl text-center">
        {/* Animated Headings */}
        <div className="relative min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl"
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Web Development Lines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 space-y-2"
        >
          <h2 className="text-xl font-semibold text-white md:text-2xl">
            High-Performance Web Development Solutions
          </h2>
          <h3 className="text-base font-medium text-slate-300 md:text-lg">
            Scalable, secure, and conversion-focused digital experiences
          </h3>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-8 max-w-3xl text-center text-base text-slate-300 md:text-lg"
        >
          Join <span className="font-semibold text-cyan-400">500+</span>{" "}
          companies saving up to
          <span className="font-semibold text-violet-400"> 60%</span> on
          operational costs with our comprehensive BPO solutions. 24/7 support,
          99.9% accuracy, global scale.
        </motion.p>
      </div>
    </section>
  );
}
