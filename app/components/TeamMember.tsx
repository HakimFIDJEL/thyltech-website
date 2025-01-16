import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface TeamMemberProps {
  name: string;
  role: string;
  job: string;
  image: string;
  linkedin?: string;
  email?: string;
}

export function TeamMember({
  name,
  role,
  job,
  image,
  linkedin,
  email,
}: TeamMemberProps) {
  return (
    <div className="flex items-center justify-between py-4 group hover:bg-accent rounded-md transition-colors duration-200 px-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="rounded-md border border-gray-200 dark:border-gray-700 object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-xs text-muted-foreground">{job}</p>
        </div>
      </div>
      <div className="flex gap-2">
        {email && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="secondary" size="icon" asChild>
                  <a href={`mailto:${email}`} aria-label={`Email de ${name}`}>
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Email de {name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {linkedin && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="default" size="icon" asChild>
                  <a href={linkedin} aria-label={`Linkedin de ${name}`}>
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Linkedin de {name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
