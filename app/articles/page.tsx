import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ArticlesPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground">Articles</h1>
            <p className="text-xl text-muted-foreground">Medeelel</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1,].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={`/article zurag.png?height=200&width=400&query=oxygen therapy medical article healthcare ${i}`}
                    alt={`Article ${i}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">jiremsen ehchuuded</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    Ingevel tegne Tegvel ingene
                  </CardDescription>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Emchiin ner</span>
                    <span>Aug , 2025</span>
                  </div>
                </CardContent>
              </Card>
            ))}
            {[2].map((i) => (
              <Card key={i} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img
                    src={`/article zurag.png?height=200&width=400&query=oxygen therapy medical article healthcare ${i}`}
                    alt={`Article ${i}`}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="text-lg mb-2">tamirchidad</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground mb-4">
                    Ingevel tegne Tegvel ingene
                  </CardDescription>
                  <div className="flex justify-between items-center text-xs text-muted-foreground">
                    <span>Emchiin ner</span>
                    <span>Aug , 2025</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
