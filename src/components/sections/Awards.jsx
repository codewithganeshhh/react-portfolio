import React from "react";
import { motion } from "framer-motion";
import { awardsList } from "../../constants/awards";
import { FaTrophy } from "react-icons/fa";

export const Awards = () => {
  return (
    <section
      id="awards"
      className="relative py-28 px-6 md:px-12 bg-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Background elements */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-100/50 blur-[100px] pointer-events-none"
      />
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <div className="max-w-6xl mx-auto w-full relative z-10 space-y-12">
          {/* Header */}
          <div className="text-center space-y-3 relative">
            <p className="text-sm font-bold text-blue-600 tracking-widest uppercase">
              RECOGNITION
            </p>
            <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
              Awards & Achievements
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {awardsList.map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col"
              >
                {/* Image Section */}
                <div className="h-48 md:h-56 relative overflow-hidden bg-slate-100">
                  <img
                    src={award.image}
                    alt={award.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full text-blue-600 shadow-sm">
                    <FaTrophy className="h-4 w-4" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3 gap-2">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                      {award.title}
                    </h3>
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-semibold text-slate-600">
                      {award.organization}
                    </span>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-600">
                      {award.date}
                    </span>
                  </div>

                  <p className="text-slate-600 text-sm leading-relaxed mt-auto">
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
