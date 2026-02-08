"use client"

import { MessageSquare, Layers, TrendingUp, FileText, Code, Mail } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

const mainIcons = [Layers, MessageSquare, TrendingUp]
const useCaseIcons = [Code, FileText, MessageSquare, TrendingUp, FileText, Mail]

export function FeaturesSection() {
  const t = useTranslation()
  const features = t.features.main.map((feature, index) => ({
    ...feature,
    icon: mainIcons[index],
  }))
  const useCases = t.features.useCases.items.map((label, index) => ({
    icon: useCaseIcons[index],
    label,
  }))

  return (
    <section id="features" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.features.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.features.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center">
                <feature.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">{t.features.useCases.title}</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-4 flex flex-col items-center gap-3 hover:border-primary/50 transition-colors"
              >
                <useCase.icon className="w-6 h-6 text-accent" />
                <span className="text-sm text-center">{useCase.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
