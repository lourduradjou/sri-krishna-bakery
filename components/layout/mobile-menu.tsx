"use client";

import { useState } from "react";
import Link from "next/link";

import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] =useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>

      <SheetContent side="right" className="w-72">
        <SheetHeader>
          <SheetTitle className="text-left text-xl font-bold">
            Sri Krishna Bakery
          </SheetTitle>
        </SheetHeader>

        <nav className="mt-10 flex flex-col gap-6">
          <NavLinks onNavigate={() => setOpen(false)} />
        </nav>

        <div className="mt-10">
          <Button asChild className="w-full rounded-full">
            <Link href="/contact" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}