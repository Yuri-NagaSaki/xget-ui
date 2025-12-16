"use client"

import { useState, useCallback } from "react"
import { Copy, Check, ArrowRight, Zap, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useI18n } from "@/lib/i18n/context"

// Platform configuration
const PLATFORMS = [
  { prefix: "gh", domain: "github.com", name: "GitHub" },
  { prefix: "gist", domain: "gist.github.com", name: "GitHub Gist" },
  { prefix: "gl", domain: "gitlab.com", name: "GitLab" },
  { prefix: "gitea", domain: "gitea.com", name: "Gitea" },
  { prefix: "codeberg", domain: "codeberg.org", name: "Codeberg" },
  { prefix: "sf", domain: "sourceforge.net", name: "SourceForge" },
  { prefix: "aosp", domain: "android.googlesource.com", name: "AOSP" },
  { prefix: "hf", domain: "huggingface.co", name: "Hugging Face" },
  { prefix: "civitai", domain: "civitai.com", name: "Civitai" },
  { prefix: "npm", domain: "registry.npmjs.org", name: "npm" },
  { prefix: "pypi", domain: "pypi.org", name: "PyPI" },
  { prefix: "maven", domain: "repo1.maven.org", name: "Maven" },
  { prefix: "gradle", domain: "plugins.gradle.org", name: "Gradle" },
  { prefix: "rubygems", domain: "rubygems.org", name: "RubyGems" },
  { prefix: "cran", domain: "cran.r-project.org", name: "CRAN" },
  { prefix: "golang", domain: "proxy.golang.org", name: "Go Modules" },
  { prefix: "nuget", domain: "api.nuget.org", name: "NuGet" },
  { prefix: "crates", domain: "crates.io", name: "Rust Crates" },
  { prefix: "packagist", domain: "repo.packagist.org", name: "Packagist" },
  { prefix: "debian", domain: "deb.debian.org", name: "Debian" },
  { prefix: "ubuntu", domain: "archive.ubuntu.com", name: "Ubuntu" },
  { prefix: "fedora", domain: "dl.fedoraproject.org", name: "Fedora" },
  { prefix: "arch", domain: "geo.mirror.pkgbuild.com", name: "Arch Linux" },
  { prefix: "arxiv", domain: "arxiv.org", name: "arXiv" },
  { prefix: "fdroid", domain: "f-droid.org", name: "F-Droid" },
  { prefix: "jenkins", domain: "updates.jenkins.io", name: "Jenkins" },
]

// Default Xget instance
const DEFAULT_XGET_HOST = "xget.xi-xu.me"

export function UrlConverter() {
  const { t } = useI18n()
  const [xgetHost, setXgetHost] = useState(DEFAULT_XGET_HOST)
  const [inputUrl, setInputUrl] = useState("")
  const [outputUrl, setOutputUrl] = useState("")
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState("")
  const [detectedPlatform, setDetectedPlatform] = useState<string | null>(null)

  const convertUrl = useCallback(() => {
    setError("")
    setOutputUrl("")
    setDetectedPlatform(null)

    if (!inputUrl.trim()) {
      setError(t.converter.errorEmpty)
      return
    }

    try {
      const url = new URL(inputUrl.trim())
      const hostname = url.hostname.toLowerCase()

      // Find matching platform
      const platform = PLATFORMS.find((p) => hostname.includes(p.domain))

      if (!platform) {
        setError(t.converter.errorUnsupported)
        return
      }

      setDetectedPlatform(platform.name)

      // Build accelerated URL
      const path = url.pathname + url.search + url.hash
      const acceleratedUrl = `https://${xgetHost}/${platform.prefix}${path}`

      setOutputUrl(acceleratedUrl)
    } catch {
      setError(t.converter.errorInvalid)
    }
  }, [inputUrl, xgetHost, t])

  const copyToClipboard = useCallback(async () => {
    if (!outputUrl) return

    try {
      await navigator.clipboard.writeText(outputUrl)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      console.error("Copy failed")
    }
  }, [outputUrl])

  return (
    <section id="converter" className="relative py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <Zap className="inline-block h-8 w-8 text-primary mr-2 -mt-1" />
            {t.converter.title}
          </h2>
          <p className="mt-3 text-muted-foreground">{t.converter.subtitle}</p>
        </div>

        {/* Converter Card */}
        <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-6 sm:p-8 glow">
          {/* Xget Host Setting */}
          <div className="mb-6">
            <Label htmlFor="xget-host" className="text-sm font-medium text-muted-foreground">
              {t.converter.xgetHost}
            </Label>
            <Input
              id="xget-host"
              value={xgetHost}
              onChange={(e) => setXgetHost(e.target.value)}
              placeholder={t.converter.xgetHostPlaceholder}
              className="mt-2 bg-background/50 border-border/50 font-mono text-sm"
            />
            <p className="mt-1.5 text-xs text-muted-foreground">{t.converter.xgetHostHint}</p>
          </div>

          {/* Input URL */}
          <div className="mb-6">
            <Label htmlFor="input-url" className="text-sm font-medium text-foreground">
              {t.converter.originalUrl}
            </Label>
            <Input
              id="input-url"
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              placeholder={t.converter.originalUrlPlaceholder}
              className="mt-2 bg-background/50 border-border/50 font-mono text-sm"
              onKeyDown={(e) => e.key === "Enter" && convertUrl()}
            />
          </div>

          {/* Convert Button */}
          <Button
            onClick={convertUrl}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-12"
          >
            <span>{t.converter.generateBtn}</span>
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>

          {/* Error Message */}
          {error && (
            <div className="mt-4 rounded-lg bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm text-destructive">
              {error}
            </div>
          )}

          {/* Output URL */}
          {outputUrl && (
            <div className="mt-6 space-y-3">
              {detectedPlatform && (
                <div className="flex items-center gap-2 text-sm text-primary">
                  <Check className="h-4 w-4" />
                  <span>
                    {t.converter.detectedPlatform}: {detectedPlatform}
                  </span>
                </div>
              )}

              <div className="rounded-xl bg-background/80 border border-primary/20 p-4">
                <Label className="text-sm font-medium text-muted-foreground mb-2 block">
                  {t.converter.acceleratedUrl}
                </Label>
                <div className="flex items-center gap-2">
                  <code className="flex-1 break-all text-sm font-mono text-primary">{outputUrl}</code>
                  <div className="flex gap-1 shrink-0">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={copyToClipboard}
                      className="h-8 w-8 hover:bg-primary/10"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-primary" />
                      ) : (
                        <Copy className="h-4 w-4 text-muted-foreground" />
                      )}
                    </Button>
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 hover:bg-primary/10">
                      <a href={outputUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 text-muted-foreground" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Examples */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-3">{t.converter.quickTry}</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "https://github.com/microsoft/vscode/archive/refs/heads/main.zip",
              "https://huggingface.co/bert-base-uncased/resolve/main/pytorch_model.bin",
              "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
            ].map((example) => (
              <button
                key={example}
                onClick={() => setInputUrl(example)}
                className="text-xs px-3 py-1.5 rounded-full bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors truncate max-w-[200px] sm:max-w-none"
              >
                {new URL(example).hostname}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
