import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Card } from "@/components/ui/card";

interface CategoryCardProps {
  title: string;
  image: string;
}

export default function CategoryCard({
  title,
  image,
}: CategoryCardProps) {
  return (
    <Card className="group overflow-hidden rounded-3xl border-0 p-0 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      <Link href="/menu" className="relative block aspect-[4/5]">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between p-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {title}
            </h3>

            <p className="mt-1 text-sm text-white/70">
              Explore Collection
            </p>
          </div>

          <div className="rounded-full bg-white/15 p-3 backdrop-blur transition-transform duration-300 group-hover:rotate-45">
            <ArrowUpRight className="size-5 text-white" />
          </div>
        </div>
      </Link>
    </Card>
  );
}