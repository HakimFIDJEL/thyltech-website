import { SectionTitle } from "../components/SectionTitle";
import { FadeInComponent } from "../components/FadeInComponent";
import { FullSeparator } from "../components/FullSeparator";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function Project() {

  return (
    <section
      className="relative overflow-hidden bg-background flex items-center justify-end flex-col"
      id="projet"
    >
      <SectionTitle
        title="Le Projet Thyltech"
        subtitle="Découvrez notre vision, mission, objectifs et plus encore."
      />
      <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16 space-y-12">

        <FadeInComponent delay={200} className="space-y-2">
          <h3 className="text-xl font-semibold">Le projet</h3>
          <Separator />
          <p className="pt-3 text-md">
            Dans le cadre de la fin de notre parcours de <strong>5 années à l'IG2I Centrale Lille,</strong> notre équipe s'engage dans la réalisation d'un <strong>Projet de Fin d'Études (PFE)</strong>. Ce projet, conçu en collaboration avec une entreprise partenaire, vise à répondre à des besoins concrets par le développement de <strong>solutions innovantes et performantes</strong>.
            <br />
            <br />
            Fortement ancrés dans une démarche scientifique et professionnelle, nous mobilisons nos compétences en gestion de projet, conception technique, innovation et qualité. Ce travail inclut la recherche et l’analyse, la formalisation des spécifications fonctionnelles, le développement de prototypes et leur validation par des tests rigoureux.
            <br />
            <br />
            En parallèle, notre équipe s'est particulièrement intéressée à une thématique, l’importance croissante du <strong>sport et de la santé</strong> dans nos sociétés. Conscients des enjeux liés à l'amélioration du quotidien des sportifs, nous voyons un fort potentiel dans la conception <strong>d'outils ingénieux et performants</strong> dédiés à cette thématique. Notre volonté est de mettre notre expertise au service de projets visant à optimiser les performances, prévenir les blessures et favoriser le bien-être des pratiquants par exemple.
            <br />
            <br />
            Ainsi, nous serions enthousiastes à l'idée de collaborer avec une <strong>entreprise souhaitant explorer des solutions technologiques innovantes</strong> dans ces domaines.
            <br />
            <br />
            Notre ambition est d'offrir à notre partenaire des <strong>résultats concrets et exploitables</strong>, tout en valorisant notre savoir-faire au sein d’un projet structuré et collaboratif dans le domaine du sport et de sa science.
          </p>
        </FadeInComponent>

        <FadeInComponent delay={200} className="space-y-2">
          <h3 className="text-xl font-semibold">Les livrables principaux</h3>
          <Separator />

          <div className="flex flex-wrap gap-4 pt-3 gap-y-2">
            <Badge className="text-md">Etude de l’existant</Badge>
            <Badge className="text-md">Spécifications fonctionnelles</Badge>
            <Badge className="text-md">Conduite de projet</Badge>
            <Badge className="text-md">Conception technique</Badge>
            <Badge className="text-md">Réalisation</Badge>
            <Badge className="text-md">Méthode scientifique</Badge>
            <Badge className="text-md">Tests & Livraison de solution</Badge>
            <Badge className="text-md">Démarche qualité</Badge>
            <Badge className="text-md">Livraison techniques</Badge>
          </div>
          
        </FadeInComponent>

      </div>
    </section>
  );
}
