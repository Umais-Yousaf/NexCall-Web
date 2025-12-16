"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Frontend Development",
    description:
      "Build responsive and interactive user interfaces with modern languages & frameworks like Html, Css, JavaScript, Tailwind CSS, React, Next.js, Vue.js, and Framer Motion.",
    image: "/images/i-removebg-preview.png",
  },
  {
    title: "Backend Development",
    description:
      "Robust server-side applications with PHP, Node.js, Express, Next.js and databases like MySQL & MongoDB.",
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
      {/* ===== MAIN HEADING ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-4xl font-extrabold text-center"
      >
        Our Services
      </motion.h2>

      {/* ===== SERVICES INTRO CONTENT ===== */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mt-8 max-w-4xl text-gray-300 space-y-8"
      >
        {/* Taxi */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            🚖 Taxi Dispatching Services (UK Market)
          </h3>
          <p className="mt-2">
            We provide reliable and efficient{" "}
            <span className="text-cyan-400 font-medium">
              taxi dispatching solutions
            </span>{" "}
            for UK-based taxi companies with real-time coordination.
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-400">
            <li>24/7 ride booking & dispatch management</li>
            <li>Live driver coordination & trip allocation</li>
            <li>Customer call handling & support</li>
            <li>GPS-based tracking & booking software handling</li>
            <li>Complaint handling & service follow-ups</li>
          </ul>
        </div>

        {/* Hotel */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            🏨 Hotel Order Taking & Customer Support (UK Hotels)
          </h3>
          <p className="mt-2">
            Professional{" "}
            <span className="text-cyan-400 font-medium">
              hotel order-taking and customer service support
            </span>{" "}
            delivered by trained hospitality agents.
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-400">
            <li>Room reservations & booking management</li>
            <li>Food & room service order taking</li>
            <li>Guest inquiries & support handling</li>
            <li>Booking amendments & cancellations</li>
            <li>Email, chat & phone support</li>
          </ul>
        </div>

        {/* Real Estate */}
        <div>
          <h3 className="text-xl font-semibold text-white">
            🏢 Real Estate Support Services (UK & USA Markets)
          </h3>
          <p className="mt-2">
            End-to-end{" "}
            <span className="text-cyan-400 font-medium">
              real estate back-office and customer support
            </span>{" "}
            for agents, developers, and investors.
          </p>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-400">
            <li>Lead generation & follow-ups</li>
            <li>Property inquiry handling</li>
            <li>Appointment scheduling & CRM management</li>
            <li>Listing & data management</li>
            <li>Virtual assistance</li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div>
          <h3 className="text-xl font-semibold text-white">🌍 Why Choose Us</h3>
          <ul className="mt-3 list-disc list-inside space-y-1 text-gray-400">
            <li>UK & US market experienced offshore team</li>
            <li>Cost-effective & scalable solutions</li>
            <li>High-quality communication standards</li>
            <li>Secure & reliable operations</li>
          </ul>
        </div>
      </motion.div>

      {/* ===== WEB DEVELOPMENT SECTION ===== */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mt-24 bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-4xl font-extrabold text-center"
      >
        Web Development Services
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="mt-4 max-w-3xl text-center text-gray-300 text-lg"
      >
        We provide end-to-end web development solutions, from frontend interfaces
        to backend systems.
      </motion.p>

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