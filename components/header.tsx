"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShoppingCart } from "lucide-react"
import { useCart } from "@/hooks/use-cart"

export function Header() {
  const { getTotalItems, isLoaded } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 mx-auto max-w-6xl">
        <div className="flex items-center space-x-2">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Oxygen Mongolia
            </h1>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            About Us
          </Link>
          <Link href="/product" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Product
          </Link>
          <Link href="/articles" className="text-sm font-medium text-gray-700 hover:text-blue-600 transition-colors">
            Articles
          </Link>
        </nav>

        <div className="flex items-center space-x-4">
          <Link href="/cart">
            <Button
              variant="outline"
              size="sm"
              className="relative border-blue-200 hover:bg-blue-50 hover:border-blue-300 bg-transparent"
            >
              <ShoppingCart className="h-4 w-4 text-blue-600" />
              {isLoaded && getTotalItems() > 0 && (
                <div className="absolute -top-2 -right-2 h-5 w-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-semibold border-2 border-white">
                  {getTotalItems()}
                </div>
              )}
            </Button>
          </Link>
          <Button className="bg-blue-600 text-white hover:bg-blue-700 shadow-md">Contact Us</Button>
        </div>
      </div>
    </header>
  )
}
