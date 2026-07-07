import Image from "next/image"

const PROJECTS = [
  {
    image: "/projects/dashboard-saas.png",
    name: "Ohmyfood",
    description: "Conception mobile-first et responsive design, UX.",
    tags: ["Html", "Css"],
  },
  {
    image: "/projects/nicholas-green.png",
    name: "Photographe Nina Carducci",
    description: "Optimisations, SEO, recommandations.",
    tags: ["Microdata", "Rich snippet"],
  },
  {
    image: "/projects/accommodation.jpg",
    name: "Kasa",
    description: "Intégration du design",
    tags: ["React", "Sass"],
  },
]

export const Projects = () => {
  return (
    <section id="projets" className="px-5 py-16 sm:px-10 sm:py-24 border-t border-white/10">
      <p className="font-mono text-xs uppercase tracking-[0.2em] text-red-500 mb-3">// réalisations</p>
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">Projets récents</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {PROJECTS.map((project) => (
          <div
            key={project.name}
            className="group relative overflow-hidden min-h-[260px] flex flex-col justify-end border border-white/10 border-l-2 border-l-red-500 rounded-lg p-5 transition-colors duration-300 hover:border-white/20"
          >
            <Image
              src={project.image}
              alt={project.name}
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover -z-20 transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/5 transition-opacity duration-300 group-hover:opacity-40" />
            <div className="absolute inset-x-0 bottom-0 h-2/3 -z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
            <p className="relative text-white font-medium mb-2 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{project.name}</p>
            <p className="relative text-white/90 text-sm leading-relaxed mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{project.description}</p>
            <div className="relative flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <span key={tag} className="font-mono text-[11px] px-2 py-0.5 rounded-sm bg-black/50 text-red-300">
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
