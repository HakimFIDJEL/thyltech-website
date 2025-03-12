import Image from "next/image";
import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { Badge } from "@/components/ui/badge"

interface TeamMemberProps {
  name: string;
  role: string;
  job: string;
  image: string;
  linkedin?: string;
  email?: string;
  comp1: string;
  comp2: string;
}

export function TeamMember({
  name,
  role,
  job,
  image,
  linkedin,
  email,
  comp1,
  comp2,
}: TeamMemberProps) {
  return (
    <div className="flex items-center justify-between py-4 group hover:bg-accent rounded-md transition-colors duration-200 sm:px-4 gap-4">

      <div className="flex items-center md:space-x-6 flex-col md:flex-row space-y-6 md:space-y-0 space-x-0">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="rounded-md border border-gray-200 dark:border-gray-700 object-cover"
          />
        </div>
        <div className="md:border-r border-border md:pr-6 flex flex-col gap-1 md:gap-0 items-center md:items-start m-0">
          <h3 className="text-lg font-semibold md:text-left text-center">{name}</h3>
          <p className="text-sm text-muted-foreground md:text-left text-center">{role}</p>
          <Badge className="md:text-left text-center">{job}</Badge>
        </div>
        <div className="flex flex-col gap-1 items-center md:items-start m-0">
          <h3 className="text-sm text-muted-foreground md:text-left text-center md:border-b-0 border-b border-border pb-1 md:pb-0">{comp1}</h3>
          <p className="text-sm text-muted-foreground md:text-left text-center">{comp2}</p>
        </div>

      </div>

      <div className="flex-col sm:flex-row flex gap-2">
        {email && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button variant="outline" size="icon" asChild>
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
                  <a href={linkedin} aria-label={`Linkedin de ${name}`} target="_blank">
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
