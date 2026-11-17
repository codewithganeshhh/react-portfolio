import React from "react";
import { motion } from "framer-motion";
import { aboutMeData } from "../../constants/aboutme";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="max-w-5xl mx-auto space-y-16 relative z-10"
      >
        {/* Heading */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          className="text-center space-y-4"
        >
          <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Get to know me
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            {aboutMeData.heading}
          </h2>

          <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-3xl mx-auto font-normal">
            I'm{" "}
            <span className="font-semibold text-blue-400">
              {aboutMeData.intro.name}
            </span>
            , a{" "}
            <span className="font-semibold text-white">
              {aboutMeData.intro.title}
            </span>{" "}
            with a strong focus on{" "}
            <span className="font-semibold text-indigo-400">
              {aboutMeData.intro.focus}
            </span>
            . {aboutMeData.intro.description}
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 gap-6 text-left">
          {aboutMeData.sections.map((section, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
              whileHover={{ y: -3 }}
              className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-3 group hover:border-slate-700 transition-all duration-300"
            >
              <div className="h-1 w-10 rounded-full bg-blue-500 group-hover:w-16 transition-all duration-300" />
              <h3 className="text-xl font-bold text-white pt-1">
                {section.title}
              </h3>
              <p className="text-sm md:text-base leading-relaxed text-slate-300">
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
