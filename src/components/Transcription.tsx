"use client";

import { motion } from "framer-motion";
import {
  Mic,
  Scale,
  Stethoscope,
  GraduationCap,
  Clock,
  CheckCircle,
  Building,
} from "lucide-react";

export default function TranscriptionSection() {
  return (
    <section
      id="transcription"
      className="relative flex flex-col items-center justify-center bg-slate-950 px-5 sm:px-4 py-32 sm:py-36"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent 
        text-4xl sm:text-5xl md:text-6xl font-extrabold text-center"
      >
        Transcription Services
      </motion.h2>

      {/* Subheading */}
      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-5 text-2xl sm:text-3xl md:text-4xl font-semibold text-white text-center"
      >
        Accurate, Fast, and Secure Transcription Solutions
      </motion.h3>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-5 max-w-3xl text-center text-gray-300 text-base sm:text-lg"
      >
        Professional • HIPAA Compliant • Multi-Industry
      </motion.p>

      {/* Stats Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-12 flex flex-col sm:flex-row flex-wrap justify-center gap-5 w-full"
      >
        <button className="flex items-center justify-center gap-3 rounded-2xl 
        bg-cyan-500/20 px-6 py-4 text-cyan-400 backdrop-blur 
        hover:bg-cyan-500/30 transition shadow-lg text-base sm:text-lg">
          <CheckCircle className="h-6 w-6" />
          Accuracy Rate 99%+
        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl 
        bg-sky-500/20 px-6 py-4 text-sky-400 backdrop-blur 
        hover:bg-sky-500/30 transition shadow-lg text-base sm:text-lg">
          <Clock className="h-6 w-6" />
          Turnaround 24–48h
        </button>

        <button className="flex items-center justify-center gap-3 rounded-2xl 
        bg-violet-500/20 px-6 py-4 text-violet-400 backdrop-blur 
        hover:bg-violet-500/30 transition shadow-lg text-base sm:text-lg">
          <Building className="h-6 w-6" />
          Industries Served 10+
        </button>
      </motion.div>

      {/* CTA */}
      <motion.button
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mt-14 rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 
        px-10 py-5 text-white text-lg sm:text-xl font-semibold shadow-xl hover:scale-105 transition"
      >
        Explore Our Services
      </motion.button>

      {/* Services Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 1 }}
        className="mt-20 w-full sm:w-[92%] rounded-3xl bg-slate-900 p-6 sm:p-12 shadow-2xl"
      >
        <h3 className="text-2xl sm:text-3xl font-bold text-white text-center">
          Our Transcription Services
        </h3>

        <p className="mt-4 text-center text-gray-300 text-base sm:text-lg">
          Comprehensive transcription solutions across multiple industries and formats
        </p>

        {/* Cards Grid */}
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2">
          {[ 
            {
              icon: <Mic className="h-8 w-8 text-cyan-400" />,
              title: "General Transcription",
              desc: "Interviews, meetings, podcasts, and more",
              list: [
                "98%+ accuracy",
                "Speaker identification",
                "Timestamps available",
                "Multiple formats",
              ],
            },
            {
              icon: <Scale className="h-8 w-8 text-sky-400" />,
              title: "Legal Transcription",
              desc: "Court proceedings, depositions, affidavits",
              list: [
                "99%+ accuracy",
                "Certified transcribers",
                "Confidentiality guaranteed",
                "Court-ready formatting",
              ],
            },
            {
              icon: <Stethoscope className="h-8 w-8 text-violet-400" />,
              title: "Medical Transcription",
              desc: "Patient records, doctor's notes, medical reports",
              list: [
                "HIPAA compliant",
                "Medical terminology",
                "Secure transfer",
                "Quality assurance",
              ],
            },
            {
              icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
              title: "Academic Transcription",
              desc: "Lectures, research interviews, focus groups",
              list: [
                "Specialist terminology",
                "Citation formatting",
                "Research standards",
                "Peer review ready",
              ],
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="rounded-2xl bg-slate-950 p-6 sm:p-7 shadow-lg"
            >
              {item.icon}
              <h4 className="mt-4 text-xl sm:text-2xl font-semibold text-white">
                {item.title}
              </h4>
              <p className="mt-2 text-gray-300">{item.desc}</p>
              <ul className="mt-4 space-y-2 text-gray-400 text-sm sm:text-base">
                {item.list.map((li, idx) => (
                  <li key={idx}>• {li}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Big Card */}
        <motion.div
          whileHover={{ scale: 1.03 }}
          className="mt-14 rounded-3xl bg-black p-8 sm:p-12 shadow-2xl text-center"
        >
          <Clock className="mx-auto h-12 w-12 text-cyan-400" />
          <h4 className="mt-5 text-2xl sm:text-3xl font-bold text-white">
            Fast Turnaround Times
          </h4>
          <p className="mt-3 text-gray-300 text-base sm:text-lg">
            Flexible delivery options to meet your deadlines
          </p>
          <p className="mt-4 text-gray-400 max-w-3xl mx-auto text-sm sm:text-base">
            We offer flexible turnaround options, from same-day emergency
            transcription to standard 3–5 business day delivery. Our streamlined
            workflow ensures reliable delivery without compromising quality.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
