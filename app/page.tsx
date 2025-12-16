import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { UrlConverter } from "@/components/url-converter"
import { FeaturesSection } from "@/components/features-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <UrlConverter />
        <FeaturesSection />
      </main>
      <Footer />
    </div>
  )
}
