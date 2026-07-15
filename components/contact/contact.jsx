"use client"

import { useLanguage } from "../language/LanguageProvider"

const CONTACTS = [
  { icon: "✉️", key: "Email", value: "contact.siffleurkevin@gmail.com", href: "mailto:contact.siffleurkevin@gmail.com" },
  { icon: "🐙", key: "GitHub", value: "https://github.com/Moltozor", href: "https://github.com/Moltozor", external: true },
  { icon: "💼", key: "LinkedIn", value: "https://www.linkedin.com/feed/", href: "https://www.linkedin.com/feed/", external: true },
  /*{ icon: "📄", key: "CV", href: "#" },*/
]

export const Contact = () => {
  const { t } = useLanguage()

  return (
    <footer id="contact" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">{t.contact.eyebrow}</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">{t.contact.heading}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONTACTS.map((contact) => (
          <a
            key={contact.key}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener" : undefined}
            className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 flex items-center gap-4 no-underline text-inherit transition-colors duration-150 hover:border-red-500/40"
          >
            <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 text-lg">
              {contact.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">{t.contact.labels[contact.key]}</p>
              <p className="text-white text-sm font-medium">{contact.key === "CV" ? t.contact.cvValue : contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </footer>
  )
}
