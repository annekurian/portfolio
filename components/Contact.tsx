'use client'

import { useEffect, useRef, useState } from 'react'

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production: connect to Formspree, Resend, or EmailJS here
    // e.g. fetch('https://formspree.io/f/YOUR_ID', { method: 'POST', body: JSON.stringify(form) })
    setSent(true)
  }

  return (
    <section id="contact" className="py-28 max-w-5xl mx-auto px-6">
      <div ref={ref} className="fade-up">
        {/* Heading */}
        <div className="flex items-baseline gap-4 mb-16">
          <span className="text-[11px] text-gray-300 tracking-widest uppercase">06</span>
          <h2
            className="text-3xl md:text-4xl font-normal text-gray-900"
            style={{ fontFamily: 'var(--font-display)' }}
          >
            Get in Touch
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left — direct links */}
          <div>
            <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
              Open to frontend, full-stack, and AI-focused roles. Feel free to reach out
              directly or use the form.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:anne.kurian14@gmail.com"
                className="flex items-center gap-3 text-[14px] text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-900 transition-colors text-xs">
                  @
                </span>
                anne.kurian14@gmail.com
              </a>

              <a
                href="https://linkedin.com/in/anne-kurian-860641ba"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-900 transition-colors text-xs">
                  in
                </span>
                linkedin.com/in/anne-kurian
              </a>

              <a
                href="https://github.com/annekurian"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[14px] text-gray-700 hover:text-gray-900 transition-colors group"
              >
                <span className="w-8 h-8 border border-gray-200 rounded-full flex items-center justify-center text-gray-400 group-hover:border-gray-900 transition-colors text-xs">
                  gh
                </span>
                github.com/annekurian
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div>
            {sent ? (
              <div className="py-12 text-center">
                <p className="text-[15px] text-gray-500 mb-2">Message sent!</p>
                <p className="text-[13px] text-gray-400">I'll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div>
                  <label className="text-[11px] tracking-widest uppercase text-gray-400 block mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase text-gray-400 block mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-gray-900 transition-colors bg-transparent"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="text-[11px] tracking-widest uppercase text-gray-400 block mb-2">
                    Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg text-[14px] text-gray-900 focus:outline-none focus:border-gray-900 transition-colors bg-transparent resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <button
                  type="submit"
                  className="px-6 py-3 bg-gray-900 text-white text-[13px] tracking-wide rounded-full hover:bg-gray-700 transition-colors self-start"
                >
                  Send message
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-start gap-4">
          <p className="text-[12px] text-gray-400">
            © {new Date().getFullYear()} Anne Thomas Kurian
          </p>
          <p className="text-[12px] text-gray-400">
            Built with Next.js · Tailwind CSS · Deployed on Vercel
          </p>
        </div>
      </div>
    </section>
  )
}
