"use client"

import { createContext, useContext, useEffect, useState } from "react"
import { TRANSLATIONS } from "./translations"

const STORAGE_KEY = "portfolio-lang"
const DEFAULT_LANGUAGE = "fr"

const LanguageContext = createContext(null)

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(DEFAULT_LANGUAGE)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === "fr" || stored === "en") {
      setLanguage(stored)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    window.localStorage.setItem(STORAGE_KEY, language)
  }, [language])

  const t = TRANSLATIONS[language]

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
