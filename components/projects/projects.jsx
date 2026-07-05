const PROJECTS = [
  {
    icon: "📊",
    name: "Dashboard SaaS",
    description: "Interface analytics temps réel avec visualisations interactives.",
    tags: ["React", "D3", "Node"],
  },
  {
    icon: "⚡",
    name: "API REST",
    description: "Backend scalable avec auth JWT et rate limiting intégré.",
    tags: ["Express", "Postgres"],
  },
  {
    icon: "📱",
    name: "App mobile",
    description: "Application cross-platform publiée sur iOS et Android.",
    tags: ["React Native", "TS"],
  },
]

export const Projects = () => {
  return (
    <section id="projets" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">// réalisations</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Projets récents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <div key={project.name} className="bg-white/5 border border-white/10 border-l-2 border-l-red-500 rounded-lg p-5">
            <div className="w-9 h-9 rounded-md bg-red-500/10 flex items-center justify-center mb-4 text-lg">
              {project.icon}
            </div>
            <p className="text-white font-medium mb-2">{project.name}</p>
            <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded-sm bg-red-500/10 text-red-400">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
