import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Navigation from "@/components/navigation"

export const metadata: Metadata = {
  title: "REBUILD Wellness Center - Transform Your Body & Mind",
  description:
    "Led by renowned Sri Lankan cricketer Sripali Weerakkody, REBUILD offers world-class fitness facilities including ladies-only fitness, zumba, kickboxing, and more.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-calibri">
        <Navigation />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  )
}
