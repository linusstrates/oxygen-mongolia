"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useCart } from "@/hooks/use-cart"
import { useToast } from "@/hooks/use-toast"

export default function ProductPage() {
  const { addToCart } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addToCart({
      id: "oxygen",
      name: "Oxygen Mask",
      price: 25000,
      image: "/oxygen-product-transparent.png",
    })

    toast({
      title: "Added to Cart",
      description: "Oxygen Mask has been added to your cart.",
    })
  }

  return (
    <div className="min-h-screen">
      <Header />

      <main className="py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground">Бидний бүтээгдэхүүн</h1>
            <p className="text-xl text-muted-foreground">Хүчилтөрөгчийн Маск</p>
          </div>

          <div className="flex justify-center">
            <Card className="hover:shadow-lg transition-shadow max-w-md w-full">
              <CardHeader className="p-0">
                <img
                  src="/oxygen-product-transparent.png"
                  alt="Oxygen Mask"
                  className="w-full h-64 object-contain rounded-t-lg bg-gradient-to-br from-blue-50 to-cyan-50"
                />
              </CardHeader>
              <CardContent className="p-6 text-center">
                <CardTitle className="text-2xl mb-3">Онцлох бүтээгдэхүүн</CardTitle>
                <CardDescription className="text-muted-foreground mb-6">
                  1000мг савлагаатай хүчилтөрөгчийн маск
                </CardDescription>
                <div className="space-y-2 text-sm text-muted-foreground mb-6 text-left">
                  <p>• гар аргаар шүүж авсан 99.8% хүчилтөрөгч</p>
                  <p>• Ашиглахад хялбар</p>
                  <p>• Монголд үйлдвэрлэв</p>
                </div>
                <div className="text-2xl font-bold text-primary-foreground mb-4">₮25,000</div>
                <Button
                  onClick={handleAddToCart}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  size="lg"
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
