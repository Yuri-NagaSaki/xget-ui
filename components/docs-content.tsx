"use client"

import { useState } from "react"
import {
  Copy,
  Check,
  ChevronDown,
  ChevronRight,
  BookOpen,
  Code,
  Terminal,
  Server,
  Package,
  Cloud,
  Container,
  Cpu,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useI18n } from "@/lib/i18n/context"

// Platform category data
const PLATFORM_CATEGORIES = [
  {
    id: "code-hosting",
    icon: Code,
    platforms: [
      {
        name: "GitHub",
        prefix: "gh",
        originalDomain: "github.com",
        exampleKey: "vscode",
        examples: [
          {
            original: "https://github.com/microsoft/vscode/archive/refs/heads/main.zip",
            accelerated: "https://xget.xi-xu.me/gh/microsoft/vscode/archive/refs/heads/main.zip",
          },
        ],
      },
      {
        name: "GitHub Gist",
        prefix: "gist",
        originalDomain: "gist.github.com",
        exampleKey: "gist",
        examples: [
          {
            original: "https://gist.github.com/user/gist-id/raw/file.md",
            accelerated: "https://xget.xi-xu.me/gist/user/gist-id/raw/file.md",
          },
        ],
      },
      {
        name: "GitLab",
        prefix: "gl",
        originalDomain: "gitlab.com",
        exampleKey: "gitlab",
        examples: [
          {
            original: "https://gitlab.com/gitlab-org/gitlab/-/archive/master/gitlab-master.zip",
            accelerated: "https://xget.xi-xu.me/gl/gitlab-org/gitlab/-/archive/master/gitlab-master.zip",
          },
        ],
      },
      {
        name: "Gitea",
        prefix: "gitea",
        originalDomain: "gitea.com",
        exampleKey: "gitea",
        examples: [
          {
            original: "https://gitea.com/gitea/gitea/archive/master.zip",
            accelerated: "https://xget.xi-xu.me/gitea/gitea/gitea/archive/master.zip",
          },
        ],
      },
      {
        name: "Codeberg",
        prefix: "codeberg",
        originalDomain: "codeberg.org",
        exampleKey: "forgejo",
        examples: [
          {
            original: "https://codeberg.org/forgejo/forgejo/archive/forgejo.zip",
            accelerated: "https://xget.xi-xu.me/codeberg/forgejo/forgejo/archive/forgejo.zip",
          },
        ],
      },
      {
        name: "SourceForge",
        prefix: "sf",
        originalDomain: "sourceforge.net",
        exampleKey: "sevenzip",
        examples: [
          {
            original: "https://sourceforge.net/projects/sevenzip/files/7-Zip/23.01/7z2301-x64.exe/download",
            accelerated: "https://xget.xi-xu.me/sf/projects/sevenzip/files/7-Zip/23.01/7z2301-x64.exe/download",
          },
        ],
      },
      {
        name: "AOSP",
        prefix: "aosp",
        originalDomain: "android.googlesource.com",
        exampleKey: "aosp",
        examples: [
          {
            original: "https://android.googlesource.com/platform/frameworks/base",
            accelerated: "https://xget.xi-xu.me/aosp/platform/frameworks/base",
          },
        ],
      },
    ],
  },
  {
    id: "ai-ml",
    icon: Cloud,
    platforms: [
      {
        name: "Hugging Face",
        prefix: "hf",
        originalDomain: "huggingface.co",
        exampleKey: "hfModel",
        examples: [
          {
            original: "https://huggingface.co/microsoft/DialoGPT-medium/resolve/main/pytorch_model.bin",
            accelerated: "https://xget.xi-xu.me/hf/microsoft/DialoGPT-medium/resolve/main/pytorch_model.bin",
          },
        ],
      },
      {
        name: "Civitai",
        prefix: "civitai",
        originalDomain: "civitai.com",
        exampleKey: "civitai",
        examples: [
          {
            original: "https://civitai.com/api/download/models/128713",
            accelerated: "https://xget.xi-xu.me/civitai/api/download/models/128713",
          },
        ],
      },
    ],
  },
  {
    id: "container-registries",
    icon: Container,
    platforms: [
      {
        name: "Docker Hub",
        prefix: "cr/docker",
        originalDomain: "registry-1.docker.io",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://registry-1.docker.io/v2/library/nginx/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/docker/v2/nginx/manifests/latest",
          },
        ],
      },
      {
        name: "GitHub Container Registry",
        prefix: "cr/ghcr",
        originalDomain: "ghcr.io",
        exampleKey: "ghcr",
        examples: [
          {
            original: "https://ghcr.io/v2/nginxinc/nginx-unprivileged/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/ghcr/v2/nginxinc/nginx-unprivileged/manifests/latest",
          },
        ],
      },
      {
        name: "Google Container Registry",
        prefix: "cr/gcr",
        originalDomain: "gcr.io",
        exampleKey: "gcr",
        examples: [
          {
            original: "https://gcr.io/v2/distroless/base/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/gcr/v2/distroless/base/manifests/latest",
          },
        ],
      },
      {
        name: "Quay.io",
        prefix: "cr/quay",
        originalDomain: "quay.io",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://quay.io/v2/coreos/etcd/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/quay/v2/coreos/etcd/manifests/latest",
          },
        ],
      },
      {
        name: "Microsoft Container Registry",
        prefix: "cr/mcr",
        originalDomain: "mcr.microsoft.com",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://mcr.microsoft.com/v2/dotnet/runtime/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/mcr/v2/dotnet/runtime/manifests/latest",
          },
        ],
      },
      {
        name: "Amazon Public ECR",
        prefix: "cr/ecr",
        originalDomain: "public.ecr.aws",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://public.ecr.aws/v2/amazonlinux/amazonlinux/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/ecr/v2/amazonlinux/amazonlinux/manifests/latest",
          },
        ],
      },
      {
        name: "GitLab Container Registry",
        prefix: "cr/gitlab",
        originalDomain: "registry.gitlab.com",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://registry.gitlab.com/v2/gitlab-org/gitlab-runner/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/gitlab/v2/gitlab-org/gitlab-runner/manifests/latest",
          },
        ],
      },
      {
        name: "Red Hat Registry",
        prefix: "cr/redhat",
        originalDomain: "registry.redhat.io",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://registry.redhat.io/v2/ubi8/ubi/manifests/latest",
            accelerated: "https://xget.xi-xu.me/cr/redhat/v2/ubi8/ubi/manifests/latest",
          },
        ],
      },
      {
        name: "Kubernetes Registry",
        prefix: "cr/k8s",
        originalDomain: "registry.k8s.io",
        exampleKey: "dockerHub",
        examples: [
          {
            original: "https://registry.k8s.io/v2/pause/manifests/3.9",
            accelerated: "https://xget.xi-xu.me/cr/k8s/v2/pause/manifests/3.9",
          },
        ],
      },
    ],
  },
  {
    id: "ai-inference",
    icon: Cpu,
    platforms: [
      {
        name: "OpenAI",
        prefix: "ip/openai",
        originalDomain: "api.openai.com",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.openai.com/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/openai/v1/chat/completions",
          },
        ],
      },
      {
        name: "Anthropic (Claude)",
        prefix: "ip/anthropic",
        originalDomain: "api.anthropic.com",
        exampleKey: "anthropic",
        examples: [
          {
            original: "https://api.anthropic.com/v1/messages",
            accelerated: "https://xget.xi-xu.me/ip/anthropic/v1/messages",
          },
        ],
      },
      {
        name: "Google Gemini",
        prefix: "ip/gemini",
        originalDomain: "generativelanguage.googleapis.com",
        exampleKey: "gemini",
        examples: [
          {
            original: "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent",
            accelerated: "https://xget.xi-xu.me/ip/gemini/v1beta/models/gemini-2.5-flash:generateContent",
          },
        ],
      },
      {
        name: "Vertex AI",
        prefix: "ip/vertexai",
        originalDomain: "aiplatform.googleapis.com",
        exampleKey: "openai",
        examples: [
          {
            original: "https://aiplatform.googleapis.com/v1/projects/.../locations/.../endpoints/...:predict",
            accelerated: "https://xget.xi-xu.me/ip/vertexai/v1/projects/.../locations/.../endpoints/...:predict",
          },
        ],
      },
      {
        name: "Cohere",
        prefix: "ip/cohere",
        originalDomain: "api.cohere.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.cohere.ai/v1/chat",
            accelerated: "https://xget.xi-xu.me/ip/cohere/v1/chat",
          },
        ],
      },
      {
        name: "Mistral AI",
        prefix: "ip/mistralai",
        originalDomain: "api.mistral.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.mistral.ai/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/mistralai/v1/chat/completions",
          },
        ],
      },
      {
        name: "xAI (Grok)",
        prefix: "ip/xai",
        originalDomain: "api.x.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.x.ai/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/xai/v1/chat/completions",
          },
        ],
      },
      {
        name: "Groq",
        prefix: "ip/groq",
        originalDomain: "api.groq.com",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.groq.com/openai/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/groq/openai/v1/chat/completions",
          },
        ],
      },
      {
        name: "Perplexity",
        prefix: "ip/perplexity",
        originalDomain: "api.perplexity.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.perplexity.ai/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/perplexity/chat/completions",
          },
        ],
      },
      {
        name: "Together AI",
        prefix: "ip/together",
        originalDomain: "api.together.xyz",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.together.xyz/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/together/v1/chat/completions",
          },
        ],
      },
      {
        name: "Replicate",
        prefix: "ip/replicate",
        originalDomain: "api.replicate.com",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.replicate.com/v1/predictions",
            accelerated: "https://xget.xi-xu.me/ip/replicate/v1/predictions",
          },
        ],
      },
      {
        name: "Fireworks AI",
        prefix: "ip/fireworks",
        originalDomain: "api.fireworks.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://api.fireworks.ai/inference/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/fireworks/inference/v1/chat/completions",
          },
        ],
      },
      {
        name: "HuggingFace Inference",
        prefix: "ip/huggingface",
        originalDomain: "router.huggingface.co",
        exampleKey: "openai",
        examples: [
          {
            original: "https://router.huggingface.co/hf-inference/models/openai/whisper-large-v3",
            accelerated: "https://xget.xi-xu.me/ip/huggingface/hf-inference/models/openai/whisper-large-v3",
          },
        ],
      },
      {
        name: "OpenRouter",
        prefix: "ip/openrouter",
        originalDomain: "openrouter.ai",
        exampleKey: "openai",
        examples: [
          {
            original: "https://openrouter.ai/api/v1/chat/completions",
            accelerated: "https://xget.xi-xu.me/ip/openrouter/api/v1/chat/completions",
          },
        ],
      },
      {
        name: "Fal AI",
        prefix: "ip/falai",
        originalDomain: "fal.run",
        exampleKey: "openai",
        examples: [
          {
            original: "https://fal.run/fal-ai/flux/schnell",
            accelerated: "https://xget.xi-xu.me/ip/falai/fal-ai/flux/schnell",
          },
        ],
      },
    ],
  },
  {
    id: "package-managers",
    icon: Package,
    platforms: [
      {
        name: "npm",
        prefix: "npm",
        originalDomain: "registry.npmjs.org",
        exampleKey: "npm",
        examples: [
          {
            original: "https://registry.npmjs.org/react/-/react-18.2.0.tgz",
            accelerated: "https://xget.xi-xu.me/npm/react/-/react-18.2.0.tgz",
          },
        ],
      },
      {
        name: "PyPI",
        prefix: "pypi",
        originalDomain: "pypi.org",
        exampleKey: "pypi",
        examples: [
          {
            original: "https://pypi.org/packages/source/r/requests/requests-2.31.0.tar.gz",
            accelerated: "https://xget.xi-xu.me/pypi/packages/source/r/requests/requests-2.31.0.tar.gz",
          },
        ],
      },
      {
        name: "Maven",
        prefix: "maven",
        originalDomain: "repo1.maven.org",
        exampleKey: "maven",
        examples: [
          {
            original: "https://repo1.maven.org/maven2/org/springframework/spring-core/5.3.21/spring-core-5.3.21.jar",
            accelerated:
              "https://xget.xi-xu.me/maven/maven2/org/springframework/spring-core/5.3.21/spring-core-5.3.21.jar",
          },
        ],
      },
      {
        name: "Go Modules",
        prefix: "golang",
        originalDomain: "proxy.golang.org",
        exampleKey: "golang",
        examples: [
          {
            original: "https://proxy.golang.org/github.com/gin-gonic/gin/@v/v1.9.1.zip",
            accelerated: "https://xget.xi-xu.me/golang/github.com/gin-gonic/gin/@v/v1.9.1.zip",
          },
        ],
      },
      {
        name: "Rust Crates",
        prefix: "crates",
        originalDomain: "crates.io",
        exampleKey: "crates",
        examples: [
          {
            original: "https://crates.io/api/v1/crates/serde/1.0.0/download",
            accelerated: "https://xget.xi-xu.me/crates/serde/1.0.0/download",
          },
        ],
      },
      {
        name: "RubyGems",
        prefix: "rubygems",
        originalDomain: "rubygems.org",
        exampleKey: "rubygems",
        examples: [
          {
            original: "https://rubygems.org/gems/rails-7.0.4.gem",
            accelerated: "https://xget.xi-xu.me/rubygems/gems/rails-7.0.4.gem",
          },
        ],
      },
      {
        name: "NuGet",
        prefix: "nuget",
        originalDomain: "api.nuget.org",
        exampleKey: "nuget",
        examples: [
          {
            original: "https://api.nuget.org/v3-flatcontainer/newtonsoft.json/13.0.3/newtonsoft.json.13.0.3.nupkg",
            accelerated:
              "https://xget.xi-xu.me/nuget/v3-flatcontainer/newtonsoft.json/13.0.3/newtonsoft.json.13.0.3.nupkg",
          },
        ],
      },
    ],
  },
  {
    id: "linux-distros",
    icon: Server,
    platforms: [
      {
        name: "Debian",
        prefix: "debian",
        originalDomain: "deb.debian.org",
        exampleKey: "debian",
        examples: [
          {
            original: "https://deb.debian.org/debian/pool/main/c/curl/curl_7.88.1-10+deb12u4_amd64.deb",
            accelerated: "https://xget.xi-xu.me/debian/debian/pool/main/c/curl/curl_7.88.1-10+deb12u4_amd64.deb",
          },
        ],
      },
      {
        name: "Ubuntu",
        prefix: "ubuntu",
        originalDomain: "archive.ubuntu.com",
        exampleKey: "ubuntu",
        examples: [
          {
            original: "https://archive.ubuntu.com/ubuntu/pool/main/g/git/git_2.34.1-1ubuntu1.9_amd64.deb",
            accelerated: "https://xget.xi-xu.me/ubuntu/ubuntu/pool/main/g/git/git_2.34.1-1ubuntu1.9_amd64.deb",
          },
        ],
      },
      {
        name: "Fedora",
        prefix: "fedora",
        originalDomain: "dl.fedoraproject.org",
        exampleKey: "fedora",
        examples: [
          {
            original:
              "https://dl.fedoraproject.org/pub/fedora/linux/releases/39/Everything/x86_64/os/Packages/n/nginx-1.24.0-1.fc39.x86_64.rpm",
            accelerated:
              "https://xget.xi-xu.me/fedora/pub/fedora/linux/releases/39/Everything/x86_64/os/Packages/n/nginx-1.24.0-1.fc39.x86_64.rpm",
          },
        ],
      },
      {
        name: "Arch Linux",
        prefix: "arch",
        originalDomain: "geo.mirror.pkgbuild.com",
        exampleKey: "arch",
        examples: [
          {
            original: "https://geo.mirror.pkgbuild.com/core/os/x86_64/linux-6.6.10.arch1-1-x86_64.pkg.tar.zst",
            accelerated: "https://xget.xi-xu.me/arch/core/os/x86_64/linux-6.6.10.arch1-1-x86_64.pkg.tar.zst",
          },
        ],
      },
    ],
  },
  {
    id: "other",
    icon: Terminal,
    platforms: [
      {
        name: "arXiv",
        prefix: "arxiv",
        originalDomain: "arxiv.org",
        exampleKey: "arxiv",
        examples: [
          {
            original: "https://arxiv.org/pdf/2301.07041.pdf",
            accelerated: "https://xget.xi-xu.me/arxiv/pdf/2301.07041.pdf",
          },
        ],
      },
      {
        name: "F-Droid",
        prefix: "fdroid",
        originalDomain: "f-droid.org",
        exampleKey: "fdroid",
        examples: [
          {
            original: "https://f-droid.org/repo/org.fdroid.fdroid_1016050.apk",
            accelerated: "https://xget.xi-xu.me/fdroid/repo/org.fdroid.fdroid_1016050.apk",
          },
        ],
      },
      {
        name: "Jenkins",
        prefix: "jenkins",
        originalDomain: "updates.jenkins.io",
        exampleKey: "jenkins",
        examples: [
          {
            original: "https://updates.jenkins.io/download/plugins/maven-plugin/3.27/maven-plugin.hpi",
            accelerated: "https://xget.xi-xu.me/jenkins/download/plugins/maven-plugin/3.27/maven-plugin.hpi",
          },
        ],
      },
    ],
  },
]

