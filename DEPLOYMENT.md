# Guide de Déploiement

## Déployer sur GitHub Pages avec GitHub Actions

Ce projet est configuré pour le déploiement automatique sur GitHub Pages via GitHub Actions.

### Étapes de déploiement

#### 1. Créer un repository GitHub

```bash
# Créer un nouveau repository sur GitHub (via l'interface web)
# Puis connecter votre repository local
git remote add origin https://github.com/votre-username/mon-portfolio.git
```

#### 2. Mettre à jour la configuration Vite

Si votre repository GitHub a un nom différent de `mon-portfolio`, modifiez [vite.config.ts](vite.config.ts):

```typescript
base: process.env.NODE_ENV === 'production' ? '/nom-de-votre-repo/' : '/',
```

#### 3. Activer GitHub Pages

1. Allez dans les paramètres de votre repository GitHub
2. Cliquez sur "Pages" dans le menu de gauche
3. Sous "Source", sélectionnez **"GitHub Actions"**
4. Sauvegardez

#### 4. Pousser votre code

```bash
# Pousser le code sur GitHub
git push -u origin main
```

Le workflow GitHub Actions se déclenchera automatiquement et déploiera votre site.

#### 5. Accéder à votre site

Votre site sera disponible à l'adresse :
```
https://votre-username.github.io/mon-portfolio/
```

### Workflow CI/CD

Le pipeline GitHub Actions effectue les étapes suivantes :

#### Job 1: Test (sur Node.js 20.x et 22.x)
- ✅ Checkout du code
- ✅ Installation de Node.js
- ✅ Installation des dépendances
- ✅ Lint du code
- ✅ Vérification des types TypeScript
- ✅ Exécution des tests unitaires
- ✅ Upload du rapport de couverture

#### Job 2: Build
- ✅ Checkout du code
- ✅ Installation de Node.js
- ✅ Installation des dépendances
- ✅ Build de production
- ✅ Upload des artifacts

#### Job 3: Deploy (uniquement sur la branche main)
- ✅ Checkout du code
- ✅ Installation de Node.js
- ✅ Installation des dépendances
- ✅ Build de production
- ✅ Configuration de GitHub Pages
- ✅ Déploiement sur GitHub Pages

### Déclencheurs du pipeline

Le pipeline se déclenche automatiquement lors de :
- Push sur les branches `main` ou `develop`
- Pull Request vers `main` ou `develop`

Le déploiement n'a lieu que lors d'un push sur la branche `main`.

### Voir les logs du pipeline

1. Allez dans l'onglet "Actions" de votre repository
2. Cliquez sur le workflow "CI/CD Pipeline"
3. Sélectionnez une exécution pour voir les détails

### Badges de statut (optionnel)

Vous pouvez ajouter un badge de statut dans votre README :

```markdown
![CI/CD](https://github.com/votre-username/mon-portfolio/workflows/CI/CD%20Pipeline/badge.svg)
```

### Développement local

Pour tester le site en mode production localement :

```bash
# Build
npm run build

# Prévisualiser
npm run preview
```

Le site sera accessible sur `http://localhost:4173`

### Déploiement manuel (si nécessaire)

Si vous souhaitez déployer manuellement :

```bash
# Build le projet
npm run build

# Le dossier dist/ contient les fichiers à déployer
```

Vous pouvez ensuite déployer le contenu du dossier `dist/` sur n'importe quel hébergeur statique (Netlify, Vercel, etc.).

### Résolution des problèmes

#### Le site ne se charge pas correctement
- Vérifiez que la propriété `base` dans `vite.config.ts` correspond au nom de votre repository
- Vérifiez que GitHub Pages est configuré pour utiliser "GitHub Actions" comme source

#### Les tests échouent dans GitHub Actions
- Exécutez les tests localement : `npm run test:unit -- --run`
- Vérifiez les logs dans l'onglet Actions de GitHub

#### Le build échoue
- Exécutez le build localement : `npm run build`
- Vérifiez qu'il n'y a pas d'erreurs TypeScript : `npm run type-check`
- Vérifiez qu'il n'y a pas d'erreurs de lint : `npm run lint`

### Environnements multiples

Pour configurer différents environnements (staging, production) :

1. Créez une branche `develop` pour le staging
2. Modifiez le workflow pour déployer `develop` sur un environnement de staging
3. Utilisez des variables d'environnement GitHub pour différencier les configurations

## Support

Pour toute question ou problème, consultez :
- [Documentation Vite](https://vitejs.dev/)
- [Documentation Vue.js](https://vuejs.org/)
- [Documentation GitHub Actions](https://docs.github.com/en/actions)
- [Documentation GitHub Pages](https://docs.github.com/en/pages)
