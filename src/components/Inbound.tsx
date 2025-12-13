"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Smile,
  Languages,
  Headphones,
  ShieldCheck,
  Layers,
} from "lucide-react";

export default function InboundSection() {
  return (
    <section
      id="inbound"
      className="relative flex flex-col items-center justify-center bg-slate-950 px-4 py-36"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-extrabold text-center"
      >
        Inbound Services
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-4 text-3xl sm:text-4xl font-semibold text-white text-center"
      >
        24/7 Professional Customer Support Solutions
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-4 max-w-3xl text-center text-gray-300 text-lg"
      >
        Multilingual • Always Available • Quality Guaranteed
      </motion.p>

      {/* Stats Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex flex-wrap justify-center gap-6"
      >
        <button className="flex items-center gap-3 rounded-2xl bg-cyan-500/20 px-6 py-4 text-cyan-400 backdrop-blur hover:bg-cyan-500/30 transition shadow-lg">
          <Clock className="h-6 w-6" />
          Avg Response &lt; 30s
        </button>

        <button className="flex items-center gap-3 rounded-2xl bg-sky-500/20 px-6 py-4 text-sky-400 backdrop-blur hover:bg-sky-500/30 transition shadow-lg">
          <Smile className="h-6 w-6" />
          Customer Satisfaction 98%
        </button>

        <button className="flex items-center gap-3 rounded-2xl bg-violet-500/20 px-6 py-4 text-violet-400 backdrop-blur hover:bg-violet-500/30 transition shadow-lg">
          <Languages className="h-6 w-6" />
          Languages Supported 4+
        </button>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-10 py-4 text-white text-lg font-semibold shadow-xl hover:scale-105 transition"
      >
        Explore Our Services
      </motion.button>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1 }}
        className="mt-20 w-[90%] rounded-3xl bg-slate-900 p-12 shadow-2xl"
      >
        <h3 className="text-3xl font-bold text-white text-center">
          24/7 Customer Support Excellence
        </h3>

        <p className="mt-4 text-center text-gray-300 text-lg">
          Experience seamless customer interactions with our multilingual
          support teams
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg flex flex-col items-center"
          >
            <Languages className="h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Multilingual Support
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              Agents fluent in 10+ languages to serve your global customer base
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg flex flex-col items-center"
          >
            <ShieldCheck className="h-8 w-8 text-sky-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Quality Assurance
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              Rigorous monitoring and scoring to maintain service excellence
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg flex flex-col items-center"
          >
            <Layers className="h-8 w-8 text-violet-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Scalable Teams
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              Easily adjust capacity based on your business needs
            </p>
          </motion.div>
        </div>

        {/* Big Full Width Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mt-10 rounded-3xl bg-black p-10 shadow-2xl flex flex-col items-center text-center"
        >
          <Headphones className="h-12 w-12 text-cyan-400" />
          <h4 className="mt-4 text-3xl font-bold text-white">
            24/7 Customer Support
          </h4>
          <p className="mt-3 text-gray-300 text-lg">
            Always available when your customers need assistance
          </p>
          <p className="mt-4 text-gray-400 max-w-3xl">
            Our teams work around the clock to ensure your customers always reach
            a live agent, with response times under 30 seconds and 98% customer
            satisfaction rates.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
