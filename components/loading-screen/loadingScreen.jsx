"use client"

import { useEffect, useState } from "react"

const DURATION_MS = 1800
const FADE_MS = 400

export const LoadingScreen = () => {
  const [fadingOut, setFadingOut] = useState(false)
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const duration = prefersReducedMotion ? 300 : DURATION_MS

    const timeoutId = setTimeout(() => {
      setFadingOut(true)
      setTimeout(() => setVisible(false), FADE_MS)
    }, duration)

    return () => clearTimeout(timeoutId)
  }, [])

  if (!visible) return null

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center gap-4 bg-black transition-opacity duration-[400ms] ${fadingOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
      aria-hidden="true"
    >
      <span className="font-[family-name:--font-monogram] italic font-bold text-6xl sm:text-8xl text-white tracking-tight animate-[monogram-in_0.7s_ease-out]">
        S<span className="text-accent">K</span>
      </span>
    </div>
  )
}
