"use client"

import { useEffect, useState } from "react"
import { ParticleBackground } from "../particle-background/particleBackground"

const TITLE = "Des sites qui parlent avant les mots."
const BASE_DELAY_MS = 75
const JITTER_MS = 70
const PAUSE_CHARS = new Set([" ", ",", "."])
const PAUSE_EXTRA_MS = 180
// Attend que l'écran de chargement ait disparu (voir DURATION_MS + FADE_MS dans loadingScreen.jsx)
const START_DELAY_MS = 2300

export const Hero = () => {
  const [typed, setTyped] = useState("")
  const [showIntro, setShowIntro] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setTyped(TITLE)
      setShowIntro(true)
      return
    }

    const pausePositions = [...TITLE].reduce((positions, char, i) => {
      if (PAUSE_CHARS.has(char)) positions.push(i)
      return positions
    }, [])
    const hesitationIndex = pausePositions.length
      ? pausePositions[Math.floor(Math.random() * pausePositions.length)]
      : -1

    let index = 0
    let timeoutId

    const typeNext = () => {
      index += 1
      setTyped(TITLE.slice(0, index))
      if (index >= TITLE.length) {
        setShowIntro(true)
        return
      }

      const hesitation = index - 1 === hesitationIndex ? PAUSE_EXTRA_MS : 0
      const delay = BASE_DELAY_MS + Math.random() * JITTER_MS + hesitation
      timeoutId = setTimeout(typeNext, delay)
    }

    const startTimeout = setTimeout(typeNext, START_DELAY_MS)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <section id="accueil" className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center px-5 py-20 sm:px-10 sm:py-32">
      <ParticleBackground />
      <p className="relative z-10 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-red-500 mb-4">
        {/* Placeholder : titre à personnaliser */}
        // développeur frontend
      </p>
      <h1 className="relative z-10 font-[family-name:--font-monogram] italic font-bold text-4xl sm:text-6xl text-white leading-tight mb-6 max-w-2xl min-h-[2.4em] sm:min-h-[1.2em]">
        {typed}
        <span className="inline-block w-[3px] h-[0.9em] bg-red-500 ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
      </h1>
      <p
        className={`relative z-10 text-white/60 text-base sm:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 motion-reduce:transition-none ${
          showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {/* Placeholder : présentation courte à remplacer */}
        Le web est ma toile, le code mon pinceau, l'expérience utilisateur ma signature.
      </p>
      <div className="relative z-10 flex flex-wrap gap-4">
        <a
          href="#projets"
          className="inline-block px-6 py-3 rounded-md bg-red-500 text-white text-sm font-medium no-underline transition-colors duration-150 hover:bg-red-600"
        >
          Voir mes projets
        </a>
        <a
          href="#contact"
          className="inline-block px-6 py-3 rounded-md border border-white/20 text-white text-sm font-medium no-underline transition-colors duration-150 hover:border-red-500"
        >
          Me contacter
        </a>
      </div>
    </section>
  )
}
