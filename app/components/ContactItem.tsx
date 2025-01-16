import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface ContactItemProps {
  name: string;
  href: string;
  icon: React.ReactNode;
}

export function ContactItem({ name, href, icon }: ContactItemProps) {
  return (
    <a
      href={href}
      className="flex items-center justify-between py-4 group hover:bg-accent rounded-md transition-colors duration-200 px-4"
    >
      <div className="flex items-center space-x-4">
        <div>
          <h3 className="text-sm font-medium">Contactez-nous par {name}</h3>
        </div>
      </div>

      <Button size="icon" asChild>
        {icon}
      </Button>
    </a>
  );
}
