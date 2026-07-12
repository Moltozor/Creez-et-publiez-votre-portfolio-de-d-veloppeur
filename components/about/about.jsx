"use client"

import { useLanguage } from "../language/LanguageProvider"

export const About = () => {
  const { t } = useLanguage()

  return (
    <section id="a-propos" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">{t.about.eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">{t.about.heading}</h2>
      <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">{t.about.text}</p>
    </section>
  )
}
