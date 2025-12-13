"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  BarChart3,
  DollarSign,
  ArrowRight,
  Target,
  UserCheck,
  ShieldCheck,
  Briefcase,
} from "lucide-react";

export default function LifeInsuranceSection() {
  return (
    <section
      id="insurance-sales"
      className="relative flex flex-col items-center justify-center bg-slate-950 px-5 sm:px-4 py-32 sm:py-36"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 
        bg-clip-text text-transparent 
        text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
      >
        Life Insurance Sales
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-5 text-2xl sm:text-3xl md:text-4xl 
        font-semibold text-white text-center"
      >
        Specialized Outbound Sales Solutions
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-5 max-w-3xl text-center 
        text-gray-300 text-base sm:text-lg"
      >
        Compliant • Expert • Results-Driven
      </motion.p>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 grid gap-6 grid-cols-1 sm:grid-cols-3 w-full max-w-5xl"
      >
        <div className="rounded-2xl bg-cyan-500/20 p-6 text-center shadow-lg">
          <TrendingUp className="mx-auto h-8 w-8 text-cyan-400" />
          <h4 className="mt-3 text-xl font-semibold text-white">
            Conversion Rate
          </h4>
          <p className="mt-1 text-cyan-300 text-lg">15–25%</p>
        </div>

        <div className="rounded-2xl bg-sky-500/20 p-6 text-center shadow-lg">
          <BarChart3 className="mx-auto h-8 w-8 text-sky-400" />
          <h4 className="mt-3 text-xl font-semibold text-white">
            ROI Increase
          </h4>
          <p className="mt-1 text-sky-300 text-lg">3–5x</p>
        </div>

        <div className="rounded-2xl bg-violet-500/20 p-6 text-center shadow-lg">
          <DollarSign className="mx-auto h-8 w-8 text-violet-400" />
          <h4 className="mt-3 text-xl font-semibold text-white">
            Cost Reduction
          </h4>
          <p className="mt-1 text-violet-300 text-lg">40–60%</p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-14 flex items-center gap-3 rounded-2xl 
        bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 
        px-10 py-5 text-white text-lg font-semibold 
        shadow-xl hover:scale-105 transition"
      >
        Explore Our Approach
        <ArrowRight className="h-5 w-5" />
      </motion.button>

      {/* Big Methodology Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1 }}
        className="mt-20 w-full sm:w-[92%] 
        rounded-3xl bg-slate-900 p-6 sm:p-12 shadow-2xl"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Our Life Insurance Sales Methodology
        </h3>

        <p className="mt-4 text-center text-gray-300 text-base sm:text-lg">
          Compliance-first approach with proven results in the insurance industry
        </p>

        {/* Method Cards */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg text-center"
          >
            <Target className="mx-auto h-8 w-8 text-cyan-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Targeted Prospecting
            </h4>
            <p className="mt-2 text-gray-300">
              We identify and qualify ideal candidates using advanced data
              analytics.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg text-center"
          >
            <UserCheck className="mx-auto h-8 w-8 text-sky-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Needs-Based Selling
            </h4>
            <p className="mt-2 text-gray-300">
              Consultative approach focused on client needs and financial goals.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl bg-slate-950 p-6 shadow-lg text-center"
          >
            <ShieldCheck className="mx-auto h-8 w-8 text-violet-400" />
            <h4 className="mt-4 text-xl font-semibold text-white">
              Compliance Focused
            </h4>
            <p className="mt-2 text-gray-300">
              All interactions follow strict regulatory guidelines.
            </p>
          </motion.div>
        </div>

        {/* Full Width Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mt-12 rounded-3xl bg-black 
          p-8 sm:p-12 shadow-2xl text-center"
        >
          <Briefcase className="mx-auto h-12 w-12 text-cyan-400" />
          <h4 className="mt-4 text-2xl sm:text-3xl font-bold text-white">
            Specialized Insurance Sales
          </h4>
          <p className="mt-3 text-gray-300 text-base sm:text-lg">
            Expert knowledge across all insurance product lines
          </p>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto">
            Our agents are trained in term life, whole life, universal life, and
            final expense policies. We communicate benefits effectively while
            maintaining full regulatory compliance.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
 