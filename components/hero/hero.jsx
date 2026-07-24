"use client"

import { useEffect, useRef, useState } from "react"
import { ParticleBackground } from "../particle-background/particleBackground"
import { useLanguage } from "../language/LanguageProvider"
import { Button } from "../ui/button"

// Gère l'effet de frappe au clavier à l'apparition du site
const BASE_DELAY_MS = 75
const JITTER_MS = 70
const PAUSE_CHARS = new Set([" ", ",", "."])
const PAUSE_EXTRA_MS = 180
// -----------------------------------------

// Attend que l'écran de chargement ait disparu (voir DURATION_MS + FADE_MS dans loadingScreen.jsx)
const START_DELAY_MS = 2300

export const Hero = () => {
  const { t } = useLanguage()
  const [typed, setTyped] = useState("")
  const [showIntro, setShowIntro] = useState(false)
  const hasTypedOnce = useRef(false)

  useEffect(() => {
    const title = t.hero.title
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (prefersReducedMotion) {
      setTyped(title)
      setShowIntro(true)
      hasTypedOnce.current = true
      return
    }

    const pausePositions = [...title].reduce((positions, char, i) => {
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
      setTyped(title.slice(0, index))
      if (index >= title.length) {
        setShowIntro(true)
        return
      }

      const hesitation = index - 1 === hesitationIndex ? PAUSE_EXTRA_MS : 0
      const delay = BASE_DELAY_MS + Math.random() * JITTER_MS + hesitation
      timeoutId = setTimeout(typeNext, delay)
    }

    setTyped("")
    setShowIntro(false)
    const startTimeout = setTimeout(() => {
      hasTypedOnce.current = true
      typeNext()
    }, hasTypedOnce.current ? 0 : START_DELAY_MS)

    return () => {
      clearTimeout(startTimeout)
      clearTimeout(timeoutId)
    }
  }, [t.hero.title])

  return (
    <section id="accueil" className="relative overflow-hidden min-h-[90vh] flex flex-col justify-center lg:items-center px-5 py-20 sm:px-10 sm:py-32">
      <ParticleBackground />
      <p className="relative z-10 font-mono text-xs sm:text-sm uppercase tracking-[0.2em] text-accent mb-4 lg:text-center">
        {t.hero.eyebrow}
      </p>
      <h1 className="relative z-10 font-[family-name:--font-monogram] italic font-bold text-4xl sm:text-6xl text-white leading-tight mb-6 max-w-2xl min-h-[2.4em] sm:min-h-[1.2em] lg:text-center">
        {typed}
        <span className="inline-block w-[3px] h-[0.9em] bg-accent ml-1 align-middle animate-[blink_1s_step-end_infinite]" />
      </h1>
      <p
        className={`relative z-10 text-white/60 text-base sm:text-lg max-w-xl mb-8 leading-relaxed transition-all duration-700 motion-reduce:transition-none lg:text-center ${
          showIntro ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
        }`}
      >
        {t.hero.intro}
      </p>
      <div className="relative z-10 flex flex-wrap gap-4 lg:justify-center">
        <Button href="#projets">{t.hero.ctaProjects}</Button>
        <Button href="#contact" variant="secondary">
          {t.hero.ctaContact}
        </Button>
      </div>
    </section>
  )
}
