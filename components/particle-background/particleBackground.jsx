"use client"

import { useEffect, useRef } from "react"

const PARTICLE_COUNT_DEFAULT = 160
const PARTICLE_COUNT_DESKTOP = 320
const DESKTOP_BREAKPOINT = 1024
const MAX_LINE_DISTANCE = 140
const MOUSE_RADIUS = 120

export const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = window.innerWidth
    let height = window.innerHeight
    let animationId
    const mouse = { x: -9999, y: -9999 }

    const getParticleCount = () =>
      width >= DESKTOP_BREAKPOINT ? PARTICLE_COUNT_DESKTOP : PARTICLE_COUNT_DEFAULT

    const makeParticle = () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 1.2,
      vy: (Math.random() - 0.5) * 1.2,
      radius: Math.random() * 1.5 + 1,
    })

    let particles = Array.from({ length: getParticleCount() }, makeParticle)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width
      canvas.height = height

      const targetCount = getParticleCount()
      if (targetCount !== particles.length) {
        particles = Array.from({ length: targetCount }, makeParticle)
      }
    }
    resize()

    const handleMouseMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }
    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const drawFrame = ({ interactive }) => {
      ctx.clearRect(0, 0, width, height)

      for (const p of particles) {
        if (interactive) {
          p.x += p.vx
          p.y += p.vy

          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.hypot(dx, dy)
          if (dist < MOUSE_RADIUS && dist > 0) {
            const force = (MOUSE_RADIUS - dist) / MOUSE_RADIUS
            p.x += (dx / dist) * force * 25
            p.y += (dy / dist) * force * 25
          }

          if (p.x < 0 || p.x > width) p.vx *= -1
          if (p.y < 0 || p.y > height) p.vy *= -1
          p.x = Math.max(0, Math.min(width, p.x))
          p.y = Math.max(0, Math.min(height, p.y))
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = "rgba(255, 255, 255, 0.45)"
        ctx.fill()
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i]
          const b = particles[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < MAX_LINE_DISTANCE) {
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.12 * (1 - dist / MAX_LINE_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    if (prefersReducedMotion) {
      drawFrame({ interactive: false })
      window.addEventListener("resize", resize)
      return () => window.removeEventListener("resize", resize)
    }

    const animate = () => {
      drawFrame({ interactive: true })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    window.addEventListener("resize", resize)
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}
