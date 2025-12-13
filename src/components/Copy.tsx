"use client";

import { motion } from "framer-motion";

export default function CopyrightSection() {
  return (
    <section className="bg-slate-950 py-8 flex justify-center items-center relative">
      {/* Gradient Animation */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="text-center text-lg font-medium bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent animate-gradient-x"
      >
        &copy; {new Date().getFullYear()} NexCall&Web Services. All Rights Reserved.
      </motion.p>

      {/* Inline CSS for Gradient Animation */}
      <style>{`
        @keyframes gradient-x {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 4s ease infinite;
        }
      `}</style>
    </section>
  );
}