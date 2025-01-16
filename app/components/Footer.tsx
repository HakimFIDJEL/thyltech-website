import Link from 'next/link'
import { 
    Facebook, 
    Twitter, 
    Instagram, 
    Linkedin 
} from 'lucide-react'
import { FullSeparator } from './FullSeparator'

export function Footer() {

    const currentYear = new Date().getFullYear()

  return (
    <footer className="w-full mx-auto flex items-center justify-center flex-col">
      <div className="container px-4 md:px-6 py-12 border-l border-r border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">IG2I Centrale Lille</h3>
            <p className="text-sm text-muted-foreground">Formation d'excellence en ingénierie informatique</p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Accueil</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Notre projet</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">L'école</Link></li>
              <li><Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Nous contacter</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="mailto:contact@ig2i.fr" className="text-muted-foreground hover:text-foreground transition-colors">contact@ig2i.fr</a></li>
              <li><a href="tel:+33320335455" className="text-muted-foreground hover:text-foreground transition-colors">+33 3 20 33 54 55</a></li>
              <li><address className="text-muted-foreground not-italic">13 Rue Jean Souvraz, 62300 Lens</address></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Suivez-nous</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <FullSeparator />
      <div className="container px-4 md:px-6 py-8 border-l border-r border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">&copy; { currentYear } IG2I Centrale Lille. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

