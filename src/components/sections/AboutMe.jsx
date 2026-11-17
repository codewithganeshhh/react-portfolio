import React from "react";
import { motion } from "framer-motion";
import {
  LuCode,
  LuServer,
  LuCpu,
  LuDatabase,
  LuMapPin,
  LuArrowUpRight,
  LuShieldCheck,
} from "react-icons/lu";
import { FaTrophy, FaAward } from "react-icons/fa";
import { BsCheckCircleFill, BsPatchCheckFill } from "react-icons/bs";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative py-28 px-6 sm:px-10 lg:px-16 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Section Header */}
        <div className="space-y-3">
          <p className="text-xs font-mono font-semibold text-blue-400 tracking-widest uppercase">
            Background &amp; Philosophy
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
            Engineering with Purpose &amp; Precision.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 max-w-2xl leading-relaxed">
            A clear perspective on my background, technical engineering focus, and the principles that guide how I build software every day.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* ── Bento Card 1: Main Story / Bio (7 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="lg:col-span-7 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>The Story &amp; Focus</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                I'm Ganesh Kumar — Full-Stack Developer building modern, resilient web products.
              </h3>

              <div className="space-y-3 text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                <p>
                  Based in <strong className="text-white font-semibold">Hyderabad, India</strong>, I specialize in engineering full-stack web applications from responsive frontend interfaces to scalable backend APIs and containerized cloud deployments.
                </p>
                <p>
                  My core stack includes <span className="text-blue-400 font-medium">React</span>, <span className="text-blue-400 font-medium">Node.js</span>, <span className="text-blue-400 font-medium">Express</span>, <span className="text-blue-400 font-medium">MongoDB</span>, <span className="text-blue-400 font-medium">Docker</span>, and <span className="text-blue-400 font-medium">Kubernetes</span>. I prioritize writing clean, modular code with solid architecture, robust error-handling, and intuitive user experiences.
                </p>
                <p>
                  Beyond personal projects, I have actively contributed to open-source programs like <strong className="text-white font-semibold">GirlScript Summer of Code (GSSoC)</strong>, led technical communities, and won first place in university hackathons.
                </p>
              </div>
            </div>

            {/* Quick Badges inside Card with hover fill */}
            <div className="pt-2 flex flex-wrap items-center gap-2 text-xs">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-rose-500/50 hover:bg-rose-950/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <LuMapPin className="text-rose-400 text-sm" />
                <span>Hyderabad, Telangana</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-emerald-500/50 hover:bg-emerald-950/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <BsCheckCircleFill className="text-emerald-400 text-xs" />
                <span>Ready for High-Impact Roles</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-slate-300 hover:border-cyan-500/50 hover:bg-cyan-950/40 hover:text-white hover:-translate-y-0.5 transition-all duration-200 cursor-default">
                <LuShieldCheck className="text-cyan-400 text-sm" />
                <span>Clean Architecture First</span>
              </span>
            </div>
          </motion.div>

          {/* ── Bento Card 2: Key Milestones & Credentials (5 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-5 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-5 hover:border-slate-700/80 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-400 uppercase tracking-wider">
              <FaTrophy className="text-xs" />
              <span>Track Record &amp; Honors</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3 flex-1">
              {/* Milestone 1: Hackathon */}
              <div className="group/milestone flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-amber-950/40 border border-amber-800/50 flex items-center justify-center text-amber-400 shrink-0 transition-all duration-300 group-hover/milestone:scale-105 group-hover/milestone:bg-amber-500 group-hover/milestone:text-slate-950 group-hover/milestone:border-amber-400 group-hover/milestone:shadow-[0_0_18px_rgba(245,158,11,0.5)]">
                  <FaTrophy className="text-sm" />
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white group-hover/milestone:text-amber-300 transition-colors">
                      Hackathon 1st Place
                    </span>
                    <span className="text-[10px] font-mono text-amber-400 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-800/40 shrink-0">
                      CBNCC NSU
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Built a full-stack healthcare web solution in a 24-hr sprint.
                  </p>
                </div>
              </div>

              {/* Milestone 2: Best Intern */}
              <div className="group/milestone flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/40 border border-cyan-800/50 flex items-center justify-center text-cyan-400 shrink-0 transition-all duration-300 group-hover/milestone:scale-105 group-hover/milestone:bg-cyan-500 group-hover/milestone:text-slate-950 group-hover/milestone:border-cyan-400 group-hover/milestone:shadow-[0_0_18px_rgba(6,182,212,0.5)]">
                  <FaAward className="text-sm" />
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white group-hover/milestone:text-cyan-300 transition-colors">
                      Best Intern Award
                    </span>
                    <span className="text-[10px] font-mono text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/40 shrink-0">
                      Paultech
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Recognized for high-velocity full-stack shipping &amp; teamwork.
                  </p>
                </div>
              </div>

              {/* Milestone 3: Oracle & Meta Verified */}
              <div className="group/milestone flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/80 border border-slate-800/80 hover:border-rose-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-rose-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-rose-950/40 border border-rose-800/50 flex items-center justify-center text-rose-400 shrink-0 transition-all duration-300 group-hover/milestone:scale-105 group-hover/milestone:bg-rose-500 group-hover/milestone:text-white group-hover/milestone:border-rose-400 group-hover/milestone:shadow-[0_0_18px_rgba(244,63,94,0.5)]">
                  <BsPatchCheckFill className="text-sm" />
                </div>
                <div className="flex-1 min-w-0 space-y-0.5">
                  <div className="flex items-center justify-between gap-1">
                    <span className="text-xs font-bold text-white group-hover/milestone:text-rose-300 transition-colors">
                      Oracle &amp; Meta Verified
                    </span>
                    <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-2 py-0.5 rounded border border-blue-800/40 shrink-0">
                      Credentials
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 leading-normal">
                    Oracle Cloud AI Foundations &amp; Meta Front-End/Back-End.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-1 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400">
              <span>Verified credentials</span>
              <a
                href="#certifications"
                className="inline-flex items-center gap-1 text-blue-400 hover:text-blue-300 font-semibold transition-colors"
              >
                <span>View certificates</span>
                <LuArrowUpRight className="text-sm" />
              </a>
            </div>
          </motion.div>

          {/* ── Bento Card 3: Core Technical Pillars (6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.15 }}
            className="lg:col-span-6 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 space-y-5 hover:border-slate-700/80 transition-all duration-300"
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-blue-400 uppercase tracking-wider">
              <LuCode className="text-sm" />
              <span>Core Technical Pillars</span>
            </div>

            <div className="space-y-3">
              {/* Pillar 1: Frontend */}
              <div className="group/pillar flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-blue-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 shrink-0 transition-all duration-300 group-hover/pillar:scale-105 group-hover/pillar:bg-blue-600 group-hover/pillar:text-white group-hover/pillar:border-blue-500 group-hover/pillar:shadow-[0_0_18px_rgba(37,99,235,0.6)]">
                  <LuCode className="text-base" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-white group-hover/pillar:text-blue-300 transition-colors">
                    Frontend Architecture
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Modern React, component hierarchies, responsive Tailwind layouts, state management, and accessible UI.
                  </p>
                </div>
              </div>

              {/* Pillar 2: Backend */}
              <div className="group/pillar flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-emerald-950/80 border border-emerald-800/60 flex items-center justify-center text-emerald-400 shrink-0 transition-all duration-300 group-hover/pillar:scale-105 group-hover/pillar:bg-emerald-600 group-hover/pillar:text-white group-hover/pillar:border-emerald-500 group-hover/pillar:shadow-[0_0_18px_rgba(16,185,129,0.6)]">
                  <LuServer className="text-base" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-white group-hover/pillar:text-emerald-300 transition-colors">
                    Backend Systems &amp; APIs
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Modular Node.js and Express services, RESTful endpoint design, JWT security, and clean MVC structure.
                  </p>
                </div>
              </div>

              {/* Pillar 3: Cloud & Containers */}
              <div className="group/pillar flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-cyan-950/80 border border-cyan-800/60 flex items-center justify-center text-cyan-400 shrink-0 transition-all duration-300 group-hover/pillar:scale-105 group-hover/pillar:bg-cyan-500 group-hover/pillar:text-slate-950 group-hover/pillar:border-cyan-400 group-hover/pillar:shadow-[0_0_18px_rgba(6,182,212,0.6)]">
                  <LuCpu className="text-base" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-white group-hover/pillar:text-cyan-300 transition-colors">
                    Containers &amp; Cloud Workflows
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Dockerized environments, Kubernetes container orchestration, and continuous deployments with GCP &amp; Vercel.
                  </p>
                </div>
              </div>

              {/* Pillar 4: Database */}
              <div className="group/pillar flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-purple-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300 cursor-default">
                <div className="w-9 h-9 rounded-xl bg-purple-950/80 border border-purple-800/60 flex items-center justify-center text-purple-400 shrink-0 transition-all duration-300 group-hover/pillar:scale-105 group-hover/pillar:bg-purple-600 group-hover/pillar:text-white group-hover/pillar:border-purple-500 group-hover/pillar:shadow-[0_0_18px_rgba(147,51,234,0.6)]">
                  <LuDatabase className="text-base" />
                </div>
                <div className="space-y-0.5">
                  <p className="text-sm font-bold text-white group-hover/pillar:text-purple-300 transition-colors">
                    Database Design &amp; Storage
                  </p>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Flexible document schemas with MongoDB and relational relational models with MySQL and PostgreSQL.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* ── Bento Card 4: How I Work / Engineering Principles (6 cols) ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="lg:col-span-6 rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 flex flex-col justify-between space-y-6 hover:border-slate-700/80 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-400 uppercase tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span>How I Work &amp; Think</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug">
                Engineering values that guide every pull request.
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-slate-300">
                {/* Step 1 */}
                <div className="group/step flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-blue-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-mono font-bold text-blue-400 shrink-0 transition-all duration-300 group-hover/step:scale-105 group-hover/step:bg-blue-600 group-hover/step:text-white group-hover/step:border-blue-500 group-hover/step:shadow-[0_0_16px_rgba(37,99,235,0.6)]">
                    01
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-white group-hover/step:text-blue-300 transition-colors">
                      Clean &amp; Maintainable Architecture
                    </p>
                    <p className="text-slate-400 leading-relaxed text-xs">
                      Code is read far more often than it is written. I structure applications so any teammate can jump in and contribute without friction.
                    </p>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="group/step flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-cyan-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-mono font-bold text-cyan-400 shrink-0 transition-all duration-300 group-hover/step:scale-105 group-hover/step:bg-cyan-500 group-hover/step:text-slate-950 group-hover/step:border-cyan-400 group-hover/step:shadow-[0_0_16px_rgba(6,182,212,0.6)]">
                    02
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-white group-hover/step:text-cyan-300 transition-colors">
                      Speed &amp; User Experience
                    </p>
                    <p className="text-slate-400 leading-relaxed text-xs">
                      Fast response times, intuitive UI transitions, and zero fluff. Great software respects the user's time and device resources.
                    </p>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="group/step flex items-start gap-3.5 p-3 rounded-xl bg-slate-950/60 border border-slate-800/70 hover:border-emerald-500/50 hover:bg-slate-900/90 hover:-translate-y-1 hover:shadow-lg hover:shadow-emerald-500/10 transition-all duration-300 cursor-default">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-xs font-mono font-bold text-emerald-400 shrink-0 transition-all duration-300 group-hover/step:scale-105 group-hover/step:bg-emerald-600 group-hover/step:text-white group-hover/step:border-emerald-500 group-hover/step:shadow-[0_0_16px_rgba(16,185,129,0.6)]">
                    03
                  </div>
                  <div className="space-y-0.5">
                    <p className="font-semibold text-white group-hover/step:text-emerald-300 transition-colors">
                      Relentless Growth &amp; Problem Solving
                    </p>
                    <p className="text-slate-400 leading-relaxed text-xs">
                      Whether it's mastering container orchestration, optimizing queries, or adopting AI tooling, I adapt quickly and stay curious.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Connect Callout */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Looking for an energetic builder?</span>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md shadow-blue-600/20 hover:shadow-blue-600/40 hover:-translate-y-0.5 transition-all"
              >
                <span>Let's talk</span>
                <LuArrowUpRight className="text-sm" />
              </a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default AboutMe;
