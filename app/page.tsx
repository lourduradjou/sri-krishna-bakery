import AboutPreview from "@/components/home/about-preview";
import Categories from "@/components/home/categories";
import GalleryPreview from "@/components/home/gallery-preview";
import Hero from "@/components/home/hero";
import WhyChooseUs from "@/components/home/why-choose-us";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Categories />
      <WhyChooseUs />
      <AboutPreview />
      <GalleryPreview />
    </>
  );
}