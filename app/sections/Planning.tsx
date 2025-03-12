import { Separator } from "@/components/ui/separator";
import { FadeInComponent } from "../components/FadeInComponent";
import { FullSeparator } from "../components/FullSeparator";
import { SectionTitle } from "../components/SectionTitle";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Livrables = [
  {
    'title' : "Dossier état de l'art",
    'description' : "Ce dossier a pour objectif de mener une recherche approfondie et une analyse de thèses et de publications scientifiques portant sur des projets similaires au nôtre.",
  },
  {
    'title' : "Innovation",
    'description' : "Dans le cadre du dossier état de l’art, l’innovation consiste à identifier de nouvelles pistes, méthodes ou technologies permettant d’apporter des améliorations significatives et de répondre de manière novatrice aux défis posés par notre projet. ",
  },
  {
    'title' : "Spécifications",
    'description' : "Le projet commencera réellement à partir de septembre 2025 par la rédaction des spécifications fonctionnelles pour définir précisément avec vous les besoins et objectifs.",
  },
  {
    'title' : "Conception",
    'description' : "Ensuite, la phase de conception technique permettra de traduire ces spécifications en solutions techniques détaillées.",
  },
  {
    'title' : "Réalisation",
    'description' : "La phase de réalisation consistera à développer et intégrer les différents composants selon les solutions rédigées.",
  },
  {
    'title' : "Validation",
    'description' : "Les validations garantiront la conformité et la qualité du projet final.",
  },
  {
    'title' : "Livraison",
    'description' : "Enfin, le projet sera livré en fin janvier 2026 à l’issue d’une soutenance de projet.",
  },
  {
    'title' : "Démarche projet",
    'description' : "La démarche projet permet la définition des méthodes et des outils à utiliser, afin d’assurer une gestion cohérente et structurée tout au long du processus que nous allons mettre en place.",
  },
  {
    'title' : "Gestion de projet",
    'description' : "La gestion de projet que nous allons mettre en place permettra d’organiser, planifier et répartir les tâches de manière optimale pour assurer une exécution fluide et un suivi efficace de notre projet.",
  },
  {
    'title' : "Démarche qualité",
    'description' : "La démarche qualité permet de définir l'ensemble des règles et des processus à suivre pour assurer la bonne réalisation du projet, en garantissant le respect des standards et l'atteinte des objectifs fixés."
  }
]

export function Livrable({ title, description }: { title: string, description: string }) {
  return (
    <div className="flex flex-col gap-0">
      <h4 className="text-md font-semibold text-transparent bg-gradient-to-r from-foreground to-primary bg-clip-text w-fit">
        {title}
      </h4>
      <p className="text-sm">
        {description}
      </p>
    </div>
  )
}

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
            <span>2025</span>
          </div>

          {/* Contenu - Mois */}
          <div className="flex items-center gap-2 flex-wrap">
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
            Le projet est en phase de préparation depuis{" "}
            <strong>janvie 2025</strong>. Nous sommes à la recherche d’une{" "}
            <strong>entreprise partenaire</strong> avec laquelle nous pourrons
            cadrer le sujet du projet, en vue de finaliser et de formaliser une
            convention signée par toutes les parties d’ici fin{" "}
            <strong>juin 2025</strong>.
          </p>
        </FadeInComponent>
        <FadeInComponent className="space-y-4 flex flex-col w-full space-y-4">
          {/* Titre */}
          <h3 className="text-xl font-semibold">
            Spécifications, Conception, Réalisation, Validations et Livraison du
            Projet
          </h3>
          <Separator />

          {/* Contenu - Mois */}
          <div className="flex gap-6 w-full flex-0 items-center md:flex-row flex-col ">
            {/* Mois */}
            <div className="flex flex-col gap-2 items-center flex-0 border-border md:border-r border-r-0 border-b md:border-b-0 pr-0 md:pr-6 pb-6 md:pb-0">
              {/* Années */}
              <div className="flex items-center space-x-4">
                <Separator className="w-10 bg-current" />
                <span className="whitespace-nowrap">2025 - 2026</span>
              </div>

              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Septembre
              </Badge>
              <ChevronDown />
              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Octobre
              </Badge>
              <ChevronDown />
              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Novembre
              </Badge>
              <ChevronDown />
              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Décembre
              </Badge>
              <ChevronDown />
              <Badge className="text-md w-28 flex-shrink-0 justify-center">
                Janvier
              </Badge>
            </div>


            <div className="flex flex-col gap-4 items-start">

              {Livrables.map((livrable, index) => (
                <FadeInComponent key={index}>
                  <Livrable {...livrable} />
                </FadeInComponent>
              ))}

            </div>
          </div>
        </FadeInComponent>
      </div>
    </section>
  );
}
