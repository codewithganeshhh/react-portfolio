import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaNodeJs,
} from "react-icons/fa";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiExpress,
  SiTailwindcss,
  SiPython,
  SiCplusplus,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiGooglecloud,
  SiLinux,
  SiNginx,
  SiPostman,
  SiVercel,
  SiJsonwebtokens,
  SiMui,
  SiPhp,
  SiFirebase,
  SiGraphql,
  SiGit,
} from "react-icons/si";
import { TbInfinity } from "react-icons/tb";
import { LuLayers, LuNetwork } from "react-icons/lu";
import { marqueeRow1, marqueeRow2, categories } from "../../constants/skills";

// Authentic Brand Icons Map
const iconMap = {
  react: <SiReact className="text-[#61DAFB]" />,
  nextjs: <SiNextdotjs className="text-white" />,
  typescript: <SiTypescript className="text-[#3178C6]" />,
  javascript: <SiJavascript className="text-[#F7DF1E]" />,
  node: <FaNodeJs className="text-[#68A063]" />,
  express: <SiExpress className="text-[#CBD5E1]" />,
  tailwind: <SiTailwindcss className="text-[#38BDF8]" />,
  python: <SiPython className="text-[#3776AB]" />,
  cpp: <SiCplusplus className="text-[#00599C]" />,
  java: <FaJava className="text-[#EA2D2E]" />,
  postgresql: <SiPostgresql className="text-[#4169E1]" />,
  mongodb: <SiMongodb className="text-[#47A248]" />,
  mysql: <SiMysql className="text-[#4479A1]" />,
  redis: <SiRedis className="text-[#DC382D]" />,
  html: <SiHtml5 className="text-[#E34F26]" />,
  css: <SiCss3 className="text-[#1572B6]" />,
  docker: <SiDocker className="text-[#2496ED]" />,
  kubernetes: <SiKubernetes className="text-[#326CE5]" />,
  cicd: <TbInfinity className="text-[#38BDF8]" />,
  githubactions: <SiGithubactions className="text-[#2088FF]" />,
  gcp: <SiGooglecloud className="text-[#4285F4]" />,
  git: <SiGit className="text-[#F05032]" />,
  linux: <SiLinux className="text-[#FCC624]" />,
  nginx: <SiNginx className="text-[#009639]" />,
  rest: <LuNetwork className="text-[#06B6D4]" />,
  postman: <SiPostman className="text-[#FF6C37]" />,
  vercel: <SiVercel className="text-white" />,
  jwt: <SiJsonwebtokens className="text-[#D63AFF]" />,
  mui: <SiMui className="text-[#007FFF]" />,
  php: <SiPhp className="text-[#777BB4]" />,
  firebase: <SiFirebase className="text-[#FFCA28]" />,
  graphql: <SiGraphql className="text-[#E10098]" />,
  mvc: <LuLayers className="text-[#38BDF8]" />,
};

// Clean Vertical Marquee Item (matching user's reference image)
const MinimalMarqueeItem = ({ tech }) => {
  return (
    <div className="group/item flex flex-col items-center justify-center gap-2.5 px-4 py-2 shrink-0 cursor-default select-none">
      <div className="w-12 h-12 flex items-center justify-center text-4xl transition-all duration-300 group-hover/item:scale-115 group-hover/item:-translate-y-1">
        {iconMap[tech.icon] || <span className="text-lg font-bold">{tech.name[0]}</span>}
      </div>
      <span className="text-xs sm:text-sm font-medium text-slate-300 group-hover/item:text-white transition-colors tracking-wide text-center whitespace-nowrap">
        {tech.name}
      </span>
    </div>
  );
};

// Continuous Infinite Marquee Track (Seamless Loop)
const InfiniteMarqueeTrack = ({ items, animationClass }) => {
  // Duplicate array for seamless infinite looping
  const displayItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-3">
      <div className={`${animationClass} flex items-center gap-10 sm:gap-14 py-2`}>
        {displayItems.map((tech, index) => (
          <MinimalMarqueeItem key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");

  const filterOptions = ["All", ...categories.map((c) => c.title)];
  const displayedCategories =
    selectedFilter === "All"
      ? categories
      : categories.filter((c) => c.title === selectedFilter);

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-20">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Technologies &amp; Systems</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            My Tech Stack
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Full-stack engineering stack with containerized deployments, cloud services, and scalable architecture patterns.
          </p>
        </div>

        {/* ── 2-Row Opposite Bidirectional Marquee ── */}
        <div className="relative py-4 space-y-6">
          {/* Edge Gradient Masks for Smooth Fade */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-36 z-20 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-36 z-20 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent" />

          {/* Row 1: Right to Left (Web, Runtimes & Languages) */}
          <InfiniteMarqueeTrack
            items={marqueeRow1}
            animationClass="animate-marquee-left"
          />

          {/* Row 2: Left to Right (DevOps, Cloud, Containers & Architecture) */}
          <InfiniteMarqueeTrack
            items={marqueeRow2}
            animationClass="animate-marquee-right"
          />
        </div>

        {/* ── Handcrafted Category Matrix (Non-AI Architecture Breakdown) ── */}
        <div className="space-y-8 pt-6">
          
          {/* Header & Filter Controls */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-4 border-b border-slate-800/80">
            <div className="space-y-1">
              <span className="text-xs font-mono font-semibold text-blue-400 uppercase tracking-widest">
                Architecture Breakdown
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                Specialized Competency Matrix
              </h3>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap gap-1.5">
              {filterOptions.map((title) => (
                <button
                  key={title}
                  onClick={() => setSelectedFilter(title)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 border ${
                    selectedFilter === title
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/30"
                      : "bg-slate-900/70 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {title === "All" ? "All Specialties" : title}
                </button>
              ))}
            </div>
          </div>

          {/* Categorized Architecture Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            <AnimatePresence mode="popLayout">
              {displayedCategories.map((cat, idx) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.3, delay: idx * 0.04 }}
                  key={cat.title}
                  className="rounded-2xl bg-slate-900/60 border border-slate-800/80 p-6 flex flex-col justify-between space-y-5 hover:border-slate-700/80 transition-all duration-300"
                >
                  {/* Card Header */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-mono text-blue-400 font-bold tracking-wider">
                        {cat.code}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-800">
                        {cat.skills.length} tools
                      </span>
                    </div>

                    <h4 className="text-base sm:text-lg font-bold text-white">
                      {cat.title}
                    </h4>

                    <p className="text-xs text-slate-400 leading-relaxed font-normal">
                      {cat.desc}
                    </p>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-slate-800/60">
                    {cat.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className="group/pill flex items-center gap-2.5 p-2 rounded-xl bg-slate-950/70 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/90 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                      >
                        <div className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-sm shrink-0 transition-transform group-hover/pill:scale-105">
                          {iconMap[skill.icon] || <span className="font-bold text-xs">{skill.name[0]}</span>}
                        </div>
                        <div className="min-w-0 space-y-0.5">
                          <p className="text-xs font-semibold text-white group-hover/pill:text-blue-300 transition-colors truncate">
                            {skill.name}
                          </p>
                          <p className="text-[10px] font-mono text-slate-400 truncate">
                            {skill.role}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Skills;
