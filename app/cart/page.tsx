"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/hooks/use-cart"
import { Minus, Plus, Trash2 } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart, getTotalPrice, clearCart } = useCart()
  const { toast } = useToast()

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    updateQuantity(id, newQuantity)
  }

  const handleRemoveItem = (id: string, name: string) => {
    removeFromCart(id)
    toast({
      title: "Item Removed",
      description: `${name} сагснаас хасагдлаа.`,
    })
  }

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("mn-MN").format(price)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-primary-foreground">Сагс</h1>
              <div className="bg-muted rounded-lg p-12">
                <p className="text-xl text-muted-foreground mb-6">Таны сагс хоосон байна.</p>
                <Link href="/product">
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90">Үргэлжлүүлж харах</Button>
                </Link>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-16">
        <div className="container px-4 mx-auto max-w-4xl">
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-primary-foreground">Таны сагс</h1>
              <p className="text-xl text-muted-foreground">баталгаажуулах</p>
            </div>

            <div className="space-y-6">
              {cartItems.map((item) => (
                <Card key={item.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-32 h-32 object-contain rounded-lg bg-gradient-to-br from-blue-50 to-cyan-50"
                        />
                      </div>

                      <div className="flex-grow space-y-4">
                        <div>
                          <h3 className="text-xl font-semibold text-primary-foreground">{item.name}</h3>
                          <p className="text-lg font-bold text-accent">₮{formatPrice(item.price)}</p>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                              disabled={item.quantity <= 1}
                            >
                              <Minus className="h-4 w-4" />
                            </Button>
                            <Input
                              type="number"
                              value={item.quantity}
                              onChange={(e) => handleQuantityChange(item.id, Number.parseInt(e.target.value) || 1)}
                              className="w-20 text-center"
                              min="1"
                            />
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            >
                              <Plus className="h-4 w-4" />
                            </Button>
                          </div>

                          <Button variant="destructive" size="sm" onClick={() => handleRemoveItem(item.id, item.name)}>
                            <Trash2 className="h-4 w-4 mr-2" />
                            Remove
                          </Button>
                        </div>

                        <div className="text-right">
                          <p className="text-lg font-semibold text-primary-foreground">
                            Subtotal: ₮{formatPrice(item.price * item.quantity)}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="bg-muted">
              <CardHeader>
                <CardTitle className="text-center">Захиалгын дэлгэрэнгүй:</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between text-lg">
                  <span>Нийт дүн:</span>
                  <span>₮{formatPrice(getTotalPrice())}</span>
                </div>
                <div className="flex justify-between text-lg">
                  <span>Хүргэлт:</span>
                  <span>үнэгүй</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-xl font-bold text-primary-foreground">
                  <span>Нийт:</span>
                  <span>₮{formatPrice(getTotalPrice())}</span>
                </div>

                <div className="space-y-3 pt-4">
                  <Link href="/checkout" className="block">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90" size="lg">
                      Төлбөр төлөх
                    </Button>
                  </Link>
                  <Link href="/product" className="block">
                    <Button variant="outline" className="w-full bg-transparent">
                      Үргэлжлүүлж харах
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
