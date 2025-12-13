"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Globe,
  PhoneCall,
  Users,
  FileText,
  HeartPulse,
  ChevronDown,
  Menu,
  X,
} from "lucide-react";

type Service = {
  name: string;
  href: string;
  icon: React.ElementType;
};

const services: Service[] = [
  { name: "Website Development", href: "#web-development", icon: Globe },
  { name: "Lead Generation", href: "#lead-generation", icon: Users },
  { name: "Inbound Services", href: "#inbound", icon: PhoneCall },
  { name: "Transcription", href: "#transcription", icon: FileText },
  { name: "Life Insurance Sales", href: "#insurance-sales", icon: HeartPulse },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Function to close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileOpen(false);
    setServicesOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 z-50 w-full bg-slate-950/80 backdrop-blur-xl border-b border-white/10"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent"
        >
          NexCall<span className="text-white">&Web</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-10 md:flex">
          {[
            { name: "Home", href: "#home" },
            { name: "About", href: "#about" },
            { name: "Careers", href: "#careers" },
          ].map((item) => (
            <motion.a
              key={item.name}
              href={item.href}
              onClick={handleLinkClick}
              whileHover={{ y: -2 }}
              className="text-sm font-medium text-slate-300 hover:text-white transition"
            >
              {item.name}
            </motion.a>
          ))}

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-slate-300 hover:text-white transition">
              Services <ChevronDown size={16} />
            </button>

            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 12 }}
                  transition={{ duration: 0.25 }}
                  className="absolute left-0 mt-4 w-80 rounded-2xl bg-slate-900 p-4 shadow-2xl border border-white/10"
                >
                  <div className="grid gap-2">
                    {services.map((service) => (
                      <motion.a
                        key={service.name}
                        href={service.href}
                        onClick={handleLinkClick}
                        whileHover={{ x: 6 }}
                        className="flex items-center gap-3 rounded-xl p-3 hover:bg-white/5 transition"
                      >
                        <service.icon className="h-5 w-5 text-cyan-400" />
                        <span className="text-sm font-medium text-slate-200">
                          {service.name}
                        </span>
                      </motion.a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Contact Button */}
          <motion.a
            href="#contact"
            onClick={handleLinkClick}
            whileHover={{ scale: 1.05 }}
            className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-5 py-2 text-sm font-semibold text-white shadow-lg"
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="md:hidden overflow-hidden bg-slate-950 border-t border-white/10"
          >
            <div className="flex flex-col gap-5 px-6 py-6">
              <a href="#home" onClick={handleLinkClick} className="text-slate-300">Home</a>
              <a href="#about" onClick={handleLinkClick} className="text-slate-300">About</a>

              <div>
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="flex w-full items-center justify-between text-slate-300"
                >
                  Services <ChevronDown size={16} />
                </button>

                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="mt-4 flex flex-col gap-3 pl-3"
                    >
                      {services.map((service) => (
                        <a
                          key={service.name}
                          href={service.href}
                          onClick={handleLinkClick}
                          className="flex items-center gap-2 text-sm text-slate-400"
                        >
                          <service.icon size={16} className="text-cyan-400" />
                          {service.name}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a href="#careers" onClick={handleLinkClick} className="text-slate-300">Careers</a>
              <a
                href="#contact"
                onClick={handleLinkClick}
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-violet-600 px-4 py-2 text-center text-white"
              >
                Contact
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
