# Mon Portfolio

Portfolio personnel moderne développé avec Vue.js 3, TypeScript, et Vite.

## Fonctionnalités

- Interface utilisateur moderne et responsive
- Navigation fluide avec Vue Router
- Section compétences avec barres de progression animées
- Galerie de projets
- Formulaire de contact avec validation
- Tests unitaires avec Vitest
- CI/CD avec GitHub Actions
- Déploiement automatique sur GitHub Pages

## Technologies utilisées

- **Vue.js 3** - Framework JavaScript progressif
- **TypeScript** - Typage statique
- **Vite** - Build tool rapide
- **Vue Router** - Routage SPA
- **Vitest** - Framework de tests unitaires
- **GitHub Actions** - CI/CD

## Installation

### Prérequis

- Node.js 20.19.0 ou supérieur / Node.js 22.12.0 ou supérieur
- npm ou yarn

### Étapes d'installation

1. Cloner le repository

```bash
git clone <repository-url>
cd mon-portfolio
```

2. Installer les dépendances

```bash
npm install
```

3. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`

## Scripts disponibles

- `npm run dev` - Démarre le serveur de développement
- `npm run build` - Compile l'application pour la production
- `npm run preview` - Prévisualise la version de production
- `npm run test:unit` - Lance les tests unitaires
- `npm run test:unit -- --coverage` - Lance les tests avec rapport de couverture
- `npm run type-check` - Vérifie les types TypeScript
- `npm run lint` - Vérifie et corrige le code avec ESLint

## Structure du projet

```
mon-portfolio/
├── .github/
│   └── workflows/
│       └── ci.yml              # Configuration GitHub Actions
├── src/
│   ├── assets/                 # Ressources statiques
│   ├── components/             # Composants réutilisables
│   │   ├── __tests__/          # Tests des composants
│   │   └── Navigation.vue      # Barre de navigation
│   ├── views/                  # Pages de l'application
│   │   ├── __tests__/          # Tests des vues
│   │   ├── HomeView.vue        # Page d'accueil
│   │   ├── AboutView.vue       # Page à propos
│   │   ├── ProjectsView.vue    # Page des projets
│   │   └── ContactView.vue     # Page de contact
│   ├── router/                 # Configuration du routeur
│   ├── App.vue                 # Composant racine
│   └── main.ts                 # Point d'entrée
├── public/                     # Fichiers publics
├── vite.config.ts              # Configuration Vite
├── vitest.config.ts            # Configuration Vitest
└── package.json
```

## Tests

Le projet utilise Vitest et Vue Test Utils pour les tests unitaires.

### Lancer les tests

```bash
# Mode watch (par défaut)
npm run test:unit

# Une seule fois
npm run test:unit -- --run

# Avec rapport de couverture
npm run test:unit -- --coverage
```

## CI/CD

Le projet utilise GitHub Actions pour l'intégration et le déploiement continus :

### Pipeline CI/CD

1. **Test** - Exécute sur Node.js 20.x et 22.x
   - Lint du code
   - Vérification des types TypeScript
   - Tests unitaires
   - Upload du rapport de couverture

2. **Build** - Compilation du projet
   - Build de production
   - Upload des artifacts

3. **Deploy** - Déploiement sur GitHub Pages (seulement sur la branche main)
   - Configuration automatique
   - Déploiement du site

### Configuration GitHub Pages

Pour activer le déploiement automatique :

1. Aller dans les paramètres du repository
2. Section "Pages"
3. Source : GitHub Actions
4. Le site sera déployé automatiquement à chaque push sur la branche main

## Personnalisation

### Modifier les informations personnelles

- **Navigation** : src/components/Navigation.vue
- **Page d'accueil** : src/views/HomeView.vue
- **Projets** : src/views/ProjectsView.vue
- **Contact** : src/views/ContactView.vue

### Modifier le nom du repository

Si votre repository GitHub a un nom différent de `mon-portfolio`, modifiez la propriété `base` dans vite.config.ts :

```typescript
base: process.env.NODE_ENV === 'production' ? '/votre-nom-repo/' : '/',
```

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence MIT.
