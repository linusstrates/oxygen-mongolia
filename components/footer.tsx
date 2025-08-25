import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-muted border-t justify-items-center">
      <div className="container px-0 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 justify-items-center text-center">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-foreground">Oxygen Mongolia</h3>
            <p className="text-sm text-muted-foreground">
              Монгол болон бусад улсуудад зориулсан мэргэжлийн хүчилтөрөгчийн шийдэл, бүтээгдэхүүн.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Түргэн холбоосууд</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-accent transition-colors">
                  Бидний тухай
                </Link>
              </li>
              <li>
                <Link href="/product" className="text-muted-foreground hover:text-accent transition-colors">
                  Бүтээгдэхүүн
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-muted-foreground hover:text-accent transition-colors">
                  Нийтлэл
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Тусламж</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Харилцагчийн үйлчилгээ
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Техникийн тусламж
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-accent transition-colors">
                  Түгээмэл асуултууд
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-foreground">Холбоо барих</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Утас: +976 1234 5678</p>
              <p>И-мэйл: info@oxygenmongolia.mn</p>
              <p>Хаяг: Улаанбаатар, Монгол</p>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">© 2024 Oxygen Mongolia. Бүх эрх хуулиар хамгаалагдсан.</p>
        </div>
      </div>
    </footer>
  )
}