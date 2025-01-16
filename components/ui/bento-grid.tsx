import { ReactNode } from "react";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";


import { Separator } from "@/components/ui/separator";

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

type BentoCardProps = {
  name: string;
  className: string;
  background: ReactNode;
  content: ReactNode;
  Icon: React.ElementType;
  description: string;
  cta: string;
};

const BentoGrid = ({ children, className }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
    >
      {children}
    </div>
  );
};

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  content,
  description,
  cta,
}: BentoCardProps) => (


  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
      // light styles
      "[box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "transform-gpu dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      className
    )}
  >

      <div>{background}</div>
      <div className="
        pointer-events-none 
        z-10 
        flex 
        transform-gpu 
        flex-col 
        gap-1 p-6 
        transition-all 
        duration-300 
        lg:group-hover:-translate-y-10
      ">
        <Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out lg:group-hover:scale-75" />
        <h3 className="text-xl font-semibold text-neutral-700 dark:text-neutral-300">
          {name}
        </h3>
        <p className="max-w-lg text-neutral-400">{description}</p>
      </div>

      <div
        className="
        pointer-events-none 
        absolute 
        flex 
        w-full 
        flex-row 
        items-center 
        p-4 
        transition-all 
        duration-300 
        
        top-1
        right-1
        justify-end
        
        lg:justify-start
        lg:top-auto
        lg:right-auto
        lg:opacity-0 
        lg:transform-gpu 
        lg:translate-y-10 
        lg:bottom-0 
        lg:group-hover:translate-y-0
        
        group-hover:opacity-100"
      >
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="default"
              asChild
              size="sm"
              className="pointer-events-auto"
            >
              <div className="cursor-pointer flex items-center">
                {cta}
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </div>
            </Button>
          </DialogTrigger>
          <DialogContent className="w-3xl max-w-3xl">
            <DialogHeader>
              <DialogTitle>{ name }</DialogTitle>
              <Separator />
              { content }
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      {/* <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" /> */}

  
  
  </div>
);

export { BentoCard, BentoGrid };
