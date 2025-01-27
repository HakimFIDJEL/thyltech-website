import Link from "next/link";
import { FullSeparator } from "./FullSeparator";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full mx-auto flex items-center justify-center flex-col">
      <div className="container px-4 md:px-6 py-12 border-l border-r border-border">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Thyltech</h3>
            <p className="text-sm text-muted-foreground">
              Recherche de projet de fin d’études
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="#"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#projet"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projet
                </Link>
              </li>
              <li>
                <Link
                  href="#équipe"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Équipe
                </Link>
              </li>
              <li>
                <Link
                  href="#école"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  École
                </Link>
              </li>
              <li>
                <Link
                  href="#planning"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Planning
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Nous contacter</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hakimfidjel.pro@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/company/thyltech"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <address className="text-muted-foreground not-italic">
                  13 Rue Jean Souvraz, 62300 Lens
                </address>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold mb-4">Notre plaquette</h4>
            <div className="flex space-x-4">
              <a href="/Thyltech_Plaquette.pdf" target="_blank" download className="text-muted-foreground not-italic text-sm hover:text-foreground transition-colors">
                  Télécharger
              </a>
            </div>
          </div>
        </div>
      </div>
      <FullSeparator />
      <div className="container px-4 md:px-6 py-8 border-l border-r border-border">
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} Thyltech. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
