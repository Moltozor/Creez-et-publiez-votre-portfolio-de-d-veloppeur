const TIMELINE = [
  { year: "2025 — 2026", title: "Formation intégrateur web", org: "Openclassrooms" },
]

export const Timeline = () => {
  return (
    <section id="parcours" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">// parcours</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Mon parcours</h2>
      <div className="flex flex-col gap-3">
        {TIMELINE.map((entry) => (
          <div key={entry.title} className="bg-white/5 border border-white/10 border-l-2 border-l-red-500 rounded-lg p-5 flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6">
            <span className="font-mono text-xs text-red-400 shrink-0 sm:w-[120px]">{entry.year}</span>
            <div>
              <p className="text-white font-medium">{entry.title}</p>
              <p className="text-white/50 text-sm">{entry.org}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
