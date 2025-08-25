"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export function ProductShowcase() {
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const characterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (imageRef.current && contentRef.current && characterRef.current) {
      imageRef.current.classList.add("animate-slide-in-left")
      contentRef.current.classList.add("animate-slide-in-right")
      characterRef.current.classList.add("animate-slide-in-up")
    }
  }, [])

  return (
    <section className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div ref={imageRef} className="space-y-6 flex justify-center opacity-0">
            <img
              src="/oxygen-product-transparent.png"
              alt="Oxygen Mongolia Бүтээгдэхүүн"
              className="w-full max-w-md h-auto"
            />
          </div>
          <div ref={contentRef} className="space-y-6 text-center lg:text-left opacity-0">
            <h2 className="text-3xl font-bold text-primary-foreground">Дээд зэрэглэлийн Хүчилтөрөгчийн шийдэл</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Манай өндөр чанартай шингэн хүчилтөрөгчийн нэмэлтүүд нь эрүүл мэнд, эрч хүчийг нэмэгдүүлэхэд зайлшгүй шаардлагатай хүчилтөрөгчийн дэмжлэгийг үзүүлдэг.
               Монголд хамгийн өндөр стандартыг хангахын тулд нарийн нягтлан боловсруулж, цэвэршилтийг нь шалгасан.
            </p>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>1000мг нягтруулсан найрлагатай</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Байгалийн гаралтай найрлага, гаатай хандтай</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start space-x-2">
                <span className="w-2 h-2 bg-accent rounded-full"></span>
                <span>Зөөврийн бөгөөд хэрэглэхэд хялбар</span>
              </li>
            </ul>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Манай бүтээгдэхүүний талаар дэлгэрэнгүй үзэх
            </Button>

            <div ref={characterRef} className="flex justify-center lg:justify-start pt-8 opacity-0">
              <img src="/oxygen-girl-character.png" alt="Oxygen Girl Character" className="w-32 h-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}