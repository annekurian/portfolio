"use client";

import { useEffect, useRef } from "react";

const blobUrl = "https://jrcdxlmnhq5drdrm.public.blob.vercel-storage.com/certs";

const certifications = [
  {
    title: "FullStack Development with AI",
    issuer: "NUS School of Computing",
    date: "Mar 2026 – ongoing",
    badge: "In Progress",
    featured: true,
    certLink: null,
    courseLink: null,
  },
  {
    title: "Building AI-Powered Apps",
    issuer: "Online",
    date: "Apr 2026",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/build-ai-powered-apps.pdf`,
    courseLink: "https://codewithmosh.com/p/build-ai-powered-apps",
  },
  {
    title: "AI for Everyone",
    issuer: "DeepLearning.AI",
    date: "Jun 2025",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/AI-for-everyone-deep-learning.pdf`,
    courseLink: null,
  },
  {
    title: "Certified AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    date: "Aug 2023",
    badge: null,
    featured: false,
    certLink:
      "https://www.credly.com/badges/156ca391-ce79-425a-b664-7efefc4ad16a/public_url",
    courseLink: null,
  },
  {
    title: "Ultimate Docker Course",
    issuer: "Code With Mosh",
    date: "June 2026",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/ultimate-docker-course.pdf`,
    courseLink: "https://codewithmosh.com/p/the-ultimate-docker-course",
  },
  {
    title: "Complete Python Mastery",
    issuer: "Code With Mosh",
    date: "January 2026",
    badge: "In Progress",
    featured: false,
    certLink: null,
    courseLink:
      "https://codewithmosh.com/p/python-programming-course-beginners",
  },
  {
    title: "React 18 for Beginners",
    issuer: "Code With Mosh",
    date: "November 2025",
    badge: "In Progress",
    featured: false,
    certLink: null,
    courseLink: "https://codewithmosh.com/p/ultimate-react-part1",
  },
  {
    title: "Microsoft Certified: Foundational C#",
    issuer: "Microsoft",
    date: "Sep 2024",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/foundational-C-with-microsoft.png`,
    courseLink: null,
  },
  {
    title: "Ultimate TypeScript Course",
    issuer: "Code with Mosh",
    date: "Dec 2023",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/ultimate-typeScript-course.pdf`,
    courseLink: "https://codewithmosh.com/p/the-ultimate-typescript",
  },
  {
    title: "Ultimate Redux Course",
    issuer: "Code with Mosh",
    date: "Jul 2023",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/ultimate-redux-course.pdf`,
    courseLink: "https://codewithmosh.com/p/ultimate-redux",
  },
  {
    title: "Mastering React 16",
    issuer: "Code with Mosh",
    date: "Jun 2023",
    badge: null,
    featured: false,
    certLink: `${blobUrl}/mastering-react.pdf`,
    courseLink: null,
  },
];

export default function Certifications() {
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
    <section id="certifications" className="py-28 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <div ref={ref} className="fade-up">
          {/* Heading */}
          <div className="flex items-baseline gap-4 mb-16">
            <span className="text-[11px] text-gray-300 tracking-widest uppercase">
              05
            </span>
            <h2
              className="text-3xl md:text-4xl font-normal text-gray-900"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Courses & Certifications
            </h2>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl p-5 border transition-colors hover:border-gray-300 ${
                  cert.featured ? "border-gray-900" : "border-gray-100"
                }`}
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="text-[16px] font-medium text-gray-900 leading-snug">
                    {cert.title}
                  </h3>
                  {cert.badge && (
                    <span className="text-[14px] tracking-widest uppercase px-2 py-0.5 bg-gray-900 text-white rounded-full shrink-0 mt-0.5">
                      {cert.badge}
                    </span>
                  )}
                </div>
                <p className="text-[14px] text-gray-500">{cert.issuer}</p>
                <p className="text-[13px] text-gray-400 mt-1">{cert.date}</p>
                {/* Footer link */}
                <div className="pt-3 border-t border-gray-100 flex justify-end gap-2">
                  {cert.certLink ? (
                    <a
                      href={cert.certLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      Certificate
                    </a>
                  ) : (
                    <span className="text-[12px] text-gray-400">
                      {cert.certLink}
                    </span>
                  )}
                  {cert.courseLink ? (
                    <a
                      href={cert.courseLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[12px] text-blue-500 hover:text-blue-700 transition-colors"
                    >
                      View Course
                    </a>
                  ) : (
                    <span className="text-[12px] text-gray-400">
                      {cert.courseLink}
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
