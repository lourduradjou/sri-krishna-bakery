"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import SectionWrapper from "../shared/section-wrapper";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background Blobs */}
      <div className="absolute left-10 top-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />

      <SectionWrapper>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge
              variant="secondary"
              className="mb-6 rounded-full px-4 py-2"
            >
              Freshly Baked Every Day
            </Badge>

            <h1 className="text-5xl font-bold leading-tight lg:text-7xl">
              Freshly Baked
              <span className="block text-primary">
                Happiness
              </span>
              Every Day.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium, quidem. Fresh breads, cakes, pastries and snacks
              crafted with passion and served with love.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full"
              >
                <Link href="/menu">
                  Explore Menu
                  <ArrowRight className="ml-2 size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full"
              >
                <Link href="/contact">
                  Contact Us
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center gap-4">
              <div className="flex text-amber-400">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="size-5 fill-current"
                  />
                ))}
              </div>

              <p className="text-sm text-muted-foreground">
                Loved by families across Puducherry.
              </p>
            </div>
          </motion.div>

          {/* Right */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-3xl" />

            <Image
              src="/hero/bread.jpg"
              alt="Fresh Bread"
              width={700}
              height={700}
              priority
              className="relative mx-auto object-contain"
            />
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}