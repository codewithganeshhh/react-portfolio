import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaJava,
  FaGitAlt,
  FaGithub,
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
  SiRender,
  SiJsonwebtokens,
  SiN8N,
  SiBootstrap,
  SiMui,
  SiPhp,
} from "react-icons/si";
import { TbInfinity } from "react-icons/tb";
import { LuLayers, LuSparkles, LuCheck, LuNetwork } from "react-icons/lu";
import { marqueeRow1, marqueeRow2, categories } from "../../constants/skills";

const iconMap = {
  react: <SiReact className="text-[#61DAFB] text-xl" />,
  nextjs: <SiNextdotjs className="text-white text-xl" />,
  typescript: <SiTypescript className="text-[#3178C6] text-xl" />,
  javascript: <SiJavascript className="text-[#F7DF1E] text-xl" />,
  node: <FaNodeJs className="text-[#68A063] text-xl" />,
  express: <SiExpress className="text-slate-300 text-xl" />,
  tailwind: <SiTailwindcss className="text-[#38BDF8] text-xl" />,
  python: <SiPython className="text-[#3776AB] text-xl" />,
  cpp: <SiCplusplus className="text-[#00599C] text-xl" />,
  java: <FaJava className="text-[#EA2D2E] text-xl" />,
  postgresql: <SiPostgresql className="text-[#4169E1] text-xl" />,
  mongodb: <SiMongodb className="text-[#47A248] text-xl" />,
  mysql: <SiMysql className="text-[#4479A1] text-xl" />,
  redis: <SiRedis className="text-[#DC382D] text-xl" />,
  html: <SiHtml5 className="text-[#E34F26] text-xl" />,
  css: <SiCss3 className="text-[#1572B6] text-xl" />,
  docker: <SiDocker className="text-[#2496ED] text-xl" />,
  kubernetes: <SiKubernetes className="text-[#326CE5] text-xl" />,
  cicd: <TbInfinity className="text-[#38BDF8] text-2xl" />,
  githubactions: <SiGithubactions className="text-[#2088FF] text-xl" />,
  gcp: <SiGooglecloud className="text-[#4285F4] text-xl" />,
  git: <FaGitAlt className="text-[#F05032] text-xl" />,
  github: <FaGithub className="text-white text-xl" />,
  linux: <SiLinux className="text-[#FCC624] text-xl" />,
  nginx: <SiNginx className="text-[#009639] text-xl" />,
  rest: <LuNetwork className="text-[#06B6D4] text-xl" />,
  postman: <SiPostman className="text-[#FF6C37] text-xl" />,
  vercel: <SiVercel className="text-white text-xl" />,
  render: <SiRender className="text-[#46E3B7] text-xl" />,
  jwt: <SiJsonwebtokens className="text-[#D63AFF] text-xl" />,
  n8n: <SiN8N className="text-[#EA4B71] text-xl" />,
  bootstrap: <SiBootstrap className="text-[#7952B3] text-xl" />,
  mui: <SiMui className="text-[#007FFF] text-xl" />,
  php: <SiPhp className="text-[#777BB4] text-xl" />,
  mvc: <LuLayers className="text-blue-400 text-xl" />,
};

// Reusable Tech Marquee Card
const TechCard = ({ tech }) => {
  return (
    <div
      className="group/tech relative flex items-center gap-3.5 px-4 py-3 rounded-2xl bg-slate-900/80 border border-slate-800/90 hover:border-slate-700 hover:bg-slate-800/90 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 cursor-default select-none shrink-0"
    >
      {/* Brand Color Ambient Glow on Hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover/tech:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background: `radial-gradient(circle at center, ${tech.color}15 0%, transparent 70%)`,
          boxShadow: `inset 0 0 0 1px ${tech.color}40`,
        }}
      />

      {/* Icon Chassis */}
      <div className="relative w-10 h-10 rounded-xl bg-slate-950/90 border border-slate-800 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover/tech:scale-110">
        {iconMap[tech.icon] || <span className="text-xs font-bold">{tech.name[0]}</span>}
      </div>

      {/* Tech Metadata */}
      <div className="relative space-y-0.5 text-left">
        <span className="block text-sm font-bold text-white group-hover/tech:text-slate-100 transition-colors whitespace-nowrap">
          {tech.name}
        </span>
        <span className="block text-[10px] font-mono font-medium text-slate-400 group-hover/tech:text-slate-300 transition-colors uppercase tracking-wider whitespace-nowrap">
          {tech.tag}
        </span>
      </div>
    </div>
  );
};

