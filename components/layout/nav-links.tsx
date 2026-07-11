"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface NavLinksProps {
  onNavigate?: () => void;
}

export default function NavLinks({ onNavigate }: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map((link) => {
        const isActive = pathname === link.href;

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onNavigate}
            className={cn(
              "group relative text-sm font-medium transition-colors duration-300",
              isActive
                ? "text-primary"
                : "text-muted-foreground hover:text-primary"
            )}
          >
            {link.label}

            <span
              className={cn(
                "absolute -bottom-1 left-0 h-[2px] rounded-full bg-primary transition-all duration-300",
                isActive ? "w-full" : "w-0 group-hover:w-full"
              )}
            />
          </Link>
        );
      })}
    </>
  );
}