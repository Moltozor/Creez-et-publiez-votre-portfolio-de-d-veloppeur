"use client"

import { useState } from "react"

const LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#a-propos", label: "À propos" },
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
]

export const Nav = () => {
  const [open, setOpen] = useState(false)

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-10">
        <a
          href="#accueil"
          onClick={closeMenu}
          className="font-[family-name:--font-monogram] italic font-bold text-xl text-white no-underline"
        >
          S<span className="text-red-500">K</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
          className="sm:hidden flex flex-col gap-1.5 w-6 cursor-pointer"
        >
          <span className={`h-px w-full bg-white transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-full bg-white transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-full bg-white transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <ul className="hidden sm:flex gap-8 list-none">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-white/70 no-underline transition-colors duration-150 hover:text-red-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-5 pb-5 list-none">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block py-2 text-base text-white/80 no-underline transition-colors duration-150 hover:text-red-500"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
