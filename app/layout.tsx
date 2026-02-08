import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LanguageProvider } from "@/lib/i18n/context"
import "./globals.css"

const _geist = Geist({ subsets: ["latin", "cyrillic"] })
const _geistMono = Geist_Mono({ subsets: ["latin", "cyrillic"] })

export const metadata: Metadata = {
  title: "eazy GPT — LLM in Telegram",
  description:
    "Access to the best LLM models from OpenAI right in Telegram. Simple, fast, and convenient. 500,000 tokens for 2500 ₽.",
  generator: "v0.app",
  keywords: ["OpenAI", "GPT", "Telegram", "bot", "LLM", "AI", "neural network", "chatbot"],
  openGraph: {
    title: "eazy GPT — LLM in Telegram",
    description: "Access to the best LLM models from OpenAI right in Telegram. Simple, fast, and convenient.",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`font-sans antialiased`}>
        <LanguageProvider>
          {children}
          <Analytics />
        </LanguageProvider>
      </body>
    </html>
  )
}
