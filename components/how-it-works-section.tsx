"use client"

import { Layers, MessageCircle, CheckCircle } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { useTranslation } from "@/lib/i18n/useTranslation"

const icons = [Layers, MessageCircle, CheckCircle]

export function HowItWorksSection() {
  const t = useTranslation()
  const steps = t.howItWorks.steps.map((step, index) => ({
    number: index + 1,
    icon: icons[index],
    ...step,
  }))

  return (
    <section id="how-it-works" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.howItWorks.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.howItWorks.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glow-card bg-card border border-border rounded-xl p-6 space-y-4 h-full">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-center mb-8">{t.howItWorks.examples.title}</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {t.howItWorks.examples.items.map((example, index) => (
              <div key={index} className="bg-card border border-border rounded-xl p-6 space-y-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  Model: {example.model}
                </Badge>
                <div className="bg-muted rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">{t.howItWorks.examples.queryLabel}</p>
                  <p className="text-sm text-muted-foreground">{example.query}</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-sm font-semibold mb-2">{t.howItWorks.examples.responseLabel}</p>
                  <p className="text-sm text-muted-foreground font-mono">{example.response}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
