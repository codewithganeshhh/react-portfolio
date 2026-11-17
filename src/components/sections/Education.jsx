import React from "react";
import { motion } from "framer-motion";
import { educationList } from "../../constants/education";
import { LuGraduationCap } from "react-icons/lu";

const Education = () => {
  return (
    <section
      id="education"
      className="relative py-28 px-6 md:px-12 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-4xl mx-auto w-full relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Academic Background
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Education
            </h2>
          </div>

          <div className="flex flex-col gap-6">
            {educationList.map((edu, index) => (
              <div
                key={index}
                className="p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 group"
              >
                {/* Institute Image */}
                <div className="flex-shrink-0 w-full md:w-36 h-40 md:h-36 rounded-xl overflow-hidden relative border border-slate-800 bg-slate-950">
                  <img
                    src={edu.image}
                    alt={edu.institution}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 bg-slate-900/90 backdrop-blur-sm p-1.5 rounded-lg text-blue-400 border border-slate-700">
                    <LuGraduationCap className="h-4 w-4" />
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {edu.degree}
                      </h3>
                      <p className="text-base text-slate-300 font-medium mb-3">
                        {edu.institution}
                      </p>

                      {/* University & Location block */}
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                        {edu.university && (
                          <span className="text-xs font-medium text-slate-300 bg-slate-950 px-2.5 py-1 rounded-md border border-slate-800">
                            {edu.university}
                          </span>
                        )}
                        <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                          <svg className="w-3.5 h-3.5 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className="md:text-right flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-blue-950/70 border border-blue-800/60 text-blue-300">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Education;
