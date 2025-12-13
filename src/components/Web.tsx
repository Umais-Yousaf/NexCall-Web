"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Build responsive and interactive user interfaces with modern languages & frameworks like Html, Css , JavaScript ,Tailwind Css, React, Next.js, Vue.js, Framer motion ",
    image: "/images/i-removebg-preview.png",
  },
  {
    title: "Backend Development",
    description:
      "Robust server-side applications with Php, Node.js, Express,Next.js and databases like MySQL & MongoDB.",
    image: "/images/i__1_-removebg-preview.png",
  },
  {
    title: "MERN Stack Projects",
    description:
      "Full-stack applications using MongoDB, Express, React, Node.js with RESTful APIs and modern practices.",
    image: "/images/12.png",
  },
];

export default function WebDevelopmentSection() {
  return (
    <section
      id="web-development"
      className="relative flex flex-col items-center justify-center bg-slate-900 px-4 py-24"
    >
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-4xl font-extrabold text-center"
      >
        Web Development Services
      </motion.h2>

      {/* Paragraph */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 max-w-3xl text-center text-gray-300 text-lg"
      >
        We provide end-to-end web development solutions, from frontend
        interfaces to backend systems, delivering scalable and efficient web
        applications.
      </motion.p>

      {/* Service Cards */}
      <div className="mt-12 grid gap-8 sm:grid-cols-1 md:grid-cols-3">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="flex flex-col items-center bg-gray-800 rounded-2xl p-6 shadow-xl hover:scale-105 transition-transform"
          >
            <img
              src={service.image}
              alt={service.title}
              className="h-32 w-32 object-contain"
            />
            <h3 className="mt-4 text-xl font-semibold text-white text-center">
              {service.title}
            </h3>
            <p className="mt-2 text-gray-400 text-center">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
