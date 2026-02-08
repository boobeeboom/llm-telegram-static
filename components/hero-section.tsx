"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Zap } from "lucide-react"
import { useTranslation } from "@/lib/i18n/useTranslation"

export function HeroSection() {
  const t = useTranslation()
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />

      <div className="container mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                {t.hero.title} <span className="text-gradient">{t.hero.titleHighlight}</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">{t.hero.subtitle}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#pricing">
                <Button size="lg" className="text-base">
                  <Sparkles className="mr-2 h-5 w-5" />
                  {t.hero.connectBot}
                </Button>
              </a>
              <a href="#pricing">
                <Button size="lg" variant="outline" className="text-base bg-transparent">
                  {t.hero.viewPricing}
                </Button>
              </a>
            </div>

            {t.hero.botLinkNote && <p className="text-sm text-muted-foreground">{t.hero.botLinkNote}</p>}
          </div>

          <div className="relative">
            <div className="glow-card bg-card border border-border rounded-2xl p-6 md:p-8 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <span className="font-semibold">eazy GPT</span>
              </div>

              <div className="space-y-4">
                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Model: OpenAI
                    </Badge>
                  </div>
                  <p className="text-sm">{t.hero.chatExample.query}</p>
                </div>

                <div className="bg-card border border-border rounded-xl p-4 space-y-2">
                  <p className="text-sm text-muted-foreground whitespace-pre-line">{t.hero.chatExample.response}</p>
                </div>

                <div className="bg-muted rounded-xl p-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                      Model: OpenAI
                    </Badge>
                  </div>
                  <p className="text-sm">{t.hero.chatExample.query2}</p>
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-muted-foreground">{t.hero.tokensUsed}</span>
                  <span className="font-semibold text-accent">12,450 / 500,000</span>
                </div>
                <div className="mt-2 h-2 bg-muted rounded-full overflow-hidden">
                  <div className="h-full w-[2.5%] bg-gradient-to-r from-primary via-secondary to-accent rounded-full" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
