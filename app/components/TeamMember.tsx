import Image from 'next/image'
import { Github, Mail } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface TeamMemberProps {
  name: string
  role: string
  job: string
  image: string
  github?: string
  email?: string
}

export function TeamMember({ name, role, job, image, github, email }: TeamMemberProps) {
  return (
    <div className="flex items-center justify-between py-4 group hover:bg-accent rounded-md transition-colors duration-200 px-4">
      <div className="flex items-center space-x-4">
        <div className="w-16 h-16 flex-shrink-0">
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={64}
            height={64}
            className="rounded-md border border-gray-200 dark:border-gray-700 object-cover"
          />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <p className="text-sm text-muted-foreground">{role}</p>
          <p className="text-xs text-muted-foreground">{job}</p>
        </div>
      </div>
      <div className="flex space-x-2">
        {github && (
          <Button variant="outline" size="icon" asChild>
            <a href={github} target="_blank" rel="noopener noreferrer" aria-label={`GitHub de ${name}`}>
              <Github className="h-4 w-4" />
            </a>
          </Button>
        )}
        {email && (
          <Button variant="outline" size="icon" asChild>
            <a href={`mailto:${email}`} aria-label={`Email de ${name}`}>
              <Mail className="h-4 w-4" />
            </a>
          </Button>
        )}
      </div>
    </div>
  )
}

