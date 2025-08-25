import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-primary-foreground">Бидний тухай</h1>
              <p className="text-xl text-muted-foreground">
                Lorem Ipsum Mongolia
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <img
                  src="bidniizurag.png"
                  alt="bidnii tuhai zurag"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-primary-foreground">Үүрэг</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem ipsum
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
