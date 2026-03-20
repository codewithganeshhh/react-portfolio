import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TiltCard } from "../ui/TiltCard";
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
      className="w-5 h-5"
    />
  ),
  javascript: <SiJavascript className="text-yellow-500 text-lg" />,
  mysql: <SiMysql className="text-blue-500 text-lg" />,
  postgresql: <SiPostgresql className="text-sky-500 text-lg" />,
  mongodb: <SiMongodb className="text-green-600 text-lg" />,
  cpp: <SiCplusplus className="text-blue-600 text-lg" />,
  java: <FaJava className="text-red-500 text-lg" />,
  php: <SiPhp className="text-indigo-500 text-lg" />,
  html: <SiHtml5 className="text-orange-600 text-lg" />,
  css: <SiCss3 className="text-blue-500 text-lg" />,
  react: <FaReact className="text-cyan-500 text-lg" />,
  bootstrap: <SiBootstrap className="text-purple-600 text-lg" />,
  tailwind: <SiTailwindcss className="text-teal-400 text-lg" />,
  mui: <SiMui className="text-blue-500 text-lg" />,
  node: <FaNodeJs className="text-green-600 text-lg" />,
  express: <SiExpress className="text-gray-600 text-lg" />,
  rest: <span className="text-slate-600 text-xs font-bold tracking-tight">REST</span>,
  mvc: <span className="text-slate-600 text-xs font-bold tracking-tight">MVC</span>,
  jwt: <SiJsonwebtokens className="text-pink-500 text-lg" />,
  git: <FaGitAlt className="text-orange-600 text-lg" />,
  github: <FaGithub className="text-gray-800 text-lg" />,
  gcp: (
    <img
      src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMDAgMzAwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiICBzdHlsZT0ib3BhY2l0eToxOyI+PHBhdGggZmlsbD0iI2Y0NDMzNiIgZD0iTTE4NC4zNTEgMTAzLjgxNmg3Ljc4NmwyMi4xOTEtMjIuMTkxbDEuMDktOS40MjFhOTkuNzQzIDk5Ljc0MyAwIDAgMC0xNjIuMjY2IDQ4LjY2NGExMi4wNyAxMi4wNyAwIDAgMSA3Ljc4Ni0uNDY3bDQ0LjM4Mi03LjMyczIuMjU4LTMuNzM3IDMuNDI2LTMuNTAzYTU1LjM2IDU1LjM2IDAgMCAxIDc1Ljc2LTUuNzYyeiIvPjxwYXRoIGZpbGw9IiM0NDhhZmYiIGQ9Ik0yNDUuOTQgMTIwLjg2OGExMDAgMTAwIDAgMCAwLTMwLjEzMi00OC41ODdsLTMxLjE0NiAzMS4xNDZhNTUuMzYgNTUuMzYgMCAwIDEgMjAuMzIzIDQzLjkxNHY1LjUyOWEyNy43MiAyNy43MiAwIDEgMSAwIDU1LjQzOGgtNTUuNDM5bC01LjUyOCA1LjYwNnYzMy4yNDhsNS41MjggNS41MjhoNTUuNDM5YTcyLjEwMSA3Mi4xMDEgMCAwIDAgNDAuOTU2LTEzMS44MjJ6Ii8+PHBhdGggZmlsbD0iIzQzYTA0NyIgZD0iTTk0LjAzIDI1Mi4zNzloNTUuNDM4di00NC4zODJIOTQuMDNhMjcuNiAyNy42IDAgMCAxLTExLjQ0Ni0yLjQ5MmwtNy43ODYgMi40MTRsLTIyLjM0NyAyMi4xOWwtMS45NDcgNy43ODdhNzEuNyA3MS43IDAgMCAwIDQzLjUyNiAxNC40ODMiLz48cGF0aCBmaWxsPSIjZmZjMTA3IiBkPSJNOTQuMDMgMTA4LjQxYTcyLjEwMSA3Mi4xMDEgMCAwIDAtNDMuNTI2IDEyOS4yNTJsMzIuMTU4LTMyLjE1N2EyNy43MiAyNy43MiAwIDEgMSAzNi42NzMtMzYuNjczbDMyLjE1OC0zMi4xNThBNzIuMDIgNzIuMDIgMCAwIDAgOTQuMDMgMTA4LjQxIi8+PC9zdmc+"
      alt="GCP"
      className="w-5 h-5"
    />
  ),
  vscode: <VscVscode className="text-blue-500 text-lg" />,
  postman: <SiPostman className="text-orange-500 text-lg" />,
  vercel: <SiVercel className="text-black text-lg" />,
  n8n: <SiN8N className="text-orange-500 text-lg" />,
  render: <SiRender className="text-black text-lg" />,
};

const SkillBadge = ({ iconKey, name }) => (
  <div className="flex items-center gap-2 bg-white border border-slate-200 text-slate-700 px-3 py-1.5 rounded-full text-sm font-medium transition-colors hover:border-blue-300 hover:text-blue-700 hover:bg-blue-50 cursor-default">
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
      className="relative py-28 px-6 bg-slate-50 text-slate-900 overflow-hidden"
    >
      {/* Light Orbs */}
      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-blue-100/50 blur-[120px] pointer-events-none"
      />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-3">
          <p className="text-sm font-bold text-blue-600 tracking-widest uppercase">
            Arsenal
          </p>
          <h2 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            My Tech Stack
          </h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoryTitles.map((title) => (
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              key={title}
              onClick={() => setActiveCategory(title)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${activeCategory === title
                ? "bg-blue-600 text-white border-blue-600 shadow-[0_8px_16px_rgba(37,99,235,0.25)] -translate-y-0.5"
                : "bg-white text-slate-600 border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50 hover:shadow-sm"
                }`}
            >
              {title}
            </motion.button>
          ))}
        </div>

        {/* Skill Category Cards */}
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          <AnimatePresence mode="popLayout">
            {filteredCategories.map((category, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: (index % 2) * 0.1, type: "spring" }}
                exit={{ opacity: 0, scale: 0.9 }}
                key={category.title}
                className="group h-full"
              >
                <TiltCard className="h-full glass-card gradient-border p-8 bg-white/80 grid grid-rows-[auto_1fr] gap-6">
                  {/* Title with accent */}
                  <div className="flex items-center gap-3">
                    <div className="h-6 w-1.5 rounded-full bg-gradient-to-b from-blue-500 to-cyan-400" />
                    <h3 className="text-xl font-bold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, i) => (
                      <motion.div
                        key={i}
                        whileHover={{ scale: 1.05, y: -2 }}
                        transition={{ type: "spring", stiffness: 400, damping: 17 }}
                      >
                        <SkillBadge iconKey={skill.icon} name={skill.name} />
                      </motion.div>
                    ))}
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;