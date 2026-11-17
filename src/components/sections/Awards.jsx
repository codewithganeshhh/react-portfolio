import React from "react";
import { motion } from "framer-motion";
import { awardsList } from "../../constants/awards";
import { FaTrophy } from "react-icons/fa";

export const Awards = () => {
  return (
    <section
      id="awards"
      className="relative py-28 px-6 md:px-12 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Recognition
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Awards &amp; Achievements
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awardsList.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-slate-900/60 border border-slate-800 rounded-2xl overflow-hidden hover:border-slate-700 transition-all duration-200 flex flex-col group"
              >
                {/* Image Section */}
                <div className="h-48 md:h-52 relative overflow-hidden bg-slate-950 border-b border-slate-800">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-3 right-3 bg-slate-900/90 backdrop-blur-sm p-2 rounded-full text-amber-400 border border-slate-700">
                    <FaTrophy className="h-3.5 w-3.5" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {award.title}
                  </h3>

                  <div className="flex items-center justify-between mb-3 text-xs">
                    <span className="font-semibold text-slate-300">
                      {award.organization}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-950 text-slate-400 border border-slate-800">
                      {award.date}
                    </span>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mt-auto">
                    {award.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Awards;
