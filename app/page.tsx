import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductShowcase } from "@/components/product-showcase"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="bg-gradient-to-br from-blue-500 via-cyan-400 to-blue-100">
        <div className="container px-4 py-16 mx-auto max-w-6xl">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">Хүчилтөрөгчийн маск</h1>
            <p className="text-xl text-blue-50 drop-shadow">
              Хүчилтөрөгчийн маск Монголдоо анх удаа.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50 shadow-lg font-semibold">
              Бидний бүтээгдэхүүнүүд
            </Button>
          </div>
        </div>
      </main>

      <ProductShowcase />

      <section className="py-16 bg-gradient-to-b from-blue-50 to-white">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Сүүлийн нийтлэлүүд</h2>
            <p className="text-lg text-blue-700">Манай сүүлийн үеийн ойлголт, салбарын шинэчлэлтүүдтэй танилцана уу</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 max-w-6xl mx-auto">
            {[1, 2, 3].map((i) => (
              <Card
                key={i}
                className="hover:shadow-xl transition-all duration-300 border-blue-200 hover:border-blue-300"
              >
                <CardHeader className="p-0">
                  <img
                    src={`/oxygen-therapy-article.png?height=200&width=400&query=oxygen therapy medical article ${i}`}
                    alt={`Article ${i}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2 text-blue-900">Хүчилтөрөгчийн эмчилгээний ашиг тус</CardTitle>
                  <CardDescription className="text-sm text-blue-600 mb-4">
                    Хүчилтөрөгчийн эмчилгээний эмнэлгийн ашиг тус, хэрэглээг судлаарай.
                  </CardDescription>
                  <p className="text-xs text-blue-500">2 хоногийн өмнө нийтлэгдсэн</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center">
            <Link href="/articles">
              <Button
                variant="outline"
                className="border-blue-500 text-blue-600 hover:bg-blue-500 hover:text-white bg-transparent shadow-md"
              >
                Бүх нийтлэлүүдийг харуулах
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-white to-blue-50">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl font-bold text-blue-900">Бидний бүтээгдэхүүнийг хаанаас олох вэ</h2>
            <p className="text-lg text-blue-700">Манай бүтээгдэхүүнүүдийг эдгээр итгэмжлэгдсэн дэлгүүр болон эмийн сангуудаас авах боломжтой</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center max-w-4xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="grayscale hover:grayscale-0 transition-all duration-300">
                <img
                  src={`/medical-pharmacy-logo.png?height=80&width=120&query=medical pharmacy logo ${i}`}
                  alt={`Partner ${i}`}
                  className="h-16 w-auto opacity-60 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
