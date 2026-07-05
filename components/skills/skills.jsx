const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Tailwind CSS"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL"] },
  { category: "Outils", items: ["Docker", "Git", "CI/CD"] },
]

export const Skills = () => {
  return (
    <section id="competences" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">// compétences</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Ce que je maîtrise</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {SKILLS.map((group) => (
          <div key={group.category} className="bg-white/5 border border-white/10 rounded-lg p-5">
            <p className="text-white font-medium mb-3">{group.category}</p>
            <div className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span key={item} className="font-mono text-xs px-3 py-1 rounded-full bg-red-500/10 text-red-400 border border-red-500/20">
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
