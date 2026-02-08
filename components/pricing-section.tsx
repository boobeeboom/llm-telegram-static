"use client"

import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function PricingSection() {
  const t = useTranslation()

  return (
    <section id="pricing" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.pricing.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.pricing.subtitle}</p>
        </div>

        <div className="max-w-lg mx-auto">
          <div className="glow-card bg-card border-2 border-primary/20 rounded-2xl p-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold">{t.pricing.package}</h3>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-5xl font-bold text-gradient">{t.pricing.price}</span>
              </div>
              <p className="text-sm text-muted-foreground">{t.pricing.perTokens}</p>
            </div>

            <div className="space-y-3 py-6">
              {t.pricing.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </div>
                  <span className="text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>

            <a href="https://t.me/eazygptbot" className="w-full">
              <Button size="lg" className="w-full text-base">
                {t.pricing.connectBot}
              </Button>
            </a>

            <div className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground leading-relaxed">
                <strong>{t.pricing.tokensInfo.title}</strong> {t.pricing.tokensInfo.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
