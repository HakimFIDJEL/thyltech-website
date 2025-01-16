import { cn } from "@/lib/utils";

import { FadeInComponent } from "./FadeInComponent";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({
  title,
  subtitle,
  className,
}: SectionTitleProps) {
  return (
    <div
      className={cn(
        "container px-4 md:px-6 border-l border-r border-border pt-16 pb-12",
        className
      )}
    >
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex">
          <span className="bg-background pr-4 text-4xl font-semibold text-foreground leading-none">
            <FadeInComponent>{title}</FadeInComponent>
          </span>
        </div>
      </div>

      {subtitle && (
        <FadeInComponent>
          <span className="bg-background pr-4 text-sm text-muted-foreground">
            {subtitle}
          </span>
        </FadeInComponent>
      )}
    </div>
  );
}
