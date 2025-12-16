"use client"

import { useI18n } from "@/lib/i18n/context"
import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"

export function LanguageSwitcher() {
  const { locale, setLocale } = useI18n()

  const toggleLocale = () => {
    setLocale(locale === "en" ? "zh" : "en")
  }

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="h-9 px-3 text-muted-foreground hover:text-foreground"
    >
      <Globe className="h-4 w-4 mr-1.5" />
      <span className="text-sm font-medium">{locale === "en" ? "中文" : "EN"}</span>
    </Button>
  )
}
