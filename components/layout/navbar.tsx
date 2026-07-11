"use client";

import Link from "next/link";

import { motion } from "motion/react";

import { Button } from "@/components/ui/button";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

import MobileMenu from "./mobile-menu";
import NavLinks from "./nav-links";

export default function Navbar() {
  const scrolled = useScroll();

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{
        duration: 0.5,
      }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex size-11 items-center justify-center rounded-full bg-primary text-xl">
            🥐
          </div>

          <div className="leading-tight">
            <h2 className="text-lg font-bold">
              Sri Krishna
            </h2>

            <p className="text-sm text-primary">
              Bakery
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <NavLinks />
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden rounded-full px-6 md:inline-flex"
          >
            <Link href="/contact">
              Contact Us
            </Link>
          </Button>

          <MobileMenu />
        </div>
      </div>
    </motion.header>
  );
}