"use client"

import { useEffect, useRef } from "react"

const PARTICLE_COUNT_DEFAULT = 160
const PARTICLE_COUNT_DESKTOP = 320
const DESKTOP_BREAKPOINT = 1024
const MAX_LINE_DISTANCE = 140
const MOUSE_RADIUS = 120

const COLOR_CYCLE = [
  [59, 130, 246], // bleu
  [255, 255, 255], // blanc
  [239, 68, 68], // rouge
]
const COLOR_CYCLE_DURATION = 12000

const lerp = (a, b, t) => a + (b - a) * t

const getCycleColor = (elapsed) => {
  const segmentDuration = COLOR_CYCLE_DURATION / COLOR_CYCLE.length
  const t = (elapsed % COLOR_CYCLE_DURATION) / segmentDuration
  const index = Math.floor(t)
  const localT = t - index
  const [r1, g1, b1] = COLOR_CYCLE[index]
  const [r2, g2, b2] = COLOR_CYCLE[(index + 1) % COLOR_CYCLE.length]
  return [lerp(r1, r2, localT), lerp(g1, g2, localT), lerp(b1, b2, localT)]
}

export const ParticleBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const container = canvas.parentElement
    const ctx = canvas.getContext("2d")
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    let width = container.clientWidth
    let height = container.clientHeight
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
    const startTime = performance.now()

    const resize = () => {
      width = container.clientWidth
      height = container.clientHeight
      canvas.width = width
      canvas.height = height

      const targetCount = getParticleCount()
      if (targetCount !== particles.length) {
        particles = Array.from({ length: targetCount }, makeParticle)
      }
    }
    resize()

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const handleMouseLeave = () => {
      mouse.x = -9999
      mouse.y = -9999
    }

    const drawFrame = ({ interactive }) => {
      ctx.clearRect(0, 0, width, height)

      const [cr, cg, cb] = getCycleColor(performance.now() - startTime)

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
        ctx.fillStyle = `rgba(${cr}, ${cg}, ${cb}, 0.45)`
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
            ctx.strokeStyle = `rgba(${cr}, ${cg}, ${cb}, ${0.12 * (1 - dist / MAX_LINE_DISTANCE)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        }
      }
    }

    const resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(container)

    if (prefersReducedMotion) {
      drawFrame({ interactive: false })
      return () => resizeObserver.disconnect()
    }

    const animate = () => {
      drawFrame({ interactive: true })
      animationId = requestAnimationFrame(animate)
    }
    animate()

    container.addEventListener("mousemove", handleMouseMove)
    container.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      container.removeEventListener("mousemove", handleMouseMove)
      container.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  )
}
