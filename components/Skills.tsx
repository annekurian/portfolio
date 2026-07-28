"use client";

import { useEffect, useRef } from "react";

const skillGroups = [
  {
    category: "AI & LLM",
    skills: [
      "OpenAI API Integration",
      "LLM-Powered App Development",
      "Prompt Engineering",
      "AI-Assisted Frontend",
    ],
  },
  {
    category: "Frontend & Libraries",
    skills: [
      "React",
      "TypeScript",
      "JavaScript (ES5/ES6)",
      "Tailwind CSS",
      "Bootstrap",
      "Chart.js",
      "Leaflet",
    ],
  },
  {
    category: "Backend & APIs",
    skills: [
      "REST APIs",
      "WebSockets",
      "Express",
      "Flask",
      "Node.js",
      "Groovy",
      "Python",
      "C#",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS EC2 & RDS", "Docker", "GitHub", "Ansible", "SVN"],
  },
  {
    category: "Databases & Tools",
    skills: ["PostgreSQL", "MySQL", "pgAdmin", "DataGrip", "JIRA"],
  },
  {
    category: "Design Tools",
    skills: ["Figma", "Sketch"],
  },
];

export default function Skills() {
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
    <section id="skills" className="py-28 max-w-5xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        {/* Heading */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-[11px] text-gray-300 tracking-widest uppercase">
            02
          </span>
          <h2
            className="text-3xl md:text-4xl font-normal text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Skills & Tech Stack
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <p className="text-[13px] tracking-widest uppercase text-gray-400 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[13px] px-3 py-1 bg-gray-50 text-gray-700 border border-gray-100 rounded-md hover:border-gray-300 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
