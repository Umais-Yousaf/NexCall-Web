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
      className="relative flex min-h-[90vh] sm:min-h-screen items-center justify-center overflow-hidden px-4 pt-24 md:pt-0"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-20 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/i (3).webp')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 -z-10 bg-slate-950/85" />

      {/* Glow Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-180px] h-[360px] w-[360px] sm:h-[500px] sm:w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-[-180px] left-1/3 h-[300px] w-[300px] sm:h-[400px] sm:w-[400px] rounded-full bg-violet-600/20 blur-[120px]" />
      </div>

      {/* Content */}
      <div className="mx-auto max-w-5xl text-center">
        {/* Animated Headings */}
        <div className="relative min-h-[110px] sm:min-h-[140px] px-2">
          <AnimatePresence mode="wait" initial={false}>
            <motion.h1
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent
              text-2xl sm:text-4xl md:text-5xl font-extrabold leading-snug"
            >
              {headings[index]}
            </motion.h1>
          </AnimatePresence>
        </div>

        {/* Sub Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-4 sm:mt-6"
        >
          <h3 className="text-sm sm:text-base md:text-lg font-medium text-slate-300">
            Scalable, secure, and conversion-focused digital experiences
          </h3>
        </motion.div>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mx-auto mt-6 sm:mt-8 max-w-3xl text-sm sm:text-base md:text-lg text-slate-300 px-2"
        >
          Join{" "}
          <span className="font-semibold text-cyan-400">500+</span> companies
          saving up to{" "}
          <span className="font-semibold text-violet-400">60%</span> on
          operational costs with our comprehensive BPO solutions. 24/7 support,
          99.9% accuracy, global scale.
        </motion.p>
      </div>
    </section>
  );
}
