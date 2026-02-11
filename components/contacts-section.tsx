"use client"

import { Mail, Building2, MapPin, FileText } from "lucide-react"
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

        <div className="max-w-4xl mx-auto space-y-6">
          {/* Company Name */}
          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">{t.contacts.company}</h3>
                <p className="text-2xl font-bold text-gradient">{t.contacts.companyName}</p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Email */}
            <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">{t.contacts.email}</h3>
              <a
                href={`mailto:${t.contacts.emailAddress}`}
                className="text-lg text-primary hover:text-primary/80 transition-colors break-all"
              >
                {t.contacts.emailAddress}
              </a>
            </div>

            {/* Address */}
            <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{t.contacts.address}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{t.contacts.addressFull}</p>
              <p className="text-sm text-muted-foreground">Hong Kong SAR, PRC</p>
            </div>
          </div>

          {/* Registration Details */}
          <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <FileText className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-3 flex-1">
                <h3 className="text-xl font-semibold">Registration Details</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground">{t.contacts.registrationNo}</p>
                    <p className="text-base font-semibold">{t.contacts.registrationValue}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{t.contacts.businessRegNo}</p>
                    <p className="text-base font-semibold">{t.contacts.businessRegValue}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
