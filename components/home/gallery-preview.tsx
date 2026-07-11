import Image from "next/image";
import Link from "next/link";

import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/shared/section-heading";
import SectionWrapper from "@/components/shared/section-wrapper";
import { Button } from "@/components/ui/button";

import { GALLERY_IMAGES } from "@/lib/constants";

export default function GalleryPreview() {
  return (
    <section className="py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Gallery"
          title="Take A Look Around"
          description="A glimpse of our freshly baked delights, delicious treats, and welcoming bakery atmosphere."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {GALLERY_IMAGES.map((image) => (
            <div
              key={image.src}
              className="group relative aspect-square overflow-hidden rounded-3xl"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition duration-500 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/10" />
            </div>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button asChild className="rounded-full">
            <Link href="/gallery">
              View Gallery
              <ArrowRight className="ml-2 size-4" />
            </Link>
          </Button>
        </div>
      </SectionWrapper>
    </section>
  );
}