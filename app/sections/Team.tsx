import { FadeInComponent } from "../components/FadeInComponent"
import { FullSeparator } from "../components/FullSeparator"
import { SectionTitle } from "../components/SectionTitle"
import { TeamMember } from "../components/TeamMember"
import { Separator } from "@/components/ui/separator"

const teamMembers = [
  { name: "Alice Johnson", role: "CEO", job: "Stratégie & Vision", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/alice", email: "alice@example.com" },
  { name: "Bob Smith", role: "CTO", job: "Innovation Technique", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/bob", email: "bob@example.com" },
  { name: "Carol Williams", role: "CFO", job: "Gestion Financière", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/carol", email: "carol@example.com" },
  { name: "David Brown", role: "COO", job: "Opérations", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/david", email: "david@example.com" },
  { name: "Eva Martinez", role: "CMO", job: "Marketing & Communication", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/eva", email: "eva@example.com" },
  { name: "Frank Lee", role: "CIO", job: "Systèmes d'Information", image: "/placeholder.svg?height=300&width=300", linkedin: "https://github.com/frank", email: "frank@example.com" },
]

export function Team() {
  return (
    <section className="relative overflow-hidden bg-background  flex items-center justify-end flex-col" id="équipe">
        <SectionTitle 
          title="L'Équipe | Thylt" 
          subtitle="Découvrez les talents qui font notre force"
        />
        <FullSeparator />
      <div className="container px-4 md:px-6 border-l border-r border-border  pt-8 pb-16">
        
        <div className="space-y-0">
          {teamMembers.map((member, index) => (
            <FadeInComponent delay={200}>
              <div key={member.name}>
                <TeamMember {...member} />
                {index < teamMembers.length - 1 && <Separator />}
              </div>
            </FadeInComponent>
          ))}
        </div>
      </div>
    </section>
  )
}