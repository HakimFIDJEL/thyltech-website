import { SectionTitle } from "../components/SectionTitle";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function Project() {
  return (
    <section className="relative overflow-hidden bg-background flex items-center justify-end flex-col">
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16">
        <SectionTitle
          title="Le Projet"
          className="mb-12"
          subtitle="Découvrez notre vision, mission, objectifs et plus encore."
        />

        <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Vision</h3>
            <Separator />
            <p className="text-muted-foreground pt-3">
              Notre projet vise à révolutionner l'éducation en combinant les
              meilleures pratiques académiques avec les besoins de l'industrie
              technologique.
            </p>
          </div>


          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Mission</h3>
            <Separator />
            <p className="text-muted-foreground pt-3">
              Nous formons la prochaine génération de leaders technologiques en
              offrant une expérience d'apprentissage immersive et pratique.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold">Objectifs</h3>
            <Separator />
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground pt-3">
              <li>
                Développer un curriculum innovant aligné sur les besoins de
                l'industrie
              </li>
              <li>
                Établir des partenariats solides avec des entreprises
                technologiques leaders
              </li>
              <li>
                Créer un environnement d'apprentissage collaboratif et stimulant
              </li>
              <li>
                Favoriser l'innovation et l'entrepreneuriat chez nos étudiants
              </li>
            </ul>
          </div>


          <div className="space-y-2">
            <h3 className="text-xl font-semibold">FAQ</h3>
            <Separator />
            <Accordion type="single" collapsible className="w-full pt-3">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Quelle est la durée du programme ?
                </AccordionTrigger>
                <AccordionContent>
                  Notre programme principal dure 2 ans, avec des options de
                  spécialisation supplémentaires d'un an.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Quels sont les prérequis pour rejoindre le projet ?
                </AccordionTrigger>
                <AccordionContent>
                  Les candidats doivent avoir un baccalauréat en informatique ou
                  dans un domaine connexe, ainsi qu'une passion pour la
                  technologie et l'innovation.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Y a-t-il des opportunités de stage intégrées au programme ?
                </AccordionTrigger>
                <AccordionContent>
                  Oui, notre programme comprend des stages obligatoires avec nos
                  partenaires industriels, offrant une expérience pratique
                  précieuse.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
