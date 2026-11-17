import React from "react";
import { motion } from "framer-motion";
import { BsPatchCheckFill } from "react-icons/bs";
import { certifications } from "../../constants/certifications";

const Certifications = () => {
  return (
    <section
      id="certifications"
      className="relative py-28 px-6 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl w-full mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-14 space-y-3">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Credentials
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${cert.title} by ${cert.issuer}`}
                className="flex items-center gap-4 p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
              >
                {/* Logo wrapper */}
                <div className="flex-shrink-0 w-14 h-14 rounded-xl overflow-hidden bg-slate-950 border border-slate-800 p-2 flex items-center justify-center">
                  <img
                    src={cert.img}
                    alt={`${cert.issuer} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-sm font-bold text-white group-hover:text-blue-400 transition-colors leading-snug mb-1.5">
                    {cert.title}
                  </p>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 text-xs font-semibold rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300">
                    <BsPatchCheckFill className="text-blue-400 text-xs" />
                    {cert.issuer}
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Certifications;
