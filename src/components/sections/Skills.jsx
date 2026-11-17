import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
  FaGithub,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiCplusplus,
  SiPhp,
  SiBootstrap,
  SiMui,
  SiExpress,
  SiJsonwebtokens,
  SiPostman,
  SiVercel,
  SiN8N,
  SiRender
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { categories } from "../../constants/skills";

const iconMap = {
  python: (
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg"
      alt="Python"
      className="w-4 h-4"
    />
  ),
  javascript: <SiJavascript className="text-yellow-400 text-base" />,
  mysql: <SiMysql className="text-blue-400 text-base" />,
  postgresql: <SiPostgresql className="text-sky-400 text-base" />,
  mongodb: <SiMongodb className="text-emerald-400 text-base" />,
  cpp: <SiCplusplus className="text-blue-400 text-base" />,
  java: <FaJava className="text-red-400 text-base" />,
  php: <SiPhp className="text-indigo-400 text-base" />,
  html: <SiHtml5 className="text-orange-500 text-base" />,
  css: <SiCss3 className="text-blue-400 text-base" />,
  react: <FaReact className="text-cyan-400 text-base" />,
  bootstrap: <SiBootstrap className="text-purple-400 text-base" />,
  tailwind: <SiTailwindcss className="text-teal-400 text-base" />,
  mui: <SiMui className="text-blue-400 text-base" />,
  node: <FaNodeJs className="text-emerald-400 text-base" />,
  express: <SiExpress className="text-slate-300 text-base" />,
  rest: <span className="text-slate-300 text-xs font-bold font-mono">REST</span>,
  mvc: <span className="text-slate-300 text-xs font-bold font-mono">MVC</span>,
  jwt: <SiJsonwebtokens className="text-pink-400 text-base" />,
  git: <FaGitAlt className="text-orange-500 text-base" />,
  github: <FaGithub className="text-white text-base" />,
  gcp: (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiICBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZmlsbD0iI2Y0NDMzNiIgZD0iTTE4NC4zNTEgMTAzLjgxNmg3Ljc4NmwyMi4xOTEtMjIuMTkxbDEuMDktOS40MjFhOTkuNzQzIDk5Ljc0MyAwIDAgMC0xNjIuMjY2IDQ4LjY2NGExMi4wNyAxMi4wNyAwIDAgMSA3Ljc4Ni0uNDY3bDQ0LjM4Mi03LjMyczIuMjU4LTMuNzM3IDMuNDI2LTMuNTAzYTU1LjM2IDU1LjM2IDAgMCAxIDc1Ljc2LTUuNzYyeiIvPjxwYXRoIGZpbGw9IiM0NDhhZmYiIGQ9Ik0yNDUuOTQgMTIwLjg2OGExMDAgMTAwIDAgMCAwLTMwLjEzMi00OC41ODdsLTMxLjE0NiAzMS4xNDZhNTUuMzYgNTUuMzYgMCAwIDEgMjAuMzIzIDQzLjkxNHY1LjUyOWEyNy43MiAyNy43MiAwIDEgMSAwIDU1LjQzOGgtNTUuNDM5bC01LjUyOCA1LjYwNnYzMy4yNDhsNS41MjggNS41MjhoNTUuNDM5YTcyLjEwMSA3Mi4xMDEgMCAwIDAgNDAuOTU2LTEzMS44MjJ6Ii8+PHBhdGggZmlsbD0iIzQzYTA0NyIgZD0iTTk0LjAzIDI1Mi4zNzloNTUuNDM4di00NC4zODJIOTQuMDNhMjcuNiAyNy42IDAgMCAxLTExLjQ0Ni0yLjQ5MmwtNy43ODYgMi40MTRsLTIyLjM0NyAyMi4xOWwtMS45NDcgNy43ODdhNzEuNyA3MS43IDAgMCAwIDQzLjUyNiAxNC40ODMiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNOTQuMDMgMTA4LjQxYTcyLjEwMSA3Mi4xMDEgMCAwIDAtNDMuNTI2IDEyOS4yNTJsMzIuMTU4LTMyLjE1N2EyNy43MiAyNy43MiAwIDEgMSAzNi42NzMtMzYuNjczbDMyLjE1OC0zMi4xNThBNzIuMDIgNzIuMDIgMCAwIDAgOTQuMDMgMTA4LjQxIi8+PC9zdmc+"
      alt="GCP"
      className="w-4 h-4"
    />
  ),
  vscode: <VscVscode className="text-blue-400 text-base" />,
  postman: <SiPostman className="text-orange-400 text-base" />,
  vercel: <SiVercel className="text-white text-base" />,
  n8n: <SiN8N className="text-rose-400 text-base" />,
  render: <SiRender className="text-white text-base" />,
};

const SkillBadge = ({ iconKey, name }) => (
  <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 text-slate-200 px-3 py-1.5 rounded-lg text-xs font-medium hover:border-slate-700 hover:text-white transition-colors cursor-default">
    {iconMap[iconKey]}
    <span>{name}</span>
  </div>
);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const categoryTitles = ["All", ...categories.map((c) => c.title)];

  const filteredCategories =
    activeCategory === "All"
      ? categories
      : categories.filter((c) => c.title === activeCategory);

  return (
    <section
      id="skills"
      className="relative py-28 px-6 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-14 space-y-3">
          <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
            Arsenal
          </p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            My Tech Stack
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryTitles.map((title) => (
            <button
              key={title}
              onClick={() => setActiveCategory(title)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                activeCategory === title
                  ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/25"
                  : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
              }`}
            >
              {title}
            </button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                key={category.title}
                className="p-6 md:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 space-y-5"
              >
                {/* Title */}
                <div className="flex items-center gap-3">
                  <div className="h-5 w-1 rounded-full bg-blue-500" />
                  <h3 className="text-lg md:text-xl font-bold text-white">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <SkillBadge key={i} iconKey={skill.icon} name={skill.name} />
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
