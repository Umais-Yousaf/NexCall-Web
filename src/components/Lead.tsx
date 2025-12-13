"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle,
  Building,
  Target,
  Send,
  CheckSquare,
} from "lucide-react";

export default function LeadGenerationSection() {
  return (
    <section
      id="lead-generation"
      className="relative flex flex-col items-center justify-center bg-slate-950 px-4 py-32"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-extrabold text-center"
      >
        Lead Generation
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 text-3xl sm:text-4xl font-semibold text-white text-center"
      >
        High-Quality Leads That Convert Into Sales
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-4 max-w-3xl text-center text-gray-300 text-lg sm:text-xl"
      >
        Targeted • Qualified • Results-Driven
      </motion.p>

      {/* Stats Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.9 }}
        className="mt-12 flex flex-col sm:flex-row gap-6 flex-wrap justify-center"
      >
        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-300 to-sky-500 px-6 py-4 text-white hover:scale-105 transition shadow-lg">
          <ArrowUpRight className="h-6 w-6 text-white" />
          Conversion Rate 3-5x
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-sky-500 to-violet-400 px-6 py-4 text-white hover:scale-105 transition shadow-lg">
          <CheckCircle className="h-6 w-6 text-white" />
          Lead Quality Score 95%
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-400 to-purple-700 px-6 py-4 text-white hover:scale-105 transition shadow-lg">
          <Building className="h-6 w-6 text-white" />
          Industries Served 15+
        </button>
      </motion.div>

      {/* Discover Process Button */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 px-8 py-4 text-white font-semibold text-lg hover:scale-105 transition shadow-xl"
      >
        Discover Our Process
      </motion.button>

      {/* Dark Card */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1.5 }}
        className="mt-16 w-[90%] rounded-3xl bg-slate-900 p-12 shadow-2xl flex flex-col items-center"
      >
        <h3 className="text-3xl font-bold text-white text-center">
          Our Lead Generation Process
        </h3>
        <p className="mt-4 text-center text-gray-300 text-lg">
          A systematic approach to identifying, engaging, and qualifying your
          ideal prospects
        </p>

        {/* Process Cards */}
        <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center bg-slate-950 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <Target className="h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-xl font-semibold text-white text-center">
              Target Identification
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              We analyze your ideal customer profile and identify high-potential
              targets using advanced data analytics
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col items-center bg-slate-950 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <Send className="h-8 w-8 text-green-400" />
            <h4 className="mt-4 text-xl font-semibold text-white text-center">
              Outreach Campaign
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              Multi-channel approach including calls, emails, and social media
              with personalized messaging
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col items-center bg-slate-950 rounded-2xl p-6 shadow-lg hover:scale-105 transition"
          >
            <CheckSquare className="h-8 w-8 text-violet-400" />
            <h4 className="mt-4 text-xl font-semibold text-white text-center">
              Lead Qualification
            </h4>
            <p className="mt-2 text-gray-300 text-center">
              Rigorous BANT qualification process to ensure only sales-ready
              leads reach your team
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
