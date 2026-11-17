import { useState } from "react";
import PropTypes from "prop-types";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { allProjects, techFilters, techDescriptions } from "../../constants/projects";

const MAX_VISIBLE_TAGS = 4;

const FallbackReveal = ({ children }) => <>{children}</>;
FallbackReveal.propTypes = { children: PropTypes.node.isRequired };

export const Projects = () => {
  const [activeTech, setActiveTech] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
    const stack = project.stack ?? [];
    const matchesTech = activeTech === "All" || stack.includes(activeTech);
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query);
    return matchesTech && matchesSearch;
  });

  const shouldShowLiveDemo = (demoUrl) => Boolean(demoUrl && demoUrl.trim() !== "");

  return (
    <section
      id="projects"
      className="relative py-28 px-5 sm:px-6 lg:px-8 bg-[#030712] text-slate-100 overflow-hidden border-t border-slate-800/60"
    >
      <FallbackReveal>
        <div className="mx-auto w-full max-w-screen-xl relative z-10">
          {/* Header */}
          <div className="text-center mb-14 space-y-3">
            <p className="text-xs font-bold text-blue-400 tracking-widest uppercase">
              Portfolio
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
              Featured Projects
            </h2>
          </div>

          {/* Search Bar */}
          <div className="mb-8 flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search projects by name or technology…"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full ps-12 pe-10 py-3 bg-slate-900 border border-slate-800 rounded-xl text-white font-normal placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center rounded-full bg-slate-800 text-slate-400 hover:text-white text-xs font-bold transition-all"
                  aria-label="Clear search"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* Tech Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {techFilters.map((tech) => (
              <button
                key={tech}
                onClick={() => setActiveTech(tech)}
                className={`px-4 py-1.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
                  activeTech === tech
                    ? "bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-600/20"
                    : "bg-slate-900 text-slate-400 border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="text-center text-xs sm:text-sm font-medium text-slate-400 mb-10">
            Showing <span className="text-white font-bold">{filteredProjects.length}</span> project{filteredProjects.length !== 1 ? "s" : ""}
            {activeTech !== "All" && ` matching `}<span className="text-blue-400">{activeTech !== "All" ? activeTech : ""}</span>
          </p>

          {/* Project Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => {
                const stack = project.stack ?? [];
                const showLive = shouldShowLiveDemo(project.demo);
                const hasGithub = Boolean(project.github && project.github.trim() !== "");

                return (
                  <motion.div
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.35, delay: (index % 3) * 0.05 }}
                    key={`${project.title}-${index}`}
                    className="group flex flex-col h-full rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 overflow-hidden transition-all duration-200"
                  >
                    {/* Project Image */}
                    {project.image && (
                      <div className="w-full h-48 bg-slate-950/80 border-b border-slate-800 flex items-center justify-center p-3 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                        />
                      </div>
                    )}

                    {/* Card body */}
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-slate-300 mb-5 leading-relaxed flex-1">
                        {project.description}
                      </p>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6 items-center">
                        {stack.slice(0, MAX_VISIBLE_TAGS).map((tech, i) => (
                          <span
                            key={`${project.title}-tag-${tech}-${i}`}
                            title={techDescriptions?.[tech] ?? tech}
                            className="bg-slate-950 text-blue-300 border border-slate-800 py-1 px-2.5 rounded-md text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                        {stack.length > MAX_VISIBLE_TAGS && (
                          <span className="text-xs text-slate-500 bg-slate-950 py-1 px-2 rounded-md border border-slate-800">
                            +{stack.length - MAX_VISIBLE_TAGS} more
                          </span>
                        )}
                      </div>

                      {/* Links */}
                      <div className="flex gap-4 items-center text-sm font-semibold mt-auto pt-4 border-t border-slate-800">
                        {hasGithub ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
                          >
                            <FaGithub className="text-base" />
                            <span>Code</span>
                          </a>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 text-slate-600 text-xs">
                            <FaGithub className="text-sm" />
                            <span>Private</span>
                          </span>
                        )}
                        {showLive && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-blue-400 hover:text-blue-300 transition-colors ms-auto"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                            <span>Live Demo</span>
                          </a>
                        )}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>

          {/* GitHub CTA */}
          <div className="mt-14 text-center">
            <a
              href="https://github.com/codewithganeshhh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-800 text-slate-200 bg-slate-900 hover:bg-slate-800 hover:text-white transition-all text-sm font-semibold"
            >
              <FaGithub className="text-lg" />
              <span>View all projects on GitHub</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </FallbackReveal>
    </section>
  );
};

export default Projects;
