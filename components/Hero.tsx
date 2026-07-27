"use client";

import { useEffect, useRef } from "react";

const tags = ["React", "TypeScript", "OpenAI API", "AWS", "Next.js"];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    setTimeout(() => el.classList.add("visible"), 100);
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center pt-16 max-w-5xl mx-auto px-6"
    >
      <div ref={ref} className="fade-up max-w-2xl">
        {/* Eyebrow */}
        <p className="text-[13px] tracking-widest text-gray-400 uppercase mb-6">
          Available for new roles · Singapore & Remote
        </p>

        {/* Name */}
        <h1
          className="text-5xl md:text-7xl font-normal text-gray-900 leading-tight mb-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Anne Thomas
          <br />
          <span className="italic text-gray-400">Kurian</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-gray-600 font-light mb-6 leading-relaxed">
          AI Application Developer &amp; Frontend Engineer
        </p>

        {/* Summary */}
        <p className=" text-gray-500 leading-relaxed mb-10 max-w-xl">
          14 years building enterprise-grade software across banking and
          technology. Specialising in React, TypeScript, and LLM-powered
          applications. Currently advancing through the NUS FullStack with AI
          programme.
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-10">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[14px] px-3 py-1 border border-gray-200 text-gray-500 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-4">
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white text-[14px] tracking-wide rounded-full hover:bg-gray-700 transition-colors"
          >
            View Projects
          </a>
          <a
            href="/Anne_Kurian_Resume.pdf"
            download
            className="px-6 py-3 border border-gray-300 text-gray-700 text-[14px] tracking-wide rounded-full hover:border-gray-900 hover:text-gray-900 transition-colors"
          >
            Download CV
          </a>
          <a
            href="#contact"
            className="px-6 py-3 text-gray-500 text-[14px] tracking-wide hover:text-gray-900 transition-colors"
          >
            Get in touch →
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="mt-16 flex items-center gap-2 text-gray-300">
        <div className="w-px h-12 bg-gray-200 ml-1" />
        <span className="text-[11px] tracking-widest uppercase rotate-0">
          Scroll
        </span>
      </div>
    </section>
  );
}
