import { SectionTitle } from "../components/SectionTitle";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { FadeInComponent } from "../components/FadeInComponent";

import { Target, Rocket, Eye, HelpCircle } from "lucide-react";
import {
  BellIcon,
  CalendarIcon,
  FileTextIcon,
  GlobeIcon,
  InputIcon,
} from "@radix-ui/react-icons";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { FullSeparator } from "../components/FullSeparator";

export function Project() {
  const features = [
    {
      Icon: Eye,
      name: "Notre vision",
      description:
        "Révolutionner l'éducation en combinant théorie et pratique.",
      content: (
        <>
          <p className="text-muted-foreground pt-3">
            Notre projet vise à révolutionner l'éducation en combinant les
            meilleures pratiques académiques avec les besoins de l'industrie
            technologique.
          </p>
        </>
      ),
      cta: "En savoir plus",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className:
        "lg:col-start-1 lg:col-end-1 lg:row-start-1 lg:row-end-2 bg-background",
    },
    {
      Icon: Target,
      name: "Nos objectifs",
      description: "Former la prochaine génération de leaders technologiques.",
      content: (
        <>
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
        </>
      ),
      cta: "En savoir plus",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-1 lg:col-end-1 lg:row-start-2 lg:row-end-4",
    },
    {
      Icon: Rocket,
      name: "Notre mission",
      description: "Créer un environnement d'apprentissage innovant.",
      content: (
        <>
          <p className="text-muted-foreground pt-3">
            Nous formons la prochaine génération de leaders technologiques en
            offrant une expérience d'apprentissage immersive et pratique.
          </p>
        </>
      ),
      cta: "En savoir plus",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-2 lg:row-start-1 lg:row-end-3",
    },
    {
      Icon: HelpCircle,
      name: "Questions",
      description: "Réponses aux questions fréquemment posées.",
      content: (
        <>
          <Accordion type="single" collapsible className="w-full pt-3">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left gap-4">
                Quelle est la durée du programme ?
              </AccordionTrigger>
              <AccordionContent>
                Notre programme principal dure 2 ans, avec des options de
                spécialisation supplémentaires d'un an.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left gap-4">
                Quels sont les prérequis pour rejoindre le projet ?
              </AccordionTrigger>
              <AccordionContent>
                Les candidats doivent avoir un baccalauréat en informatique ou
                dans un domaine connexe, ainsi qu'une passion pour la
                technologie et l'innovation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left gap-4">
                Y a-t-il des opportunités de stage intégrées au programme ?
              </AccordionTrigger>
              <AccordionContent>
                Oui, notre programme comprend des stages obligatoires avec nos
                partenaires industriels, offrant une expérience pratique
                précieuse.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </>
      ),
      cta: "En savoir plus",
      background: <img className="absolute -right-20 -top-20 opacity-60" />,
      className: "lg:col-start-2 lg:col-end-2 lg:row-start-3 lg:row-end-4",
    },
  ];


  return (
    <section
      className="relative overflow-hidden bg-background flex items-center justify-end flex-col"
      id="projet"
    >
      <SectionTitle
        title="Le Projet | Thyltech"
        subtitle="Découvrez notre vision, mission, objectifs et plus encore."
      />
      <FullSeparator/>
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16 space-y-12">

        <FadeInComponent>
          <p className="text-md text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </FadeInComponent>

        <FadeInComponent delay={200}>
          <BentoGrid className="lg:grid-rows-3 lg:grid-cols-2 lg:gap-4">
            {features.map((feature) => (
              <BentoCard key={feature.name} {...feature}/>
            ))}
          </BentoGrid>
        </FadeInComponent>


        {/* <div className="space-y-12">
          <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Eye className="h-6 w-6 text-primary" />
              Vision
            </h3>
            <Separator />
            <p className="text-muted-foreground pt-3">
              Notre projet vise à révolutionner l'éducation en combinant les
              meilleures pratiques académiques avec les besoins de l'industrie
              technologique.
            </p>
          </div>


          <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Target className="h-6 w-6 text-primary" />
              Mission
            </h3>
            <Separator />
            <p className="text-muted-foreground pt-3">
              Nous formons la prochaine génération de leaders technologiques en
              offrant une expérience d'apprentissage immersive et pratique.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <Rocket className="h-6 w-6 text-primary" />
              Objectifs
            </h3>
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
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <HelpCircle className="h-6 w-6 text-primary" />
              FAQ
            </h3>
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
        </div> */}
      </div>
    </section>
  );
}
