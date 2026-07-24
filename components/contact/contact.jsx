"use client"

import { useLanguage } from "../language/LanguageProvider"
import { Section, SectionHeading } from "../ui/section"
import { Card } from "../ui/card"

const CONTACTS = [
  { icon: "✉️", key: "Email", value: "contact.siffleurkevin@gmail.com", href: "mailto:contact.siffleurkevin@gmail.com" },
  { icon: "🐙", key: "GitHub", value: "https://github.com/Moltozor", href: "https://github.com/Moltozor", external: true },
  { icon: "💼", key: "LinkedIn", value: "LinkedIn", href: "https://www.linkedin.com/in/kevin-siffleur-a83573422/", external: true },
  /*{ icon: "📄", key: "CV", href: "#" },*/
]

export const Contact = () => {
  const { t } = useLanguage()

  return (
    <Section id="contact" as="footer">
      <SectionHeading eyebrow={t.contact.eyebrow} heading={t.contact.heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONTACTS.map((contact) => (
          <Card
            key={contact.key}
            as="a"
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener" : undefined}
            className="flex items-center gap-4 no-underline text-inherit transition-colors duration-150 hover:border-accent/40"
          >
            <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 text-lg">
              {contact.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">{t.contact.labels[contact.key]}</p>
              <p className="text-white text-sm font-medium">{contact.key === "CV" ? t.contact.cvValue : contact.value}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
