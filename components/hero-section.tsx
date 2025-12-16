"use client"

import type React from "react"
import { Sparkles, Zap, Shield, Globe } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

export function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8">
            <Sparkles className="h-4 w-4" />
            <span>{t.hero.badge}</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance">
            <span className="glow-text text-primary">{t.hero.title}</span>
            <br />
            <span className="text-foreground">{t.hero.subtitle}</span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground text-pretty leading-relaxed">
            {t.hero.description}
          </p>

          {/* Stats */}
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8 max-w-3xl mx-auto">
            <StatCard icon={Zap} value="<50ms" label={t.hero.stats.response} />
            <StatCard icon={Globe} value="330+" label={t.hero.stats.nodes} />
            <StatCard icon={Shield} value="Enterprise" label={t.hero.stats.security} />
            <StatCard icon={Sparkles} value="40+" label={t.hero.stats.platforms} />
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({
  icon: Icon,
  value,
  label,
}: {
  icon: React.ElementType
  value: string
  label: string
}) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-xl border border-border/50 bg-card/50 p-4 backdrop-blur-sm">
      <Icon className="h-5 w-5 text-primary" />
      <div className="text-2xl font-bold text-foreground">{value}</div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </div>
  )
}
