"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { useLanguage } from "../language/LanguageProvider"
import { Section, SectionHeading } from "../ui/section"
import { Badge } from "../ui/badge"

const PROJECTS = [
  {
    key: "ohmyfood",
    image: "/projects/dashboard-saas.png",
    tags: ["Html", "Css"],
    repo: "https://github.com/Moltozor/ohmyFood",
  },
  {
    key: "nina-carducci",
    image: "/projects/nicholas-green.png",
    tags: ["Microdata", "Rich snippet"],
    repo: "https://github.com/Moltozor/Optimisez-le-referencement-d-un-site-de-photographe",
  },
  {
    key: "kasa",
    image: "/projects/accommodation.jpg",
    tags: ["React", "Sass"],
    repo: "https://github.com/Moltozor/Creez-une-application-web-de-location-immobiliere-avec-React",
  },
]

const MAX_TILT_DEG = 12

const RepoIcon = ({ className }) => (
  <svg viewBox="0 0 16 16" fill="currentColor" className={className}>
    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8Z" />
  </svg>
)

const RepoLink = ({ href, name, repoLabel, className }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={`${name} - ${repoLabel}`}
    onClick={(e) => e.stopPropagation()}
    className={`shrink-0 text-white/80 transition-colors duration-150 hover:text-accent-soft ${className}`}
  >
    <RepoIcon className="w-5 h-5" />
  </a>
)

const ProjectCard = ({ project, name, description, repoLabel, onOpen }) => {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width
    const py = (e.clientY - rect.top) / rect.height
    const rotateY = (px - 0.5) * MAX_TILT_DEG
    const rotateX = (0.5 - py) * MAX_TILT_DEG
    card.style.transition = "transform 0.05s linear"
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`
  }

  const handleMouseLeave = () => {
    const card = cardRef.current
    if (!card) return
    card.style.transition = "transform 0.4s ease"
    card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)"
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onOpen}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          onOpen()
        }
      }}
      role="button"
      tabIndex={0}
      style={{ transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden min-h-[260px] flex flex-col justify-end border border-white/10 border-l-2 border-l-accent rounded-lg p-5 cursor-pointer will-change-transform transition-colors duration-300 hover:border-white/20"
    >
      <Image
        src={project.image}
        alt={name}
        fill
        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        className="object-cover -z-20 transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/40 to-black/5 transition-opacity duration-300 group-hover:opacity-40" />
      <div className="absolute inset-x-0 bottom-0 h-2/3 -z-10 bg-gradient-to-t from-black/95 via-black/60 to-transparent transition-opacity duration-300 group-hover:opacity-90" />
      <div className="relative flex items-center justify-between gap-2 mb-2">
        <p className="text-white font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{name}</p>
        <RepoLink href={project.repo} name={name} repoLabel={repoLabel} />
      </div>
      <p className="relative text-white/90 text-sm leading-relaxed mb-4 drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">{description}</p>
      <div className="relative flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <Badge key={tag} variant="overlay">
            {tag}
          </Badge>
        ))}
      </div>
    </div>
  )
}

const ProjectModal = ({ project, name, description, repoLabel, closeLabel, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose()
    }
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      document.body.style.overflow = ""
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={name}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-3xl overflow-hidden rounded-lg border border-white/10 border-l-2 border-l-accent bg-black"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={closeLabel}
          className="absolute top-3 right-3 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/80 transition-colors duration-150 hover:text-accent-soft"
        >
          ✕
        </button>
        <div className="relative h-80 w-full">
          <Image src={project.image} alt={name} fill sizes="(min-width: 640px) 48rem, 100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        </div>
        <div className="p-5">
          <div className="flex items-center justify-between gap-2 mb-2">
            <p className="text-white font-medium">{name}</p>
            <RepoLink href={project.repo} name={name} repoLabel={repoLabel} />
          </div>
          <p className="text-white/90 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="overlay">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export const Projects = () => {
  const { t } = useLanguage()
  const [selectedKey, setSelectedKey] = useState(null)

  const selectedProject = PROJECTS.find((project) => project.key === selectedKey) ?? null

  return (
    <Section id="projets">
      <SectionHeading eyebrow={t.projects.eyebrow} heading={t.projects.heading} />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" style={{ perspective: "1200px" }}>
        {PROJECTS.map((project) => {
          const { name, description } = t.projects.items[project.key]
          return (
            <ProjectCard
              key={project.key}
              project={project}
              name={name}
              description={description}
              repoLabel={t.projects.repoLabel}
              onOpen={() => setSelectedKey(project.key)}
            />
          )
        })}
      </div>
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          name={t.projects.items[selectedProject.key].name}
          description={t.projects.items[selectedProject.key].description}
          repoLabel={t.projects.repoLabel}
          closeLabel={t.projects.closeLabel}
          onClose={() => setSelectedKey(null)}
        />
      )}
    </Section>
  )
}
