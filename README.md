# pfe-website

Ce projet est un site web réalisé dans le cadre de mon projet de fin d'études (PFE) et de mon groupe **Thyltech**. Il utilise **Next.js** pour le développement frontend et se base sur une structure moderne de composants React ainsi que la collection de composants **shadcn/ui**.

## Prérequis

Avant de commencer, assure-toi d'avoir installé les outils suivants sur ta machine :

- [Node.js](https://nodejs.org/) (version 16 ou supérieure)
- [Git](https://git-scm.com/)

## Installation

1. Clone le repository sur ton machine locale :

   ```
   git clone https://github.com/HakimFIDJEL/pfe-website.git
   cd pfe-website
   ```

2. Installe les dépendances du projet :

   ```
   npm install
   ```

## Lancer l'application en mode développement

Pour démarrer l'application en mode développement, utilise la commande suivante :

   ```
   npm run dev
   ```

Cela lancera le serveur de développement et tu pourras accéder au site à l'adresse [http://localhost:3000](http://localhost:3000).

## Générer la version de production

Pour générer la version optimisée pour la production, exécute la commande suivante :

   ```
   npm run build
   ```

Cela construira l'application dans le dossier `.next` et optimisera les performances.

## Lancer le serveur en production

Une fois le build effectué, tu peux démarrer le serveur de production avec la commande suivante :

   ```
   npm run start
   ```

Cela lancera le serveur sur [http://localhost:3000](http://localhost:3000).

## CI/CD

Le projet n'est pas encore configuré avec une pipeline **GitHub Actions** pour automatiser le déploiement via **Docker**. J'y travaillerais une fois le projet terminé car il ne nécessite pas beaucoup de dépendances donc peut normalement tourner sur toutes les machines.

## Technologies utilisées

- **Next.js** : Framework React pour la création de pages côté serveur et côté client.
- **TypeScript** : Superset de JavaScript pour un code plus sécurisé et maintenable.
- **Tailwind CSS** : Framework CSS utilitaire pour une mise en page rapide et réactive.


