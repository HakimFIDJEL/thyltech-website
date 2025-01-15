import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";

export function Hero() {
  return (
    // Left
    <section className="relative overflow-hidden bg-background  flex items-center justify-end flex-col">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <svg
          className="absolute h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 40 0 L 0 0 0 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeOpacity="0.1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-1 py-40 border-l border-r border-border">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Recherche de Projet de Fin d’Études
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Dans les domaines de l'industrie aérospatiale/aéronautique. Pour des
            sujets autour du logiciel embarqué et/ou de l'Intelligence
            Artificielle
          </p>
          <div className="mt-10 flex items-start gap-x-6">
            <Button size="lg" asChild>
              <a href="#learn-more">
                En savoir plus
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">
                Nous contacter
                <Mail className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="w-full  relative z-1 border-b border-t border-border ">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 container border-l border-r border-border py-8">
          <div className="flex justify-center space-x-16">
            <div className="flex items-center flex-col gap-y-2">
                <Image
                    src="/images/ig2i.png"
                    alt="School Logo"
                    width={300}
                    height={100}
                    className="h-24 w-auto"
                />
                <p className="text-muted-foreground text-sm">
                    Centrale Lille - IG2I
                </p>

            </div>
            <Separator orientation="vertical" className="h-100" />
            <div className="flex items-center flex-col gap-y-2">
                <Image
                src="/images/cti.png"
                alt="CTI Logo"
                width={300}
                height={100}
                className="h-24 w-auto"
                />
                <p className="text-muted-foreground text-sm">
                    Commission des Titres d'Ingénieur
                </p>
            </div>
            <Separator orientation="vertical" className="h-100" />
            <div className="flex items-center flex-col gap-y-2">
                <Image
                src=""
                alt="Notre logo"
                width={300}
                height={100}
                className="h-24 w-auto"
                />
                <p className="text-muted-foreground text-sm">
                    Notre logo
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
}
