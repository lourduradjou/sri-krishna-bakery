import type { Metadata } from "next"
import { Poppins } from "next/font/google"

import "./globals.css"

import Navbar from "@/components/layout/navbar"
import Footer from "@/components/layout/footer"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sri Krishna Bakery",
  description:
    "Freshly baked cakes, breads, pastries and snacks made with love every day.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} bg-background text-foreground antialiased`}
      >
        <Navbar />

        <main className="pt-20">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
