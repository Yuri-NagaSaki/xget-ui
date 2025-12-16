"use client"

import Link from "next/link"
import { Zap, Github, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useI18n } from "@/lib/i18n/context"

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { t } = useI18n()

  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Xget<span className="text-primary">UI</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.converter}
            </Link>
            <Link
              href="/docs"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.docs}
            </Link>
            <a
              href="https://github.com/xixu-me/Xget"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {t.header.github}
            </a>
          </nav>

          {/* CTA Button & Language Switcher */}
          <div className="hidden md:flex items-center gap-2">
            <LanguageSwitcher />
            <Button asChild variant="outline" size="sm">
              <a
                href="https://github.com/xixu-me/Xget"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                {t.header.starOnGithub}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-muted-foreground hover:text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border/50">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.converter}
              </Link>
              <Link
                href="/docs"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t.header.docs}
              </Link>
              <a
                href="https://github.com/xixu-me/Xget"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.header.github}
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
