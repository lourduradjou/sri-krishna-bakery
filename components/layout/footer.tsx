import Link from "next/link";

import SectionWrapper from "@/components/shared/section-wrapper";

import { NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t bg-secondary/40">
      <SectionWrapper className="py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold">
              Sri Krishna
              <span className="block text-primary">
                Bakery
              </span>
            </h2>

            <p className="mt-4 leading-7 text-muted-foreground">
              Fresh breads, cakes, pastries and snacks prepared
              daily with quality ingredients and served with care.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Quick Links
            </h3>

            <div className="flex flex-col gap-3">
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="transition-colors hover:text-primary"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-5 text-lg font-semibold">
              Visit Us
            </h3>

            <div className="space-y-3 text-muted-foreground">
              <p>📍 123 Bakery Street, Puducherry</p>
              <p>📞 +91 98765 43210</p>
              <p>🕒 Mon - Sun | 7:00 AM - 9:30 PM</p>
              <p>✉️ hello@srikrishnabakery.com</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t pt-6 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Sri Krishna Bakery. All rights reserved.
        </div>
      </SectionWrapper>
    </footer>
  );
}