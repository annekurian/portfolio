"use client";

import { useEffect, useRef } from "react";

const projects = [
  {
    title: "AI-powered Theme Park Assistant",
    stack: "React · OpenAI API · GPT",
    description:
      "Full-stack AI chatbot enabling real-time LLM-assisted conversational responses. Includes a GPT-powered review summarisation pipeline that reduces read-time for end users.",
    tags: ["React", "OpenAI API", "TypeScript", "Prompt Engineering"],
    appUrl: "https://theme-park-chatbot-client.vercel.app/",
    link: "https://github.com/annekurian/theme-park-chatbot",
    linkLabel: "GitHub ↗",
    featured: true,
  },
  {
    title: "AI-powered Product Review Summarizer",
    stack: "React · OpenAI API · GPT",
    description:
      "Full-stack AI chatbot enabling real-time LLM-assisted conversational responses. Includes a GPT-powered review summarisation pipeline that reduces read-time for end users.",
    tags: ["React", "OpenAI API", "TypeScript", "Prompt Engineering"],
    link: "https://github.com/annekurian/review-summarizer",
    linkLabel: "GitHub ↗",
    featured: true,
  },
  {
    title: "Real-Time IoT Monitoring Dashboard",
    stack: "React · WebSockets · AWS",
    description:
      "Responsive real-time dashboards for field operations across underwater technology platforms, with live data via WebSockets and PostgreSQL-backed REST APIs.",
    tags: ["React", "TypeScript", "WebSockets", "AWS", "PostgreSQL"],
    link: null,
    linkLabel: "Subnero · 2018–2022",
    featured: false,
  },
  {
    title: "Banking Reports Engine — DBS Bank",
    stack: "Finacle · Oracle SQL · Groovy",
    description:
      "Designed and delivered ~35 custom reports for DBS Bank, improving generation time by 30% through query tuning and Finacle process customisations.",
    tags: ["Finacle", "Oracle SQL", "Groovy", "Performance Tuning"],
    link: null,
    linkLabel: "Infosys · 2014–2018",
    featured: false,
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          {/* Heading */}
          <div className="flex items-baseline gap-4 mb-12">
            <span className="text-[11px] text-gray-300 tracking-widest uppercase">
              03
            </span>
            <h2
              className="text-3xl md:text-4xl font-normal text-gray-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Projects
            </h2>
          </div>

          {/* 2-column card grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`bg-white border-y border-r border-gray-100 rounded-r-xl flex flex-col gap-3 p-5 ${
                  project.featured
                    ? "border-l-2 border-l-blue-400"
                    : "border-l-2 border-l-gray-200"
                }`}
              >
                {/* Title row */}
                <div className="flex items-start justify-between gap-2">
                  <a
                    href={project.appUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[16px] text-blue-500 hover:text-blue-700 transition-colors"
                  >
                    {project.title}
                  </a>
                  {project.featured && (
                    <span className="text-[10px] tracking-wider uppercase px-2 py-0.5 bg-blue-50 text-blue-700 rounded-full shrink-0 mt-0.5">
                      Featured
                    </span>
                  )}
                </div>

                {/* Stack subtitle */}
                <p className="text-[12px] text-gray-400">{project.stack}</p>

                {/* Description */}
                <p className="text-[13px] text-gray-500 leading-relaxed flex-1">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] px-2 py-0.5 border border-gray-100 text-gray-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer link */}
                <div className="pt-3 border-t border-gray-100 flex justify-end">
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      {project.linkLabel}
                    </a>
                  ) : (
                    <span className="text-[12px] text-gray-400">
                      {project.linkLabel}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
