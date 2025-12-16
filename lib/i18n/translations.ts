export type Locale = "en" | "zh"

export const translations = {
  en: {
    // Header
    header: {
      converter: "Converter",
      docs: "Docs",
      github: "GitHub",
      starOnGithub: "Star on GitHub",
    },
    // Hero
    hero: {
      badge: "High-Performance Developer Resource Acceleration",
      title: "Xget",
      subtitle: "Developer Resource Acceleration Engine",
      description:
        "Unified support for GitHub, GitLab, npm, PyPI, Hugging Face and 40+ platforms, delivering blazing-fast downloads for code repositories, AI models, and packages",
      stats: {
        response: "Avg Response",
        nodes: "Global Nodes",
        security: "Enterprise Security",
        platforms: "Platforms",
      },
    },
    // URL Converter
    converter: {
      title: "URL Converter",
      subtitle: "Enter the original URL, generate accelerated link with one click",
      xgetHost: "Xget Instance",
      xgetHostPlaceholder: "xget.xi-xu.me",
      xgetHostHint: "Use the default instance or enter your self-hosted Xget address",
      originalUrl: "Original URL",
      originalUrlPlaceholder: "https://github.com/microsoft/vscode/archive/refs/heads/main.zip",
      generateBtn: "Generate Accelerated Link",
      errorEmpty: "Please enter a URL",
      errorInvalid: "Invalid URL format",
      errorUnsupported: "Unsupported platform, please check the docs for supported platforms",
      detectedPlatform: "Detected Platform",
      acceleratedUrl: "Accelerated URL",
      quickTry: "Quick try:",
    },
    // Features
    features: {
      title: "Core Advantages",
      subtitle: "Why choose Xget?",
      items: [
        {
          title: "Blazing Fast",
          description:
            "Millisecond response, HTTP/3 protocol support, intelligent compression, 60% transfer efficiency boost",
        },
        {
          title: "Global Acceleration",
          description: "Cloudflare 330+ edge nodes, intelligent routing, automatically selects optimal path",
        },
        {
          title: "Enterprise Security",
          description: "Multi-layer security headers, request validation, timeout protection, comprehensive security",
        },
        {
          title: "Full Git Support",
          description:
            "Supports clone, push, pull, fetch and all Git operations, including recursive submodule cloning",
        },
        {
          title: "Package Manager Acceleration",
          description: "Full support for npm, PyPI, Maven, Cargo and other major package managers",
        },
        {
          title: "AI Platform Integration",
          description: "Hugging Face, Civitai model download acceleration, AI inference API proxy",
        },
      ],
    },
    // Footer
    footer: {
      description: "Developer Resource Acceleration Engine",
      docs: "Docs",
      officialInstance: "Official Instance",
      copyright: "Open source project, released under MIT License.",
    },
    // Docs Page
    docs: {
      badge: "Documentation",
      title: "URL Conversion Rules",
      description:
        "Xget supports URL acceleration for 40+ platforms, simply replace the domain and add platform prefix",
      formula: {
        title: "Conversion Formula",
        original: "original-domain",
        path: "/path",
        xgetInstance: "xget-instance",
        prefix: "prefix",
      },
      supportedPlatforms: "Supported Platforms",
      platforms: "platforms",
      categories: {
        "code-hosting": "Code Hosting",
        "ai-ml": "AI/ML Platforms",
        "package-managers": "Package Managers",
        "linux-distros": "Linux Distributions",
        other: "Other Platforms",
      },
      original: "Original:",
      accelerated: "Accelerated:",
      gitTitle: "Git Operations & Configuration",
      gitExamples: "Git Operation Examples",
      globalConfig: "Global Acceleration Config",
      globalConfigHint: "After configuration, all git clone commands will automatically use Xget acceleration",
      downloadTools: "Download Tool Integration",
      gitCommands: {
        clone: "Clone repository",
        cloneBranch: "Clone specific branch",
        shallowClone: "Shallow clone (latest commit only)",
        recursiveClone: "Recursive submodule clone",
      },
      gitConfig: {
        github: "GitHub global config",
        gitlab: "GitLab global config",
        verify: "Verify configuration",
      },
      downloadCommands: {
        wget: "wget download",
        curl: "cURL download",
        aria2: "aria2 multi-thread download",
      },
      platformExamples: {
        vscode: "Download VSCode source archive",
        gist: "Download Gist file",
        gitlab: "Download GitLab source",
        gitea: "Download Gitea source",
        forgejo: "Download Forgejo source",
        sevenzip: "Download 7-Zip installer",
        aosp: "Access Android framework source",
        hfModel: "Download model file",
        hfDataset: "Download dataset file",
        civitai: "Download AI model",
        npm: "Download React package",
        pypi: "Download Python package",
        maven: "Download Spring JAR",
        golang: "Download Go module",
        crates: "Download Rust crate",
        rubygems: "Download Ruby Gem",
        nuget: "Download NuGet package",
        debian: "Download Debian package",
        ubuntu: "Download Ubuntu package",
        fedora: "Download Fedora RPM",
        arch: "Download Arch package",
        arxiv: "Download paper PDF",
        fdroid: "Download APK file",
        jenkins: "Download Jenkins plugin",
      },
    },
  },
  zh: {
    // Header
    header: {
      converter: "转换器",
      docs: "文档",
      github: "GitHub",
      starOnGithub: "Star on GitHub",
    },
    // Hero
    hero: {
      badge: "超高性能开发者资源加速",
      title: "Xget",
      subtitle: "开发者资源加速引擎",
      description:
        "统一支持 GitHub、GitLab、npm、PyPI、Hugging Face 等 40+ 平台，为代码存储库、AI 模型、软件包提供极速下载体验",
      stats: {
        response: "平均响应",
        nodes: "全球节点",
        security: "企业级安全",
        platforms: "支持平台",
      },
    },
    // URL Converter
    converter: {
      title: "URL 转换器",
      subtitle: "输入原始链接，一键生成加速链接",
      xgetHost: "Xget 实例地址",
      xgetHostPlaceholder: "xget.xi-xu.me",
      xgetHostHint: "使用默认实例或填入你自部署的 Xget 地址",
      originalUrl: "原始链接",
      originalUrlPlaceholder: "https://github.com/microsoft/vscode/archive/refs/heads/main.zip",
      generateBtn: "生成加速链接",
      errorEmpty: "请输入原始 URL",
      errorInvalid: "无效的 URL 格式",
      errorUnsupported: "不支持的平台，请查看文档了解支持的平台列表",
      detectedPlatform: "检测到平台",
      acceleratedUrl: "加速链接",
      quickTry: "快速试试:",
    },
    // Features
    features: {
      title: "核心优势",
      subtitle: "为什么选择 Xget？",
      items: [
        {
          title: "极速性能",
          description: "毫秒级响应，HTTP/3 协议支持，智能多重压缩，传输效率提升 60%",
        },
        {
          title: "全球加速",
          description: "Cloudflare 330+ 边缘节点，智能路由优化，自动选择最优传输路径",
        },
        {
          title: "企业级安全",
          description: "多层安全标头，请求验证机制，超时保护，全方位安全保障",
        },
        {
          title: "Git 完整支持",
          description: "支持 clone、push、pull、fetch 等完整 Git 操作，包括子模块递归克隆",
        },
        {
          title: "包管理加速",
          description: "npm、PyPI、Maven、Cargo 等主流包管理器全面支持",
        },
        {
          title: "AI 平台集成",
          description: "Hugging Face、Civitai 模型下载加速，AI 推理 API 代理",
        },
      ],
    },
    // Footer
    footer: {
      description: "开发者资源加速引擎",
      docs: "文档",
      officialInstance: "官方实例",
      copyright: "开源项目，基于 MIT 许可证发布。",
    },
    // Docs Page
    docs: {
      badge: "使用文档",
      title: "URL 转换规则",
      description: "Xget 支持 40+ 平台的 URL 加速转换，只需简单替换域名并添加平台前缀",
      formula: {
        title: "转换公式",
        original: "原始域名",
        path: "/路径",
        xgetInstance: "xget实例",
        prefix: "前缀",
      },
      supportedPlatforms: "支持平台",
      platforms: "个平台",
      categories: {
        "code-hosting": "代码托管平台",
        "ai-ml": "AI/ML 平台",
        "package-managers": "包管理器",
        "linux-distros": "Linux 发行版",
        other: "其他平台",
      },
      original: "原始:",
      accelerated: "加速:",
      gitTitle: "Git 操作与配置",
      gitExamples: "Git 操作示例",
      globalConfig: "全局加速配置",
      globalConfigHint: "配置后，所有 git clone 命令会自动使用 Xget 加速",
      downloadTools: "下载工具集成",
      gitCommands: {
        clone: "克隆存储库",
        cloneBranch: "克隆指定分支",
        shallowClone: "浅克隆（仅最新提交）",
        recursiveClone: "子模块递归克隆",
      },
      gitConfig: {
        github: "GitHub 全局配置",
        gitlab: "GitLab 全局配置",
        verify: "验证配置",
      },
      downloadCommands: {
        wget: "wget 下载",
        curl: "cURL 下载",
        aria2: "aria2 多线程下载",
      },
      platformExamples: {
        vscode: "下载 VSCode 源码压缩包",
        gist: "下载 Gist 文件",
        gitlab: "下载 GitLab 源码",
        gitea: "下载 Gitea 源码",
        forgejo: "下载 Forgejo 源码",
        sevenzip: "下载 7-Zip 安装包",
        aosp: "访问 Android 框架源码",
        hfModel: "下载模型文件",
        hfDataset: "下载数据集文件",
        civitai: "下载 AI 模型",
        npm: "下载 React 包",
        pypi: "下载 Python 包",
        maven: "下载 Spring JAR",
        golang: "下载 Go 模块",
        crates: "下载 Rust crate",
        rubygems: "下载 Ruby Gem",
        nuget: "下载 NuGet 包",
        debian: "下载 Debian 包",
        ubuntu: "下载 Ubuntu 包",
        fedora: "下载 Fedora RPM",
        arch: "下载 Arch 包",
        arxiv: "下载论文 PDF",
        fdroid: "下载 APK 文件",
        jenkins: "下载 Jenkins 插件",
      },
    },
  },
} as const

export type Translations = typeof translations.en
