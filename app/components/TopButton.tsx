"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import react, { useEffect, useState } from "react";

export function TopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`transition-all duration-500 transform fixed bottom-8 right-12 ${
        showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      onClick={handleClick}
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button size="icon">
              <ArrowUp size={24} />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Retour en haut</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
}
