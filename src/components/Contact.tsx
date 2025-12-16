"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="relative bg-slate-950 px-5 py-28">
      <div className="mx-auto max-w-7xl">
        {/* OUTER HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-5xl sm:text-6xl font-extrabold">
            Connect with NexCall & Web Services
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-gray-300 text-lg">
            Multiple channels for seamless communication
          </p>
        </motion.div>

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-10">
          {/* LEFT SIDE – CONTACT + MAP */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-[45%] w-full bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl"
          >
            <h3 className="text-3xl font-extrabold text-white">
              Contact Information
            </h3>

            <p className="mt-3 text-gray-300">
              Reach out to us through any of the channels below
            </p>

            {/* Info */}
            <div className="mt-8 space-y-6">
              <div className="flex gap-4">
                <MapPin className="h-6 w-6 text-cyan-400 mt-1" />
                <p className="text-gray-300">
                  2nd Floor,RTC Plaza ,Office#204,Haider road Saddar Rawalpindi
                </p>
              </div>

              <div className="flex gap-4">
                <Phone className="h-6 w-6 text-sky-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">
                    Qamar Ali Rana
                  </p>
                  <p className="text-gray-300">+92 370 5546296</p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail className="h-6 w-6 text-violet-400 mt-1" />
                <p className="text-gray-300">qamarikhtiar@gmail.com</p>
              </div>

              <div className="flex gap-4">
                <Clock className="h-6 w-6 text-cyan-400 mt-1" />
                <div>
                  <p className="text-white font-semibold">Business Hours</p>
                  <p className="text-gray-300">
                    Monday – Saturday: 6:40 PM – 4:30 AM
                  </p>
                  <p className="text-gray-400">Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-8 rounded-2xl overflow-hidden border border-white/10"
            >
              <iframe
                title="NextelBPO Location"
                src="https://www.google.com/maps?q=Sabah%20Plaza%20Bank%20Road%20Saddar%20Rawalpindi&output=embed"
                className="w-full h-[260px] border-0"
                loading="lazy"
              />
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE – FORM */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="lg:w-[45%] w-full bg-slate-900 rounded-3xl p-8 sm:p-10 shadow-2xl flex items-center"
          >
            <div className="w-full">
              <h3 className="bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 bg-clip-text text-transparent text-3xl font-extrabold">
                Send Us a Message
              </h3>

              <p className="mt-3 text-gray-300">
                We typically respond within 24 hours
              </p>

              <form className="mt-8 space-y-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-sky-400 outline-none"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-violet-400 outline-none"
                />

                <textarea
                  placeholder="Your Message"
                  rows={4}
                  required
                  className="w-full rounded-xl bg-slate-950 border border-white/10 px-4 py-3 text-white placeholder-gray-400 focus:ring-2 focus:ring-cyan-400 outline-none"
                />

                <div className="flex gap-3 items-start">
                  <label className="flex items-start gap-3 cursor-pointer select-none">
                    {/* Hidden Checkbox */}
                    <input type="checkbox" required className="hidden peer" />

                    {/* Custom Circle */}
                    <div className="w-5 h-5 rounded-full border-2 border-cyan-400 flex items-center justify-center peer-checked:bg-cyan-400 transition">
                      <div className="w-2 h-2 rounded-full bg-white opacity-0 peer-checked:opacity-100 transition"></div>
                    </div>

                    {/* Text */}
                    <span className="text-gray-400 text-sm leading-relaxed">
                      By submitting this form, you agree to receive
                      communications from NexCall&Web Services and our partners.
                      You can unsubscribe at any time. Message and data rates
                      may apply.
                    </span>
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full rounded-2xl bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-500 py-4 text-white text-lg font-semibold shadow-xl"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
