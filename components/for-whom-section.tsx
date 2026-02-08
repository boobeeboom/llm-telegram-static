"use client"

import { Code2, TrendingUp, Users, BarChart3, BookOpen, Briefcase } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

const icons = [Code2, TrendingUp, Users, BarChart3, BookOpen, Briefcase]

export function ForWhomSection() {
  const t = useTranslation()
  const audiences = t.forWhom.audiences.map((audience, index) => ({
    ...audience,
    icon: icons[index],
  }))

  return (
    <section id="for-whom" className="py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">{t.forWhom.title}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t.forWhom.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {audiences.map((audience, index) => (
            <div key={index} className="glow-card bg-card border border-border rounded-xl p-6 space-y-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                <audience.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl font-semibold">{audience.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{audience.description}</p>
              <div className="pt-2 border-t border-border">
                <p className="text-sm text-muted-foreground italic">
                  {t.forWhom.exampleLabel} {audience.example}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
