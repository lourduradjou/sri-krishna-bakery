import SectionHeading from "@/components/shared/section-heading";
import SectionWrapper from "@/components/shared/section-wrapper";

import { FEATURES } from "@/lib/constants";

import FeatureCard from "./feature-card";

export default function WhyChooseUs() {
  return (
    <section className="bg-muted/40 py-24">
      <SectionWrapper>
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Freshness You Can Taste"
          description="We're passionate about creating delicious bakery products with quality ingredients, skilled craftsmanship, and a warm customer experience."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </SectionWrapper>
    </section>
  );
}