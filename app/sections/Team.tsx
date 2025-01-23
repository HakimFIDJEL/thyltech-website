import { ArrowRight } from "lucide-react";
import { FadeInComponent } from "../components/FadeInComponent";
import { FullSeparator } from "../components/FullSeparator";
import { SectionTitle } from "../components/SectionTitle";
import { TeamMember } from "../components/TeamMember";
import { Separator } from "@/components/ui/separator";

const teamMembers = [
  {
    name: "Tom Tellier--Caloone",
    role: "Chef de projet - Relation Client",
    job: "Data Scientist chez ArcelorMittal",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/melestyl/",
    email: "tom.tellier--caloone@ig2i.centralelille.fr",
  },
  {
    name: "Théo Colin",
    role: "Ingénieur Qualité",
    job: "Apprenti chef de projet intégrateur chez ARC France",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/theo-colin/",
    email: "theo.colin@ig2i.centralelille.fr",
  },
  {
    name: "Léonore Legrand",
    role: "Ingénieur Conception - Adjoint Qualité",
    job: "Ingénieur d'études chez Vilogia",
    image: "/placeholder.svg?height=300&width=300",
    // linkedin: "https://github.com/carol",
    email: "leonore.legrand@ig2i.centralelille.fr",
  },
  {
    name: "Younes Boughriet",
    role: "Ingénieur Technique - Adjoint Conception",
    job: "Ingénieur Logiciel chez Luminess",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/younes-boughriet-724147231/%60",
    email: "younes.boughriet@ig2i.centralelille.fr",
  },
  {
    name: "Hakim Fidjel",
    role: "Ingénieur Technique - Adjoint Projet",
    job: "Ingénieur Fullstack chez Réservoir Digital",
    image: "/placeholder.svg?height=300&width=300",
    linkedin: "https://www.linkedin.com/in/hakim-fidjel-6a4004256/",
    email: "hakim.fidjel@ig2i.centralelille.fr",
  },
];

const motivations = [
  "Établir une collaboration fiable avec vous.",
  "Élaborer un projet adapté à votre entreprise.",
  "Exploiter nos compétences techniques et méthodologiques.",
  "Proposer une solution innovante et ingénieuse.",
  "Recevoir vos conseils et fusionner avec votre expertise.",
];

const axes_interets = [
  "Particulièrement intéressés par le sport et sa science.",
  "Convaincus que le sport joue un rôle important dans la santé.",
  "L'innovation est vitale pour rendre le sport accessible.",
  "L’IA et la Data sont essentiels et porteurs d’avenir dans le sport.",
  "L’utilisation de l’IOT & ses applications dans le sport.",
];

export function Team() {
  return (
    <section
      className="relative overflow-hidden bg-background  flex items-center justify-end flex-col"
      id="équipe"
    >
      <SectionTitle
        title="L'Équipe Thylt"
        subtitle="Découvrez les talents qui font notre force"
      />
      <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16">
        <FadeInComponent className="space-y-2">
          <h3 className="text-xl font-semibold">L'équipe</h3>
          <Separator />
          <div className="space-y-0 pt-3">
            {teamMembers.map((member, index) => (
              <FadeInComponent delay={200} key={member.name}>
                <div>
                  <TeamMember {...member} />
                  {index < teamMembers.length - 1 && <Separator />}
                </div>
              </FadeInComponent>
            ))}
          </div>
        </FadeInComponent>

        <div className="pt-12 space-y-12">
          <FadeInComponent className="space-y-2">
            <h3 className="text-xl font-semibold">Nos motivations</h3>
            <Separator />

            <div className="pt-3 flex flex-col space-y-2">
              {motivations.map((motivation, index) => (
                <FadeInComponent delay={200} key={`motivation-${index}`}>
                  <div className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-accent transition-all duration-200 hover:pl-6">
                    <ArrowRight size={24} className="flex-shrink-0" />
                    <div>{motivation}</div>
                  </div>
                </FadeInComponent>
              ))}
            </div>
          </FadeInComponent>

          <FadeInComponent className="space-y-2">
            <h3 className="text-xl font-semibold">Nos axes d'intérêts</h3>
            <Separator />

            <div className="pt-3 flex flex-col space-y-2">
              {axes_interets.map((axe, index) => (
                <FadeInComponent delay={200} key={`axe-${index}`}>
                  <div className="flex items-center space-x-4 p-3 rounded-lg border border-border hover:bg-accent transition-all duration-200 hover:pl-6">
                    <ArrowRight size={24} className="flex-shrink-0" />
                    <div>{axe}</div>
                  </div>
                </FadeInComponent>
              ))}
            </div>

          </FadeInComponent>
        </div>

      </div>
    </section>
  );
}
