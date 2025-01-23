import { Separator } from "@/components/ui/separator";
import { FadeInComponent } from "../components/FadeInComponent";
import { FullSeparator } from "../components/FullSeparator";
import { SectionTitle } from "../components/SectionTitle";
import { ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function Planning() {
  return (
    <section
      className="relative overflow-hidden bg-background flex items-center justify-end flex-col"
      id="planning"
    >
      <SectionTitle
        title="Le Planning"
        subtitle="Découvrez le calendrier de notre projet"
      />
      <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16 space-y-12">
        <FadeInComponent className="space-y-4 flex flex-col w-full space-y-4"> 
          {/* Titre */}
          <h3 className="text-xl font-semibold">
            Recherche de Partenaires, Cadrage du Projet et Convention
          </h3>
          <Separator />

          {/* Années */}
          <div className="flex items-center space-x-4">
            <Separator className="w-10 bg-current" />
            <span>2024 - 2025</span>
          </div>

          {/* Contenu - Mois */}
          <div className="flex items-center gap-2 flex-wrap">
            <Badge className="text-md">Décembre</Badge>
            <ChevronRight />
            <Badge className="text-md">Janvier</Badge>
            <ChevronRight />
            <Badge className="text-md">Février</Badge>
            <ChevronRight />
            <Badge className="text-md">Mars</Badge>
            <ChevronRight />
            <Badge className="text-md">Avril</Badge>
            <ChevronRight />
            <Badge className="text-md">Mai</Badge>
            <ChevronRight />
            <Badge className="text-md">Juin</Badge>
          </div>

          <p className="text-sm">
            Le projet est en phase de préparation depuis <strong>décembre 2024</strong>. Nous sommes à la recherche d’une <strong>entreprise partenaire</strong> avec laquelle nous pourrons cadrer le sujet du projet, en vue de finaliser et de formaliser une convention signée par toutes les parties d’ici fin <strong>juin 2025</strong>.
          </p>

        </FadeInComponent>
        <FadeInComponent className="space-y-4 flex flex-col w-full space-y-4"> 
          {/* Titre */}
          <h3 className="text-xl font-semibold">
            Spécifications, Conception, Réalisation, Validations et Livraison du Projet
          </h3>
          <Separator />

          {/* Années */}
          <div className="flex items-center space-x-4">
            <Separator className="w-10 bg-current" />
            <span>2025 - 2026</span>
          </div>

          {/* Contenu - Mois */}
          <div className="flex flex-col gap-4 w-full">
            
            {/* Spécifications */}
            <div className="flex items-center gap-4">
              <Badge className="text-md w-28 flex-shrink-0 justify-center">Septembre</Badge>
              <Separator className="sm:w-10 bg-current w-4" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-transparent bg-[linear-gradient(to_right,_var(--tw-gradient-from),_var(--tw-gradient-to)_50%)] from-foreground to-primary bg-clip-text">
                  Spécifications
                </h4>
                <p className="text-sm">
                  Le projet commencera réellement à partir de septembre 2025 par la rédaction des <strong>spécifications fonctionnelles</strong>pour définir précisément  avec vous les besoins et objectifs.
                </p>
              </div>
            </div>


            {/* Conception */}
            <div className="flex items-center gap-4">
              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Octobre
              </Badge>
              <Separator className="sm:w-10 bg-current w-4" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-transparent bg-[linear-gradient(to_right,_var(--tw-gradient-from),_var(--tw-gradient-to)_50%)] from-foreground to-primary bg-clip-text">
                  Conception
                </h4>
                <p className="text-sm">
                Ensuite, la phase de <strong>conception technique</strong> permettra de traduire ces spécifications en solutions techniques détaillées. 
                </p>
              </div>
            </div>

            {/* Réalisation */}
            <div className="flex items-center gap-4">
              <Badge className="text-md w-28 flex-shrink-0 justify-center">Novembre</Badge>
              <Separator className="sm:w-10 bg-current w-4" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-transparent bg-[linear-gradient(to_right,_var(--tw-gradient-from),_var(--tw-gradient-to)_50%)] from-foreground to-primary bg-clip-text">
                  Réalisation
                </h4>
                <p className="text-sm">
                La phase de <strong>réalisation</strong> consistera à développer et intégrer les différents composants selon les solutions rédigées.
                </p>
              </div>
            </div>

            {/* Validations */}
            <div className="flex items-center gap-4">
              <Badge className="text-md w-28 flex-shrink-0 justify-center">Décembre</Badge>
              <Separator className="sm:w-10 bg-current w-4" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-transparent bg-[linear-gradient(to_right,_var(--tw-gradient-from),_var(--tw-gradient-to)_50%)] from-foreground to-primary bg-clip-text">
                  Validations
                </h4>
                <p className="text-sm">
                  Les <strong>validations</strong> garantiront la conformité et la qualité du projet final.
                </p>
              </div>
            </div>

            {/* Livraison */}
            <div className="flex items-center gap-4">
              <Badge className="text-md w-28 flex-shrink-0 justify-center">Janvier</Badge>
              <Separator className="sm:w-10 bg-current w-4" />
              <div className="flex flex-col">
                <h4 className="text-md font-semibold text-transparent bg-[linear-gradient(to_right,_var(--tw-gradient-from),_var(--tw-gradient-to)_50%)] from-foreground to-primary bg-clip-text">
                  Livraison
                </h4>
                <p className="text-sm">
                  Enfin, le projet sera <strong>livré</strong> en fin janvier 2026 à l’issue d’une soutenance de projet.
                </p>
              </div>
            </div>


          </div>


        </FadeInComponent>
      </div>
    </section>
  );
}
