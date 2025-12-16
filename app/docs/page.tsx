import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsContent } from "@/components/docs-content"

export const metadata = {
  title: "文档 - Xget UI",
  description: "Xget URL 转换规则和使用文档",
}

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12">
        <DocsContent />
      </main>
      <Footer />
    </div>
  )
}
