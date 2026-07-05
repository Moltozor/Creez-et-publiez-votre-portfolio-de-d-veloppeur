const CONTACTS = [
  { icon: "✉️", label: "Email", value: "hello@monportfolio.dev", href: "mailto:hello@monportfolio.dev" },
  { icon: "🐙", label: "GitHub", value: "github.com/monprofil", href: "https://github.com/monprofil", external: true },
  { icon: "💼", label: "LinkedIn", value: "linkedin.com/in/monprofil", href: "https://linkedin.com/in/monprofil", external: true },
  { icon: "📄", label: "CV", value: "Télécharger le PDF", href: "#" },
]

export const Contact = () => {
  return (
    <section id="contact" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">// contact</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Travaillons ensemble</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {CONTACTS.map((contact) => (
          <a
            key={contact.label}
            href={contact.href}
            target={contact.external ? "_blank" : undefined}
            rel={contact.external ? "noopener" : undefined}
            className="bg-white/5 border border-white/10 rounded-lg px-5 py-4 flex items-center gap-4 no-underline text-inherit transition-colors duration-150 hover:border-red-500/40"
          >
            <div className="w-9 h-9 rounded-lg bg-red-500/10 flex items-center justify-center shrink-0 text-lg">
              {contact.icon}
            </div>
            <div>
              <p className="text-white/40 text-xs mb-0.5">{contact.label}</p>
              <p className="text-white text-sm font-medium">{contact.value}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
