"use client"

import { Shield, CreditCard, Zap, BarChart, MessageSquare, Clock } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

const icons = [Zap, Shield, BarChart, MessageSquare, CreditCard, Clock]

export function WhySection() {
  const t = useTranslation()
  const benefits = t.why.benefits.map((benefit, index) => ({
    ...benefit,
    icon: icons[index],
  }))

  return (
    <section className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {t.why.title} <span className="text-gradient">{t.why.titleBrand}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.why.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="glow-card bg-card border border-border rounded-xl p-6 space-y-4 hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
