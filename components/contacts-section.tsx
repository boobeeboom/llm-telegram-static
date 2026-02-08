"use client"

import { Mail, Building2 } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function ContactsSection() {
  const t = useTranslation()

  return (
    <section id="contacts" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.contacts.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.contacts.subtitle}</p>
        </div>

        <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold">{t.contacts.company}</h3>
            <p className="text-2xl font-bold text-gradient">{t.contacts.companyName}</p>
          </div>

          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
              <Mail className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold">{t.contacts.email}</h3>
            <a href="mailto:info@forko-it.com" className="text-xl text-primary hover:text-primary/80 transition-colors">
              info@forko-it.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
