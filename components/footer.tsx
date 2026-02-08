"use client"

import { Mail } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const t = useTranslation()

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-gradient">eazy GPT</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{t.footer.description}</p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.contacts}</h4>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>{t.footer.companyName}</p>
              <a
                href="mailto:info@forko-it.com"
                className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
              >
                <Mail className="w-4 h-4" />
                info@forko-it.com
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">{t.footer.documents}</h4>
            <div className="space-y-2 text-sm">
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vQYEE0xkltKHM55tj_QLVyf8FqfcHFpN9xU8dBH8Wg4P2FFVxbKMLBPOj712MQ5ryxmeVuRA5tE632r/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.publicOffer}
              </a>
              <a
                href="https://docs.google.com/document/d/e/2PACX-1vRCFKsQt4XYl94_QHMn6i-pkNxzNVjF9088EfQpwNOZ6GD92dgSNDI-TSuszyiycGP58o7OOkr0abnL/pub"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-muted-foreground hover:text-foreground transition-colors"
              >
                {t.footer.privacyPolicy}
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            © {currentYear} {t.footer.companyName}. {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  )
}
