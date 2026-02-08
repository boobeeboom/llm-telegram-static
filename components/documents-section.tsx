"use client"

import { Button } from "@/components/ui/button"
import { FileText, Shield } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function DocumentsSection() {
  const t = useTranslation()

  return (
    <section id="documents" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.documents.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.documents.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vQYEE0xkltKHM55tj_QLVyf8FqfcHFpN9xU8dBH8Wg4P2FFVxbKMLBPOj712MQ5ryxmeVuRA5tE632r/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card bg-card border border-border rounded-xl p-8 space-y-4 hover:scale-[1.02] transition-transform duration-300 block"
          >
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <FileText className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t.documents.publicOffer.title}</h3>
            <p className="text-sm text-muted-foreground">{t.documents.publicOffer.description}</p>
            <Button variant="outline" className="w-full bg-transparent">
              {t.documents.publicOffer.button}
            </Button>
          </a>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRCFKsQt4XYl94_QHMn6i-pkNxzNVjF9088EfQpwNOZ6GD92dgSNDI-TSuszyiycGP58o7OOkr0abnL/pub"
            target="_blank"
            rel="noopener noreferrer"
            className="glow-card bg-card border border-border rounded-xl p-8 space-y-4 hover:scale-[1.02] transition-transform duration-300 block"
          >
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Shield className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">{t.documents.privacyPolicy.title}</h3>
            <p className="text-sm text-muted-foreground">{t.documents.privacyPolicy.description}</p>
            <Button variant="outline" className="w-full bg-transparent">
              {t.documents.privacyPolicy.button}
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
