import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { motion } from "framer-motion";
import { homeData } from "../../constants/home";
import { MagneticButton } from "../ui/MagneticButton";

const stats = [
  { value: "6+ Months", label: "Real-world Dev Experience" },
  { value: "5+ Projects", label: "Production & Academic" },
  { value: "1st Place", label: "University Hackathon Winner" },
  { value: "Oracle Certified", label: "Associate & Verified" },
];

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-dvh overflow-hidden bg-[#030712] text-slate-100 px-6 sm:px-10 lg:px-16 pt-32 pb-20 flex flex-col justify-center items-center"
    >
      {/* Subtle Dark Mesh Background */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none opacity-[0.035]"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gentle Ambient Glows */}
      <div
        aria-hidden="true"
        className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 blur-[140px] rounded-full pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-indigo-600/10 blur-[150px] rounded-full pointer-events-none"
      />

      <div className="w-full max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-12 lg:gap-14">
          
          {/* Left: Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs font-medium text-slate-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>Available for new opportunities</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-white">Ganesh Kumar</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                Software Developer &amp; Full-Stack Builder
              </p>
            </div>

            {/* Clean, authentic description */}
            <p className="text-base sm:text-lg text-slate-400 max-w-xl leading-relaxed">
              I develop responsive, high-performance web applications using React, Node.js, and modern software practices. Focused on clean architecture, scalable code, and delivering seamless user experiences.
            </p>

            {/* Core Tech Stack */}
            <div className="pt-1">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2.5">
                Core Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "JavaScript", "Python", "Tailwind CSS", "MongoDB", "Express", "REST APIs", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-md text-xs font-medium bg-slate-900 border border-slate-800 text-slate-300 hover:border-slate-700 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons & Socials */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <MagneticButton strength={0.15}>
                <a
                  href="#projects"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all duration-200 shadow-lg shadow-blue-600/20"
                >
                  <span>View Projects</span>
                  <FaArrowRight className="text-xs" />
                </a>
              </MagneticButton>

              <MagneticButton strength={0.15}>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 hover:bg-slate-850 text-slate-200 font-semibold text-sm transition-all duration-200"
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
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <FaLinkedin className="text-base" />
                </a>
                <a
                  href={homeData.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <FaGithub className="text-base" />
                </a>
                <a
                  href={homeData.social.email}
                  aria-label="Email"
                  className="w-10 h-10 inline-flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
                >
                  <HiOutlineMail className="text-lg" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right: Clean Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative group max-w-xs sm:max-w-sm w-full">
              {/* Subtle ambient border */}
              <div
                aria-hidden="true"
                className="absolute -inset-1 rounded-3xl bg-gradient-to-b from-blue-500/20 via-slate-800/20 to-transparent blur-md opacity-70 group-hover:opacity-100 transition-opacity"
              />
              <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900 shadow-2xl p-2">
                <img
                  src={homeData.image.src}
                  alt={homeData.image.alt}
                  width={homeData.image.width}
                  height={homeData.image.height}
                  className="w-full h-[380px] sm:h-[440px] object-cover object-top rounded-xl filter brightness-95 contrast-105"
                  loading="eager"
                  fetchPriority="high"
                />
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom: Clean Highlights Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 sm:mt-20 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <p className="text-2xl sm:text-3xl font-extrabold text-white">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};
export default Home;
