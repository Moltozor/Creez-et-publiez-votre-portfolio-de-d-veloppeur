"use client"

import { useLanguage } from "../language/LanguageProvider"
import { Section, SectionHeading } from "../ui/section"
import { Card } from "../ui/card"

const TIMELINE = [
  {
    key: "integrateur-web",
    year: "2025 — 2026",
    org: "Openclassrooms",
    link: "https://openclassrooms.com/fr/paths/900-integrateur-web",
  },
]

export const Timeline = () => {
  const { t } = useLanguage()

  return (
    <Section id="parcours">
      <SectionHeading eyebrow={t.timeline.eyebrow} heading={t.timeline.heading} />
      <div className="flex flex-col gap-3">
        {TIMELINE.map((entry) => (
          <Card key={entry.key} accent className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
            <span className="font-mono text-xs text-accent-soft shrink-0 sm:w-[120px]">{entry.year}</span>
            <div>
              {entry.link ? (
                <a
                  href={entry.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white font-medium hover:text-accent-soft transition-colors underline underline-offset-2 decoration-white/30 hover:decoration-accent-soft"
                >
                  {t.timeline.entries[entry.key].title}
                </a>
              ) : (
                <p className="text-white font-medium">{t.timeline.entries[entry.key].title}</p>
              )}
              <p className="text-white/50 text-sm">{entry.org}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
