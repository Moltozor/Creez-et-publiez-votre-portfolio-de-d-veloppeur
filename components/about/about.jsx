"use client"

import { useLanguage } from "../language/LanguageProvider"
import { Section, SectionHeading } from "../ui/section"

export const About = () => {
  const { t } = useLanguage()

  return (
    <Section id="a-propos">
      <SectionHeading eyebrow={t.about.eyebrow} heading={t.about.heading} />
      <p className="text-white/60 text-base sm:text-lg leading-relaxed max-w-2xl">{t.about.text}</p>
    </Section>
  )
}
