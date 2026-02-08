"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { useLanguage } from "@/lib/i18n/context"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { language, setLanguage } = useLanguage()
  const t = useTranslation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const menuItems = [
    { label: t.header.features, href: "#features" },
    { label: t.header.forWhom, href: "#for-whom" },
    { label: t.header.pricing, href: "#pricing" },
    { label: t.header.howItWorks, href: "#how-it-works" },
    { label: t.header.faq, href: "#faq" },
    { label: t.header.contacts, href: "#contacts" },
    { label: t.header.documents, href: "#documents" },
  ]

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ru" : "en")
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-border" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="text-xl md:text-2xl font-bold text-gradient">
            eazy GPT
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Switch language"
            >
              <Globe size={18} />
              <span className="font-medium">{language.toUpperCase()}</span>
            </button>

            <a href="#pricing" className="hidden md:inline-flex">
              <Button>{t.header.connectBot}</Button>
            </a>

            <button
              className="lg:hidden text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <nav className="lg:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {menuItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <a href="#pricing" className="md:hidden">
                <Button>{t.header.connectBot}</Button>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