export function DocsContent() {
  const { t } = useI18n()
  const [expandedCategories, setExpandedCategories] = useState<string[]>(["code-hosting"])

  const toggleCategory = (id: string) => {
    setExpandedCategories((prev) => (prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]))
  }

  // Git examples
  const gitExamples = [
    { titleKey: "clone", command: "git clone https://xget.xi-xu.me/gh/microsoft/vscode.git" },
    { titleKey: "cloneBranch", command: "git clone -b main https://xget.xi-xu.me/gh/facebook/react.git" },
    { titleKey: "shallowClone", command: "git clone --depth 1 https://xget.xi-xu.me/gh/torvalds/linux.git" },
    {
      titleKey: "recursiveClone",
      command: "git clone --recursive https://xget.xi-xu.me/gh/user/repo-with-submodules.git",
    },
  ]

  const gitConfigCommands = [
    {
      titleKey: "github",
      command: 'git config --global url."https://xget.xi-xu.me/gh/".insteadOf "https://github.com/"',
    },
    {
      titleKey: "gitlab",
      command: 'git config --global url."https://xget.xi-xu.me/gl/".insteadOf "https://gitlab.com/"',
    },
    { titleKey: "verify", command: "git config --global --get-regexp url" },
  ]

  const downloadCommands = [
    { titleKey: "wget", command: "wget https://xget.xi-xu.me/gh/user/repo/archive/main.zip" },
    { titleKey: "curl", command: "curl -L -O https://xget.xi-xu.me/gh/user/repo/archive/main.zip" },
    { titleKey: "aria2", command: "aria2c -x 16 -s 16 https://xget.xi-xu.me/hf/model/resolve/main/model.bin" },
  ]

  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-6">
          <BookOpen className="h-4 w-4" />
          <span>{t.docs.badge}</span>
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">{t.docs.title}</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.docs.description}</p>
      </div>

      {/* Conversion Formula */}
      <div className="mb-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
        <h2 className="text-xl font-semibold mb-4 text-center">{t.docs.formula.title}</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center">
          <div className="rounded-lg bg-background/80 px-4 py-3 font-mono text-sm">
            <span className="text-muted-foreground">https://</span>
            <span className="text-foreground">{t.docs.formula.original}</span>
            <span className="text-muted-foreground">{t.docs.formula.path}</span>
          </div>
          <span className="text-2xl text-primary">→</span>
          <div className="rounded-lg bg-background/80 px-4 py-3 font-mono text-sm">
            <span className="text-muted-foreground">https://</span>
            <span className="text-primary">{t.docs.formula.xgetInstance}</span>
            <span className="text-muted-foreground">/</span>
            <span className="text-primary">{t.docs.formula.prefix}</span>
            <span className="text-muted-foreground">{t.docs.formula.path}</span>
          </div>
        </div>
      </div>

      {/* Platform Categories */}
      <div className="space-y-4 mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.docs.supportedPlatforms}</h2>

        {PLATFORM_CATEGORIES.map((category) => (
          <div key={category.id} className="rounded-xl border border-border/50 bg-card/30 overflow-hidden">
            {/* Category Header */}
            <button
              onClick={() => toggleCategory(category.id)}
              className="w-full flex items-center justify-between p-4 sm:p-5 hover:bg-card/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <category.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold">{t.docs.categories[category.id as keyof typeof t.docs.categories]}</h3>
                  <p className="text-sm text-muted-foreground">
                    {category.platforms.length} {t.docs.platforms}
                  </p>
                </div>
              </div>
              {expandedCategories.includes(category.id) ? (
                <ChevronDown className="h-5 w-5 text-muted-foreground" />
              ) : (
                <ChevronRight className="h-5 w-5 text-muted-foreground" />
              )}
            </button>

            {/* Category Content */}
            {expandedCategories.includes(category.id) && (
              <div className="border-t border-border/50 p-4 sm:p-5 space-y-6">
                {category.platforms.map((platform) => (
                  <PlatformCard
                    key={platform.name}
                    platform={platform}
                    exampleDescription={
                      t.docs.platformExamples[platform.exampleKey as keyof typeof t.docs.platformExamples]
                    }
                    originalLabel={t.docs.original}
                    acceleratedLabel={t.docs.accelerated}
                  />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Git Configuration */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.docs.gitTitle}</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Git Examples */}
          <div className="rounded-xl border border-border/50 bg-card/30 p-5">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Terminal className="h-5 w-5 text-primary" />
              {t.docs.gitExamples}
            </h3>
            <div className="space-y-3">
              {gitExamples.map((example) => (
                <CodeBlock
                  key={example.titleKey}
                  title={t.docs.gitCommands[example.titleKey as keyof typeof t.docs.gitCommands]}
                  code={example.command}
                />
              ))}
            </div>
          </div>

          {/* Git Global Config */}
          <div className="rounded-xl border border-border/50 bg-card/30 p-5">
            <h3 className="font-semibold mb-4 flex items-center gap-2">
              <Code className="h-5 w-5 text-primary" />
              {t.docs.globalConfig}
            </h3>
            <div className="space-y-3">
              {gitConfigCommands.map((config) => (
                <CodeBlock
                  key={config.titleKey}
                  title={t.docs.gitConfig[config.titleKey as keyof typeof t.docs.gitConfig]}
                  code={config.command}
                />
              ))}
            </div>
            <p className="mt-4 text-sm text-muted-foreground">{t.docs.globalConfigHint}</p>
          </div>
        </div>
      </div>

      {/* Download Tools */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-6">{t.docs.downloadTools}</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {downloadCommands.map((cmd) => (
            <CodeBlock
              key={cmd.titleKey}
              title={t.docs.downloadCommands[cmd.titleKey as keyof typeof t.docs.downloadCommands]}
              code={cmd.command}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

function PlatformCard({
  platform,
  exampleDescription,
  originalLabel,
  acceleratedLabel,
}: {
  platform: {
    name: string
    prefix: string
    originalDomain: string
    examples: { original: string; accelerated: string }[]
  }
  exampleDescription: string
  originalLabel: string
  acceleratedLabel: string
}) {
  return (
    <div className="rounded-lg border border-border/30 bg-background/50 p-4">
      <div className="flex flex-wrap items-center gap-3 mb-4">
        <h4 className="font-semibold">{platform.name}</h4>
        <span className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-mono">{platform.prefix}</span>
        <span className="text-xs text-muted-foreground">{platform.originalDomain}</span>
      </div>

      <div className="space-y-3">
        {platform.examples.map((example, index) => (
          <div key={index} className="space-y-2">
            <p className="text-sm text-muted-foreground">{exampleDescription}</p>
            <div className="grid gap-2">
              <div className="flex items-center gap-2">
                <span className="text-xs text-muted-foreground shrink-0 w-16">{originalLabel}</span>
                <code className="flex-1 text-xs bg-background/80 rounded px-2 py-1.5 font-mono text-muted-foreground overflow-x-auto">
                  {example.original}
                </code>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-primary shrink-0 w-16">{acceleratedLabel}</span>
                <CopyableCode code={example.accelerated} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CodeBlock({ title, code }: { title: string; code: string }) {
  return (
    <div className="rounded-lg bg-background/50 border border-border/30 p-3">
      <p className="text-xs text-muted-foreground mb-2">{title}</p>
      <CopyableCode code={code} />
    </div>
  )
}

function CopyableCode({ code }: { code: string }) {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Copy failed", err)
    }
  }

  return (
    <div className="flex items-center gap-2 bg-background/80 rounded px-2 py-1.5 group">
      <code className="flex-1 text-xs font-mono text-primary overflow-x-auto whitespace-nowrap">{code}</code>
      <Button
        variant="ghost"
        size="icon"
        onClick={copy}
        className="h-6 w-6 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {copied ? <Check className="h-3 w-3 text-green-500" /> : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  )
}
