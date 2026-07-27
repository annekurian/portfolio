"use client";

import { useEffect, useRef, useState } from "react";

const experiences = [
  {
    title: "Software Developer — UI & Frontend",
    company: "Subnero Pte Ltd",
    location: "Singapore",
    period: "Aug 2018 – Aug 2022",
    highlights: [
      "Built responsive real-time IoT monitoring dashboards using React, TypeScript, and WebSockets for underwater technology platforms.",
      "Engineered frontend architecture for customer-facing technical applications across full SDLC.",
      "Deployed and optimised AWS EC2 and RDS environments, reducing infrastructure and deployment costs.",
      "Led code reviews, UI performance debugging, and frontend architecture discussions.",
    ],
  },
  {
    title: "Technology Lead — Onsite Production Support",
    company: "Infosys",
    location: "India & Singapore",
    period: "Aug 2014 – Aug 2018",
    highlights: [
      "Led production support for Finacle digital banking implementations serving global banking clients.",
      "Delivered ~35 custom reports for DBS Bank, improving generation time by 30% through query tuning.",
      "Drove product customisations and resolved high-priority production issues with strict SLA compliance.",
      "Mentored junior engineers and coordinated cross-team testing schedules.",
    ],
  },
  {
    title: "Technology Analyst — Product Customization/Development",
    company: "Infosys",
    location: "India",
    period: "Jul 2012 – Jul 2014",
    highlights: [
      "Executed end-to-end functional testing for enterprise banking systems.",
      "Introduced peer review practices that elevated defect detection rates and reduced post-release defects.",
    ],
  },
  {
    title: "Software Engineer — End-to-End Testing",
    company: "Infosys",
    location: "India",
    period: "Sep 2008 – Jun 2012",
    highlights: [
      "Performed functional testing for large-scale banking systems across multi-release cycles.",
      "Validated business requirements against technical implementations.",
    ],
  },
];

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState<number>(0);

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
    <section id="experience" className="py-28 max-w-5xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        {/* Heading */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-[11px] text-gray-300 tracking-widest uppercase">
            04
          </span>
          <h2
            className="text-3xl md:text-4xl font-normal text-gray-900"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Work Experience
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />

          <div className="flex flex-col gap-0">
            {experiences.map((exp, index) => (
              <div key={index} className="pl-8 relative">
                {/* Dot */}
                <div
                  className={`absolute left-[-4px] top-2 w-2 h-2 rounded-full border transition-colors ${
                    expanded === index
                      ? "bg-gray-900 border-gray-900"
                      : "bg-white border-gray-300"
                  }`}
                />

                {/* Row */}
                <button
                  onClick={() => setExpanded(expanded === index ? -1 : index)}
                  className="w-full text-left py-6 border-b border-gray-100 last:border-0 group"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-1">
                    <h3 className="text-[16px] font-medium text-gray-900 group-hover:text-gray-600 transition-colors">
                      {exp.title}
                    </h3>
                    <span className="text-[13px] text-gray-400 shrink-0">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[14px] text-gray-500">
                    {exp.company} · {exp.location}
                  </p>

                  {/* Expanded highlights */}
                  {expanded === index && (
                    <ul className="mt-4 space-y-2">
                      {exp.highlights.map((point, i) => (
                        <li
                          key={i}
                          className="flex gap-3 text-[14px] text-gray-500 leading-relaxed"
                        >
                          <span className="text-gray-300 shrink-0 mt-0.5">
                            –
                          </span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Total years */}
        <p className="mt-10 text-[14px] text-gray-400 tracking-wide">
          14 years of continuous experience · 2008 – 2022
        </p>
      </div>
    </section>
  );
}