// Infinite Marquee Track (Seamless Loop)
const MarqueeTrack = ({ items, speedClass = "animate-marquee" }) => {
  // Duplicate array for seamless infinite looping
  const displayItems = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden py-1">
      <div className={`${speedClass} flex gap-4 py-2`}>
        {displayItems.map((tech, index) => (
          <TechCard key={`${tech.name}-${index}`} tech={tech} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const [activeTab, setActiveTab] = useState("marquee"); // "marquee" or "matrix"
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryTitles = ["All", ...categories.map((c) => c.title)];
  const filteredCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-28 px-4 sm:px-6 lg:px-8 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      {/* Background Ambience */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-600/10 via-cyan-500/5 to-transparent blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-950/60 border border-blue-800/40 text-blue-400 text-xs font-mono font-semibold uppercase tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            <span>Arsenal &amp; Infrastructure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            My Tech Stack
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Full-stack engineering capabilities spanning modern frontend architectures, scalable backend microservices, container orchestration, and automated CI/CD pipelines.
          </p>

          {/* Interactive View Switcher */}
          <div className="pt-2 flex items-center justify-center gap-2">
            <button
              onClick={() => setActiveTab("marquee")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                activeTab === "marquee"
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25"
                  : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <LuSparkles className="text-sm" />
              <span>Live Tech Stream (Marquee)</span>
            </button>
            <button
              onClick={() => setActiveTab("matrix")}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                activeTab === "matrix"
                  ? "bg-blue-600 text-white border-blue-500 shadow-lg shadow-blue-600/25"
                  : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              <LuLayers className="text-sm" />
              <span>Category Matrix</span>
            </button>
          </div>
        </div>

        {/* ── View 1: 2-Row Parallel Continuous Marquee ── */}
        {activeTab === "marquee" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="relative space-y-4"
          >
            {/* Viewport Edge Gradient Fades for Smooth Dissolve */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-[#030712] via-[#030712]/90 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-[#030712] via-[#030712]/90 to-transparent" />

            {/* Marquee Row 1: Frontend, Core Languages & Systems */}
            <div>
              <div className="mb-2 px-2 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <span>// Track 01: Core Systems, Languages &amp; Web</span>
                <span className="hidden sm:inline">Hover to pause</span>
              </div>
              <MarqueeTrack items={marqueeRow1} speedClass="animate-marquee" />
            </div>

            {/* Marquee Row 2: DevOps, Cloud, Containers, CI/CD & Architecture */}
            <div className="pt-2">
              <div className="mb-2 px-2 flex items-center justify-between text-[11px] font-mono text-slate-500 uppercase tracking-wider">
                <span>// Track 02: DevOps, Containers (Docker/K8s), CI/CD &amp; Cloud</span>
                <span className="hidden sm:inline">Parallel direction</span>
              </div>
              <MarqueeTrack items={marqueeRow2} speedClass="animate-marquee-slow" />
            </div>

            {/* Bottom Key Strengths Strip */}
            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-blue-400 font-bold uppercase tracking-wider block">
                  01. Frontend Systems
                </span>
                <p className="text-xs text-slate-300">
                  React 19, Next.js, TypeScript, Tailwind CSS with modular component hierarchies.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-emerald-400 font-bold uppercase tracking-wider block">
                  02. Backend &amp; APIs
                </span>
                <p className="text-xs text-slate-300">
                  Node.js, Express, RESTful APIs, JWT authentication, and clean MVC patterns.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-cyan-400 font-bold uppercase tracking-wider block">
                  03. Cloud &amp; Containers
                </span>
                <p className="text-xs text-slate-300">
                  Docker containerization, Kubernetes clusters, CI/CD pipelines, and GCP.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/50 border border-slate-800/80 space-y-1">
                <span className="text-[11px] font-mono text-purple-400 font-bold uppercase tracking-wider block">
                  04. Data Architecture
                </span>
                <p className="text-xs text-slate-300">
                  MongoDB, PostgreSQL, Redis caching, and relational MySQL schemas.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* ── View 2: Categorized Matrix (Optional Deep Dive) ── */}
        {activeTab === "matrix" && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Category Filter Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categoryTitles.map((title) => (
                <button
                  key={title}
                  onClick={() => setActiveCategory(title)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                    activeCategory === title
                      ? "bg-blue-600 text-white border-blue-500 shadow-md shadow-blue-600/25"
                      : "bg-slate-900/80 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                  }`}
                >
                  {title}
                </button>
              ))}
            </div>

            {/* Filtered Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <AnimatePresence mode="popLayout">
                {filteredCategories.map((category) => (
                  <motion.div
                    layout
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    key={category.title}
                    className="p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5"
                  >
                    <div className="flex items-center gap-3">
                      <div className="h-5 w-1 rounded-full bg-blue-500" />
                      <h3 className="text-base sm:text-lg font-bold text-white">
                        {category.title}
                      </h3>
                    </div>

                    <div className="flex flex-wrap gap-2.5">
                      {category.skills.map((skill, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-slate-950/80 border border-slate-800 text-slate-200 px-3 py-2 rounded-xl text-xs font-medium hover:border-slate-700 hover:text-white transition-all cursor-default"
                        >
                          <span className="text-base">
                            {iconMap[skill.icon] || <span className="font-bold">{skill.name[0]}</span>}
                          </span>
                          <span>{skill.name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Skills;
