"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { translations, type Locale, type Translations } from "./translations"

interface I18nContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const I18nContext = createContext<I18nContextType | null>(null)

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return "en"

  const browserLang = navigator.language || navigator.languages?.[0] || "en"

  // Check if browser language starts with 'zh' (Chinese)
  if (browserLang.toLowerCase().startsWith("zh")) {
    return "zh"
  }

  return "en"
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detect browser language on mount
    const detectedLocale = detectBrowserLocale()

    // Check localStorage for saved preference
    const savedLocale = localStorage.getItem("xget-locale") as Locale | null

    if (savedLocale && (savedLocale === "en" || savedLocale === "zh")) {
      setLocale(savedLocale)
    } else {
      setLocale(detectedLocale)
    }

    setMounted(true)
  }, [])

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale)
    localStorage.setItem("xget-locale", newLocale)
  }

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <I18nContext.Provider value={{ locale: "en", setLocale: handleSetLocale, t: translations.en }}>
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={{ locale, setLocale: handleSetLocale, t: translations[locale] }}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider")
  }
  return context
}
