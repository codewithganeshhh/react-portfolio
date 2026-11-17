import { FaGithub, FaLinkedin, FaArrowRight, FaNodeJs } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsPatchCheckFill } from "react-icons/bs";
import {
  SiDocker,
  SiKubernetes,
  SiReact,
  SiJavascript,
  SiPython,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiGit,
} from "react-icons/si";
import { motion } from "framer-motion";
import { homeData } from "../../constants/home";
import { MagneticButton } from "../ui/MagneticButton";
import { TiltCard } from "../ui/TiltCard";
import { Canvas3D } from "../ui/Canvas3D";

const stats = [
  { value: "6+ Months", label: "Real-world Experience", desc: "Software & Web Development" },
  { value: "5+ Projects", label: "Deployed & Maintained", desc: "Full-Stack & Cloud Solutions" },
  { value: "1st Place", label: "University Hackathon", desc: "Innovation & Problem Solving" },
  { value: "Oracle Certified", label: "Associate Verified", desc: "Java & Database Foundations" },
];

const techPills = [
  { name: "React", icon: <SiReact className="text-[#61DAFB]" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-[#68A063]" /> },
  { name: "JavaScript", icon: <SiJavascript className="text-[#F7DF1E]" /> },
  { name: "Python", icon: <SiPython className="text-[#387EB8]" /> },
  { name: "Docker", icon: <SiDocker className="text-[#2496ED]" /> },
  { name: "Kubernetes", icon: <SiKubernetes className="text-[#326CE5]" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-[#06B6D4]" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-[#47A248]" /> },
  { name: "Express", icon: <SiExpress className="text-slate-300" /> },
  { name: "REST APIs", icon: <span className="text-blue-400 font-mono font-bold text-[10px]">API</span> },
  { name: "Git", icon: <SiGit className="text-[#F05032]" /> },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-[#030712] text-slate-100 px-6 sm:px-10 lg:px-16 pt-32 pb-20 flex flex-col justify-center items-center"
    >
      {/* ── 3D Interactive Background Canvas (Edge-to-Edge) ── */}
      <Canvas3D />

      {/* Subtle Dot Grid Mask */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Ambient Depth Gradients */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/15 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          
          {/* ── Left Column: Hero Text & CTAs ── */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300 shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
                Hi, I'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">
                  Ganesh Kumar
                </span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Software Developer &amp; Full-Stack Builder
              </p>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              I develop responsive, high-performance web applications using React, Node.js, Docker, and modern software practices. Focused on clean architecture, scalable code, and delivering seamless user experiences.
            </p>

            {/* Core Tech Stack (Now with Docker & Kubernetes + Brand Icons) */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {techPills.map((tech) => (
                  <span
                    key={tech.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/90 border border-slate-800 text-slate-200 hover:border-slate-700 hover:text-white hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10 transition-all duration-200 cursor-default"
                  >
                    <span className="text-sm shrink-0 flex items-center">{tech.icon}</span>
                    <span>{tech.name}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton strength={0.15}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/30 hover:shadow-blue-600/50 hover:-translate-y-0.5"
                >
                  <span>View Projects</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-md shadow-black/30"
                >
                  <HiOutlineMail className="text-base" />
                  <span>Contact Me</span>
                </a>
              </MagneticButton>

              {/* Social links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={homeData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all"
                >
                  <FaLinkedin className="text-base" />
                </a>
                <a
                  href={homeData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href={homeData.social.email}
                  aria-label="Email"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 hover:-translate-y-0.5 transition-all"
                >
                  <HiOutlineMail className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* ── Right Column: Executive Developer ID Card (3D Tilt) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <TiltCard maxTilt={10} className="max-w-[340px] sm:max-w-[370px]">
              <div className="relative group">
                
                {/* 3D Depth Layer -1: Glowing Depth Backplate */}
                <div
                  style={{ transform: "translateZ(-25px)" }}
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-[2.25rem] bg-gradient-to-tr from-blue-600/30 via-indigo-600/20 to-cyan-500/30 blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-300"
                />

                {/* 3D Depth Layer 0: Dark Glass Card Chassis */}
                <div className="relative rounded-[2rem] border border-slate-800 bg-slate-900/90 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9)] p-4 backdrop-blur-2xl space-y-3.5">
                  
                  {/* Card Header: Tech ID Row */}
                  <div className="flex items-center justify-between pb-1 px-1">
                    <div className="flex items-center gap-2">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                      </span>
                      <span className="text-[11px] font-mono font-semibold text-slate-300 tracking-wider">
                        GANESH.DEV // ID
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2 py-0.5 rounded-md font-semibold">
                      FULL-STACK
                    </span>
                  </div>

                  {/* 3D Depth Layer 1: Framed Portrait with Seamless Dark Gradient */}
                  <div
                    style={{ transform: "translateZ(15px)" }}
                    className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner group/photo"
                  >
                    <img
                      src={homeData.image.src}
                      alt={homeData.image.alt}
                      width={homeData.image.width}
                      height={homeData.image.height}
                      className="w-full h-[320px] sm:h-[350px] object-cover object-top filter brightness-[0.95] contrast-[1.04] transition-transform duration-500 group-hover/photo:scale-102"
                      loading="eager"
                      fetchPriority="high"
                    />

                    {/* Smooth vignette gradient at the bottom so photo melts into dark card */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none"
                    />

                    {/* Quick location tag over image bottom */}
                    <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-slate-950/80 border border-slate-800/80 text-[11px] font-medium text-slate-300 backdrop-blur-sm">
                      <span className="text-blue-400">📍</span>
                      <span>Pune, Maharashtra, India</span>
                    </div>
                  </div>

                  {/* Card Footer: Verified Developer Credentials */}
                  <div
                    style={{ transform: "translateZ(25px)" }}
                    className="pt-1 px-1 space-y-2.5"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="text-base font-bold text-white leading-tight">
                            Ganesh Kumar
                          </h3>
                          <BsPatchCheckFill className="text-blue-400 text-sm" title="Verified Developer" />
                        </div>
                        <p className="text-xs text-slate-400 font-medium">
                          Software Developer &amp; Systems Engineer
                        </p>
                      </div>
                    </div>

                    {/* Integrated Micro-Badges Row */}
                    <div className="flex flex-wrap gap-1.5 pt-0.5">
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                        <span className="text-amber-400">🏆</span> Hackathon 1st
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                        <span className="text-cyan-400">⚡</span> 5+ Projects
                      </span>
                      <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-semibold text-slate-300 flex items-center gap-1">
                        <span className="text-blue-400">🐳</span> Docker &amp; K8s
                      </span>
                    </div>
                  </div>

                </div>

              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* ── Bottom: 3D Metric Highlight Cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-300"
            >
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </p>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {stat.desc}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Home;
