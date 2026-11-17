import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaArrowRight, FaTrophy, FaBolt } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Sparkles, Terminal, Code2 } from "lucide-react";
import { homeData } from "../../constants/home";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/MagneticButton";
import { TiltCard } from "../ui/TiltCard";
import { InteractiveGlow } from "../ui/InteractiveGlow";

export const Home = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const roles = homeData.rolesList || [
    "Software Developer",
    "Full-Stack Web Architect",
    "AI & LLM Solutions Builder",
    "Problem Solver & Hackathon Winner",
  ];

  // Auto-cycle through roles smoothly
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [roles.length]);

  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-[#030712] text-slate-100 px-6 sm:px-10 lg:px-16 pt-28 pb-20 flex flex-col justify-center items-center"
    >
      {/* ── Interactive Generative Glow & Ambient Dark Mesh ── */}
      <InteractiveGlow />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-8">
          
          {/* ── Left Column: Hero Content & CTAs (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7 space-y-7"
          >
            {/* Status & Availability Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-slate-700/60 shadow-[0_0_20px_rgba(0,0,0,0.5)] backdrop-blur-xl">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
              </span>
              <span className="text-xs sm:text-sm font-medium text-slate-300">
                Available for opportunities
              </span>
              <span className="hidden sm:inline text-slate-600">|</span>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs sm:text-sm text-cyan-400 font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                2026 Ready
              </span>
            </div>

            {/* Intro Greeting */}
            <div className="space-y-2">
              <p className="font-mono text-sm sm:text-base text-cyan-400 font-semibold tracking-wide flex items-center gap-2">
                <span className="text-slate-500">&gt;</span> Hello, World! I am
              </p>

              {/* Main Name Heading */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.1]">
                Ganesh{" "}
                <span className="gradient-text drop-shadow-[0_0_35px_rgba(99,102,241,0.35)]">
                  Kumar
                </span>
              </h1>
            </div>

            {/* Dynamic Role Switcher */}
            <div className="h-10 sm:h-12 flex items-center overflow-hidden">
              <span className="text-xl sm:text-3xl text-slate-400 font-medium mr-2 sm:mr-3">
                I'm a
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRoleIndex}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="text-xl sm:text-3xl font-bold bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent"
                >
                  {roles[currentRoleIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="animate-pulse text-cyan-400 text-2xl font-bold ml-1">
                |
              </span>
            </div>

            {/* Tagline / Bio */}
            <p className="text-base sm:text-lg text-slate-300/90 max-w-2xl leading-relaxed font-normal">
              {homeData.headline}
            </p>

            {/* Core Tech Stack Strip */}
            <div className="space-y-2.5 pt-1">
              <p className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-2">
                <Code2 className="w-3.5 h-3.5 text-cyan-400" />
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {(homeData.techStack || [
                  { name: "React" },
                  { name: "Node.js" },
                  { name: "JavaScript" },
                  { name: "Python" },
                  { name: "Tailwind CSS" },
                  { name: "MongoDB" },
                  { name: "REST APIs" },
                ]).map((tech, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-slate-900/70 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-200 cursor-default"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Call to Actions & Social Links */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton strength={0.2}>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={homeData.cta.primary.href}
                  className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl text-white font-semibold text-sm sm:text-base bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 shadow-[0_0_25px_rgba(79,70,229,0.45)] hover:shadow-[0_0_35px_rgba(79,70,229,0.7)] transition-all duration-300 overflow-hidden"
                >
                  <span>{homeData.cta.primary.label}</span>
                  <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
                </motion.a>
              </MagneticButton>

              <MagneticButton strength={0.2}>
                <motion.a
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  href={homeData.cta.secondary.href}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl text-slate-200 font-semibold text-sm sm:text-base bg-slate-900/80 border border-slate-700/80 backdrop-blur-md hover:bg-slate-800 hover:border-slate-500 hover:text-white transition-all duration-300 shadow-sm"
                >
                  <HiOutlineMail className="text-lg text-cyan-400" />
                  <span>{homeData.cta.secondary.label}</span>
                </motion.a>
              </MagneticButton>

              {/* Social Icons */}
              <div className="flex items-center gap-2.5 pl-1 sm:pl-3">
                <a
                  href={homeData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 hover:shadow-[0_0_20px_rgba(10,102,194,0.3)] transition-all duration-300"
                >
                  <FaLinkedin className="text-lg" />
                </a>

                <a
                  href={homeData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-white/40 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] transition-all duration-300"
                >
                  <FaGithub className="text-lg" />
                </a>

                <a
                  href={homeData.social.email}
                  aria-label="Send Email to Ganesh"
                  className="w-11 h-11 inline-flex items-center justify-center rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-rose-400 hover:border-rose-500/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.3)] transition-all duration-300"
                >
                  <HiOutlineMail className="text-xl" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Interactive Profile & Bento Cards (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            <TiltCard className="w-full max-w-sm sm:max-w-md">
              <div className="relative group">
                
                {/* Glowing Aura Ring */}
                <div
                  aria-hidden="true"
                  className="absolute -inset-1 rounded-[2.5rem] bg-gradient-to-tr from-cyan-500 via-indigo-600 to-violet-600 opacity-60 blur-xl group-hover:opacity-85 transition-opacity duration-500"
                />

                {/* Main Card Container */}
                <div className="relative rounded-[2.25rem] overflow-hidden bg-slate-900/90 border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-2.5">
                  <div className="relative rounded-[1.75rem] overflow-hidden bg-slate-950">
                    <img
                      src={homeData.image.src}
                      alt={homeData.image.alt}
                      width={homeData.image.width}
                      height={homeData.image.height}
                      className="w-full h-[360px] sm:h-[420px] object-cover object-top filter brightness-[0.97] contrast-[1.03] transition-transform duration-500 group-hover:scale-105"
                      loading="eager"
                      fetchpriority="high"
                      decoding="async"
                    />

                    {/* Subtle Gradient Shade at bottom */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"
                    />
                  </div>
                </div>

                {/* Floating Bento Badge 1: Hackathon Winner */}
                <motion.div
                  initial={{ y: 15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="absolute -top-4 -right-2 sm:-right-4 px-3.5 py-2 rounded-2xl bg-slate-950/90 border border-amber-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
                    <FaTrophy className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Awarded</p>
                    <p className="text-xs font-bold text-amber-300">Hackathon Winner</p>
                  </div>
                </motion.div>

                {/* Floating Bento Badge 2: Projects Shipped */}
                <motion.div
                  initial={{ y: -15, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="absolute -bottom-4 -left-2 sm:-left-4 px-3.5 py-2 rounded-2xl bg-slate-950/90 border border-cyan-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.7)] backdrop-blur-xl flex items-center gap-2.5"
                >
                  <div className="w-8 h-8 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <FaBolt className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-slate-400">Portfolio</p>
                    <p className="text-xs font-bold text-cyan-300">5+ Projects Live</p>
                  </div>
                </motion.div>

              </div>
            </TiltCard>

            {/* Mini Terminal Code Card below avatar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
              className="mt-8 w-full max-w-sm sm:max-w-md rounded-2xl bg-slate-950/90 border border-slate-800 p-4 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            >
              <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-slate-400">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>developer.config.ts</span>
                </div>
                <span className="w-3" />
              </div>

              <div className="font-mono text-xs text-slate-300 space-y-1">
                <p>
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">engineer</span> = &#123;
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">name:</span>{" "}
                  <span className="text-emerald-300">"Ganesh Kumar"</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">focus:</span>{" "}
                  <span className="text-amber-300">["Full-Stack", "AI & Web"]</span>,
                </p>
                <p className="pl-4">
                  <span className="text-slate-400">mission:</span>{" "}
                  <span className="text-sky-300">"Build scalable, high-impact products"</span>
                </p>
                <p>&#125;;</p>
              </div>
            </motion.div>
          </motion.div>

        </div>

        {/* ── Bottom Section: Modern Glass Stat Counter Bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {(homeData.stats || [
            { value: "6+", label: "Months Experience", desc: "Software Development" },
            { value: "5+", label: "Projects Built", desc: "Production & Academic" },
            { value: "1st", label: "Hackathon Winner", desc: "University Level" },
            { value: "5+", label: "Certifications", desc: "Oracle & Industry" },
          ]).map((stat, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-xl hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300 shadow-sm"
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
              />
              <p className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-white via-slate-100 to-cyan-300 bg-clip-text text-transparent">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-slate-500 mt-0.5 font-mono">
                {stat.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
