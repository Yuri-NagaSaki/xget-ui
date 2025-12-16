import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Noto_Sans_SC, JetBrains_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/lib/i18n/context"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-noto-sans-sc",
  display: "swap",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Xget UI - Developer Resource Acceleration Engine",
  description:
    "Unified support for GitHub, GitLab, npm, PyPI, Hugging Face and 40+ platforms with high-performance acceleration",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: "#10b981",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${notoSansSC.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
        <I18nProvider>{children}</I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
