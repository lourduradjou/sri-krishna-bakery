import SectionWrapper from "@/components/shared/section-wrapper";
import SectionHeading from "@/components/shared/section-heading";
import { CATEGORIES } from "@/lib/constants";

import CategoryCard from "./category-card";

export default function Categories() {
  return (
    <section className="py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Our Menu"
          title="Something Fresh For Everyone"
          description="From freshly baked breads and pastries to delicious cakes and savoury snacks, discover a variety of treats prepared every day."
        />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              image={category.image}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}