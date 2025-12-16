"use client"

import { Zap, Shield, Globe, Code, Package, Server } from "lucide-react"
import { useI18n } from "@/lib/i18n/context"

const featureIcons = [Zap, Globe, Shield, Code, Package, Server]

export function FeaturesSection() {
  const { t } = useI18n()

  return (
    <section className="py-20 border-t border-border/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight">{t.features.title}</h2>
          <p className="mt-3 text-muted-foreground">{t.features.subtitle}</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.features.items.map((feature, index) => {
            const Icon = featureIcons[index]
            return (
              <div
                key={feature.title}
                className="group rounded-xl border border-border/50 bg-card/30 p-6 backdrop-blur-sm transition-all hover:border-primary/30 hover:bg-card/50"
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
