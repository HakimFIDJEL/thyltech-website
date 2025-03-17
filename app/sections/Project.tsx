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
          <p className="pt-3 text-md text-muted-foreground">
            Dans le cadre de notre{" "}
            <strong>Projet de Fin d'Études Ingénieur (PFE)</strong> à{" "}
            <strong>l'IG2I de Centrale Lille Institut</strong>, qui représente {" "}
            <strong>1260 heures de travail consacrées au projet</strong>, soit{" "}
            <strong>252 heures par membre dont 42 heures d’encadrement</strong>{" "}
            par des professeurs et experts, se déroulant de
            <strong>septembre 2025 à janvier 2026</strong>, nous avons choisi
            d'explorer une problématique au cœur des préoccupations modernes :{" "}
            <strong>
              comment la technologie peut-elle transformer positivement le sport
              et la santé ?
            </strong>
            <br />
            <br />
            Aujourd'hui, les entreprises évoluant dans ce domaine recherchent
            des <strong>solutions concrètes</strong> pour répondre à des{" "}
            <strong>
              défis critiques : maximiser les performances des athlètes,
              prévenir les blessures
            </strong>{" "}
            ou encore{" "}
            <strong>
              démocratiser l'accès à des outils de bien-être personnalisés
            </strong>
            . Ce besoin est d'autant plus pressant dans un marché compétitif où{" "}
            <strong>l'innovation est clé</strong>.
            <br />
            <br />
            C'est dans cet esprit que notre équipe propose un projet alliant{" "}
            <strong>expertise technique</strong> et{" "}
            <strong>vision scientifique</strong>, pour concevoir des outils
            technologiques
            <strong> avancés</strong>. Notre démarche intègrerait :
            <br />
            <br />-{" "}
            <strong>
              La collecte et l’analyse de données biomécaniques et
              physiologiques
            </strong>{" "}
            pour proposer des solutions adaptées et personnalisées.
            <br />-{" "}
            <strong>
              Le développement d'algorithmes prédictifs ou d’aide à la décision
            </strong>{" "}
            pour accompagner sportifs et professionnels.
            <br />- <strong>
              La conception de prototypes fonctionnels
            </strong>{" "}
            répondant à des problématiques réelles identifiées en partenariat
            avec l’entreprise.
            <br />
            <br />
            Nous pensons que ces solutions peuvent non seulement renforcer{" "}
            <strong>la compétitivité des entreprises</strong> dans le secteur,
            mais aussi <strong>générer un impact tangible</strong> sur le
            bien-être des utilisateurs finaux. Collaborer avec nous, c'est
            bénéficier d'une{" "}
            <strong>équipe motivée, multidisciplinaire,</strong> capable
            d’apporter une <strong>expertise pointue en ingénierie</strong> tout
            en répondant aux <strong>besoins stratégiques</strong> d'un marché
            en pleine mutation
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
            <Badge className="text-md">Méthode scientifique</Badge>
            <Badge className="text-md">Réalisation</Badge>
            <Badge className="text-md">Démarche qualité</Badge>
            <Badge className="text-md">Tests & Livraison de solution</Badge>
            <Badge className="text-md">Livraison techniques</Badge>
          </div>
        </FadeInComponent>
      </div>
    </section>
  );
}
