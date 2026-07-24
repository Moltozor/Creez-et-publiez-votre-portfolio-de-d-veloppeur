"use client"

import { useState } from "react"
import { useLanguage } from "../language/LanguageProvider"

const LINK_KEYS = ["accueil", "a-propos", "projets", "competences", "parcours", "contact"]

const LanguageSwitch = ({ className = "" }) => {
  const { language, setLanguage } = useLanguage()

  return (
    <div className={`flex items-center gap-1 font-mono text-xs ${className}`}>
      <button
        type="button"
        onClick={() => setLanguage("fr")}
        aria-pressed={language === "fr"}
        className={`px-1.5 py-0.5 rounded-sm transition-colors duration-150 cursor-pointer ${
          language === "fr" ? "text-accent" : "text-white/40 hover:text-white/70"
        }`}
      >
        FR
      </button>
      <span className="text-white/20">/</span>
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`px-1.5 py-0.5 rounded-sm transition-colors duration-150 cursor-pointer ${
          language === "en" ? "text-accent" : "text-white/40 hover:text-white/70"
        }`}
      >
        EN
      </button>
    </div>
  )
}

export const Nav = () => {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-40 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="flex items-center justify-between px-5 py-4 sm:px-10">
        <a
          href="#accueil"
          onClick={closeMenu}
          className="font-[family-name:--font-monogram] italic font-bold text-xl text-white no-underline"
        >
          S<span className="text-accent">K</span>
        </a>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-expanded={open}
          aria-label={t.nav.openMenu}
          className="sm:hidden flex flex-col gap-1.5 w-6 cursor-pointer"
        >
          <span className={`h-px w-full bg-white transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-px w-full bg-white transition-opacity duration-200 ${open ? "opacity-0" : "opacity-100"}`} />
          <span className={`h-px w-full bg-white transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>

        <div className="hidden sm:flex items-center gap-8">
          <ul className="flex gap-8 list-none">
            {LINK_KEYS.map((key) => (
              <li key={key}>
                <a
                  href={`#${key}`}
                  className="text-sm text-white/70 no-underline transition-colors duration-150 hover:text-accent"
                >
                  {t.nav.links[key]}
                </a>
              </li>
            ))}
          </ul>
          <LanguageSwitch />
        </div>
      </nav>

      {open && (
        <ul className="sm:hidden flex flex-col gap-1 px-5 pb-5 list-none">
          {LINK_KEYS.map((key) => (
            <li key={key}>
              <a
                href={`#${key}`}
                onClick={closeMenu}
                className="block py-2 text-base text-white/80 no-underline transition-colors duration-150 hover:text-accent"
              >
                {t.nav.links[key]}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <LanguageSwitch />
          </li>
        </ul>
      )}
    </header>
  )
}
