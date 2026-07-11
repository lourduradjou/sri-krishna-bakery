import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      className={cn(
        "mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-10",
        className
      )}
    >
      {children}
    </section>
  );
}