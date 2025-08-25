"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useCart } from "@/hooks/use-cart"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import { CreditCard, Smartphone } from "lucide-react"

export default function CheckoutPage() {
  const { cartItems, getTotalPrice, clearCart } = useCart()
  const { toast } = useToast()
  const [paymentMethod, setPaymentMethod] = useState<"card" | "app" | "">("")
  const [selectedApp, setSelectedApp] = useState("")
  const [isProcessing, setIsProcessing] = useState(false)

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    postalCode: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
  })

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("mn-MN").format(price)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // payment skeleton
    setTimeout(() => {
      clearCart()
      setIsProcessing(false)
      toast({
        title: "Таны захиалга амжилттай хийгдлээ",
        description: "Таны хүсэлт амжилттай баталгаажлаа, удахгуй танд баталгаажуулах и-мейл очно.",
      })
      // direct to 3dvisa
    }, 2000)
  }

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-16">
          <div className="container px-4 mx-auto max-w-4xl">
            <div className="text-center space-y-6">
              <h1 className="text-4xl font-bold text-primary-foreground">Төлбөрийн мэдээлэл</h1>
              <div className="bg-muted rounded-lg p-12">
                <p className="text-xl text-muted-foreground mb-6">Таны сагс хоосон байна</p>
                <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                  <a href="/product">Үргэлжлүүлж харах</a>
                </Button>
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
        <div className="container px-4 mx-auto max-w-6xl">
          <div className="text-center space-y-4 mb-12">
            <h1 className="text-4xl font-bold text-primary-foreground">Төлбөрийн мэдээлэл</h1>
            <p className="text-xl text-muted-foreground">Захиалга баталгаажуулах</p>
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* zuun div */}
            <div className="space-y-6">
              {/* hereglegch */}
              <Card>
                <CardHeader>
                  <CardTitle>Хэрэглэгчийн мэдээлэл</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">Нэр</Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Овог</Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">И-мейл</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Утасны дугаар</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => handleInputChange("phone", e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* hayag */}
              <Card>
                <CardHeader>
                  <CardTitle>Хүргэлтийн хаяг</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <Label htmlFor="address">Хаяг</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => handleInputChange("address", e.target.value)}
                      required
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Tulburiin turul */}
              <Card>
                <CardHeader>
                  <CardTitle>ТӨлбөрийн төрөл</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Button
                      type="button"
                      variant={paymentMethod === "card" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("card")}
                      className="h-16 flex flex-col items-center justify-center space-y-2"
                    >
                      <CreditCard className="h-6 w-6" />
                      <span>Банкны карт</span>
                    </Button>
                    <Button
                      type="button"
                      variant={paymentMethod === "app" ? "default" : "outline"}
                      onClick={() => setPaymentMethod("app")}
                      className="h-16 flex flex-col items-center justify-center space-y-2"
                    >
                      <Smartphone className="h-6 w-6" />
                      <span>Апп-р дамжуулан төлөх</span>
                    </Button>
                  </div>

                  {paymentMethod === "card" && (
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="cardName">Карт эзэмшигчийн нэр</Label>
                        <Input
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange("cardName", e.target.value)}
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Картын дугаар</Label>
                        <Input
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange("cardNumber", e.target.value)}
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Дуусах хугацаа</Label>
                          <Input
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange("expiryDate", e.target.value)}
                            required
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange("cvv", e.target.value)}
                            required
                          />
                        </div>
                      </div>
                    </div>
                  )}
                  {paymentMethod === "app" && (
                      <div className="pt-4">
                        <Label htmlFor="paymentApp">Төлбөрийн апп-аа сонгоно уу</Label>
                        <Select value={selectedApp} onValueChange={setSelectedApp}>
                          <SelectTrigger>
                            <SelectValue placeholder="Төлбөрийн апп" />
                          </SelectTrigger>
                          <SelectContent className="bg-popover text-popover-foreground border-border shadow-md">
                            <SelectItem value="golomt-pay">Golomt Pay</SelectItem>
                            <SelectItem value="khan-pay">Khan Pay</SelectItem>
                            <SelectItem value="most-money">Most Money</SelectItem>
                            <SelectItem value="tdb-pay">TDB Pay</SelectItem>
                            <SelectItem value="upoint">UPoint</SelectItem>
                            <SelectItem value="social-pay">Social Pay</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* baruun div */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Захиалгын дэлгэрэнгүй</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center py-2 border-b border-border">
                      <div className="flex items-center space-x-3">
                        <img
                          src={item.image || "/placeholder.svg"}
                          alt={item.name}
                          className="w-12 h-12 object-contain rounded bg-gradient-to-br from-blue-50 to-cyan-50"
                        />
                        <div>
                          <p className="font-medium text-sm">{item.name}</p>
                          <p className="text-xs text-muted-foreground">Тоо ширхэг: {item.quantity}</p>
                        </div>
                      </div>
                      <p className="font-semibold">₮{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  ))}

                  <div className="space-y-2 pt-4">
                    <div className="flex justify-between">
                      <span>Бүтээгдэхүүний дүн:</span>
                      <span>₮{formatPrice(getTotalPrice())}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Хүргэлт:</span>
                      <span>үнэгүй</span>
                    </div>
                    <div className="flex justify-between">
                      <span>НӨАТ:</span>
                      <span>₮0</span>
                    </div>
                    <hr className="border-border" />
                    <div className="flex justify-between text-lg font-bold text-primary-foreground">
                      <span>Нийт дүн:</span>
                      <span>₮{formatPrice(getTotalPrice())}</span>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                    size="lg"
                    disabled={!paymentMethod || isProcessing}
                  >
                    {isProcessing ? "Processing..." : `Place Order - ₮${formatPrice(getTotalPrice())}`}
                  </Button>
                </CardContent>
              </Card>
            </div>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}