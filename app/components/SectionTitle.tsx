import { cn } from "@/lib/utils";

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
    <div className={cn("py-4", className)}>
      <div className="relative py-2">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-300" />
        </div>

        <div className="relative flex">
          <span className="bg-background pr-4 text-4xl font-semibold text-foreground">
            {title}
          </span>
        </div>
      </div>

      {subtitle && (
        <span className="bg-background pr-4 mt-2 text-sm text-muted-foreground">
          {subtitle}
        </span>
      )}
    </div>
  );
}
