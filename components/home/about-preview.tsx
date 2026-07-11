"use client";

import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import SectionWrapper from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

export default function AboutPreview() {
  return (
    <section className="py-24">
      <SectionWrapper>
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -left-6 -top-6 h-32 w-32 rounded-full bg-primary/10 blur-3xl" />

            <Image
              src="/hero/bread.jpg"
              alt="Bakery"
              width={700}
              height={700}
              className="rounded-3xl object-cover shadow-xl"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About Us
            </p>

            <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
              Baking Fresh
              <span className="block text-primary">
                Memories Every Day
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, dicta. Fresh breads, cakes, pastries and snacks
              are prepared daily with quality ingredients and served with
              warmth.
            </p>

            <p className="mt-5 text-muted-foreground">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis dignissimos vero, quisquam recusandae
              exercitationem laborum.
            </p>

            <Button
              asChild
              className="mt-10 rounded-full"
            >
              <Link href="/about">
                Learn More
                <ArrowRight className="ml-2 size-4" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </SectionWrapper>
    </section>
  );
}