"use client"

import { Zap, Github, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useI18n } from "@/lib/i18n/context"

export function Footer() {
  const { t } = useI18n()

  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <span className="text-lg font-bold tracking-tight">
                Xget<span className="text-primary">UI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground text-center md:text-left">{t.footer.description}</p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {t.footer.docs}
            </Link>
            <a
              href="https://github.com/xixu-me/Xget"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://xget.xi-xu.me"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              {t.footer.officialInstance}
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Xget. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
