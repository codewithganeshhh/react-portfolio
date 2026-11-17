import React from "react";
import { motion } from "framer-motion";
import { LuBriefcase, LuMapPin, LuBuilding2 } from "react-icons/lu";
import { experiences } from "../../constants/workexperience";

const WorkExperience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="relative py-28 px-6 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header */}
          <div className="text-center mb-16 space-y-3">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Career
            </p>
            <h2
              id="experience-heading"
              className="text-3xl md:text-5xl font-extrabold text-white tracking-tight"
            >
              Work Experience
            </h2>
          </div>

          {/* Timeline */}
          <ol className="relative space-y-10">
            {/* Timeline line */}
            <div
              aria-hidden="true"
              className="absolute left-[7px] top-0 bottom-0 w-[2px] bg-slate-800 rounded-full"
            />

            {experiences.map((exp, index) => (
              <li key={index} className="group relative ps-8 md:ps-12">
                {/* Timeline dot */}
                <span
                  aria-hidden="true"
                  className="absolute left-[2px] top-6 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-[#030712] z-10 pointer-events-none"
                />

                {/* Card */}
                <article className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors duration-200">
                  {/* Company header */}
                  <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      {/* Company icon */}
                      <div className="flex-shrink-0 h-12 w-12 rounded-xl bg-slate-800 border border-slate-700 text-blue-400 flex items-center justify-center">
                        <LuBuilding2 className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white leading-tight">
                          {exp.company}
                        </h3>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 mt-1">
                          <LuMapPin className="h-3.5 w-3.5 text-blue-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </header>

                  {/* Roles */}
                  <div className="space-y-6">
                    {exp.roles.map((role, rIndex) => (
                      <div
                        key={rIndex}
                        className={`relative ${
                          rIndex !== exp.roles.length - 1
                            ? "pb-6 border-b border-slate-800"
                            : ""
                        }`}
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                          <h4 className="text-base sm:text-lg font-bold text-white flex items-center gap-2">
                            <LuBriefcase className="h-4 w-4 text-blue-400" />
                            {role.role}
                          </h4>
                          <span className="inline-flex px-3 py-1 text-xs font-semibold rounded-full bg-blue-950/70 border border-blue-800/60 text-blue-300 w-fit">
                            {role.display}
                          </span>
                        </div>

                        {role.description && (
                          <p className="text-sm text-slate-300 leading-relaxed">
                            {role.description}
                          </p>
                        )}

                        {/* Tech Stack Chips */}
                        {role.tech && (
                          <div className="flex flex-wrap gap-2 mt-4">
                            {role.tech.map((tech, tIndex) => (
                              <span
                                key={tIndex}
                                className="px-2.5 py-1 text-xs font-medium rounded-md bg-slate-950 border border-slate-800 text-slate-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </article>
              </li>
            ))}
          </ol>
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
