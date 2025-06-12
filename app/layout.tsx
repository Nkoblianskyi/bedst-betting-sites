import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner"
import BonusModal from "@/components/BonusModal"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bedste Betting Sider i Danmark 2025 | BedstBettingSites.com",
  description:
    "Find de bedste og sikreste danske betting sider. Sammenlign bonusser og læs anmeldelser af licenserede betting sider i Danmark.",
  keywords: "bedste betting sider, danske betting bonusser, sikre betting sider, betting sider med licens Danmark",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="da">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieBanner />
        <BonusModal />
      </body>
    </html>
  )
}
