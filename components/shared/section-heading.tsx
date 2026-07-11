interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: SectionHeadingProps) {
  return (
    <div
      className={[
        "mb-14 max-w-2xl",
        align === "center"
          ? "mx-auto text-center"
          : "text-left",
      ].join(" ")}
    >
      {eyebrow && (
        <p className="mb-3 font-medium uppercase tracking-[0.2em] text-primary">
          {eyebrow}
        </p>
      )}

      <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
        {title}
      </h2>

      {description && (
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  );
}