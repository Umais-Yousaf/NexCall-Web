"use client";

import { motion } from "framer-motion";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  { name: "Qamar Ali Rana", role: "CEO", image: "/images/WhatsApp Image 2025-12-12 at 23.05.24_2e0ca6b6.jpg" },
  {
    name: "Akbar Qureshi",
    role: "Developer & Founder",
    image: "/images/WhatsApp Image 2025-12-12 at 23.11.00_9119e32f.jpg",
  },
  {
    name: "Umais Yousaf",
    role: "Developer & Co-Founder",
    image: "/images/WhatsApp Image 2025-11-29 at 06.39.07_3b21cf6e.jpg",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center bg-gray-900 px-4 py-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-4xl font-extrabold text-center"
      >
        Meet Our Team
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-6 max-w-3xl text-center text-gray-300 text-lg"
      >
        Our BPO and Web Development teams are committed to delivering 24/7
        outsourcing solutions that scale your business globally. We provide
        high-quality web development services and expert call center operations
        to reduce costs and boost efficiency.
      </motion.p>

      {/* Team Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {team.map((member, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={member.image}
              alt={member.name}
              className="h-32 w-32 rounded-2xl object-cover"
            />
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              {member.name}
            </h3>
            <p className="mt-2 text-gray-400 text-center">{member.role}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
