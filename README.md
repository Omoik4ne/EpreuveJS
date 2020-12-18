# Covid Killer

## Infos
Décembre 2020

JavaScript: Epreuve pratique en 7h

Répartition sur 100 pts
- épreuve théorique: 20 pts
- épreuve pratique:
  - qualité du code: 20 pts
  - javascript statique (génération HTML): 30 pts
  - javascript dynamique (interactions utilisateur): 30 pts

## Consignes
*Toutes sources d'information autorisées, mais pas de communication interpersonnelles pendant l'épreuve. L'aspect individuel/unique de la résolution des questions et du problème fait partie de la note.*

*Deux langues autorisées: français, anglais.*

*Copier/coller de code d'internet sanctionnés.*

*Pas le droit de toucher au HTML. Tout le site est généré depuis le JavaScript. Par contre on peut changer le SCSS.*

*Frameworks/Librairies de SPA non autorisés (Angular, React, Vue, Jquery...).*

*Les questions au formateur à propos des consignes ou liées aux problèmes techniques sont autorisées.*

- Envoyez votre travail aux formateurs (ltruchot) via un lien vers un repo github AVANT 16h45 le 18/12/2020
- Ne touchez plus jamais à ce repo après 16h45 sous peine de malus important

## Épreuve théorique sur 20pts

Pour chaque question, répondre avec **vos propres mots**, sans copier/coller, en au moins 2 phrases.
Les réponses peuvent être subjectives si il y a le signe **(s)** à la fin de la question.

Vous pouvez répondre à même ce document ou dans un fichier à part.

- Qu'est-ce que JavaScript vanilla ?
- Réponse : Vanilla vient de l'idée du parfum "basique", c'est-à-dire que l'on retrouve partout. Ici, il désigne du Javascript sans bibliothèque/fonctionnalité particulière (Jquery par exemple). On peut ainsi éviter les conflits aux implémentations dans les différents navigateurs.
 
- Qu'est-ce qu'AJAX ?
- Réponse : Acronyme de Asynchronous JavaScript And XML. C'est un modèle d'organisation du code qui va optimiser notre application en la rendant plus rapide. Par exemple, l'asynchrone va permettre de ne pas avoir à attendre qu'une ligne de code soit entièrement executée pour déclencher l'exécution de la ligne suivante. Elle charge plus vite, s'éxecute plus rapidement. Et c'est sur cette base que l'on formulera nos requêtes HTTP.
 
- Pourquoi JavaScript est parfois mal-aimé des devs ? **(s)**
- Réponse : ils existe plusieurs griefs à propos de Javascript. Je vais les retranscrire dans mon ordre d'appréciation personnelle. C'est un langage que j'ai beaucoup de mal à maitriser car il manque de structure visible (comme en C# qui est fortement typé, avec des classes qui permettent d'<<etiqueter>>) et son interprétation est, du coup, trop imprévisible. Il permet de faire beaucoup de choses mais ammène en meme temps, son lot d'erreurs. Il manque encore de clarté (à mon niveau du moins). De manière plus générale, je sais aussi qu'il est parfois vu comme un langage uniquement concu pour le web. Il est percut comme plus lent que les autres langages (entre autres C, Ruby et Python) avec beaucoup de paquets à installer pour le rendre intéressant.

- Y a-t-il des types en JavaScript ? Si oui, lesquels ?
Oui il existe deux catégories de types en Javascripts : les types primitifs et les types références. Les types primitifs contiennent des valeurs comme les booléens, les nombres entiers, les nulls et undefined. Les types références eux regroupent les objets, les fonctions et les tableaux. Les strings sont le seul type qui soit de réference mais qui se comporte comme un primitif. Le stockage des types primitifs se fait par copie lorsqu'on affecte une meme valeur a deux variables différentes tandis qu'il sagit d'un copie du chemin vers un meme emplacement de mémoire quand la valeur est de type référencielle.

- Est-ce que SASS est un langage qui est interprété par les navigateurs ?
- Réponse : Ce n'est pas le rôle du SASS mais du CSS d'être interprété par le navigateur. Le SASS permet d'organiser ses feuilles de styles. On travaille sur des fichiers <<.scss>> et ceux ci vont etre transformer en fichier <<.css>> que le navigateur pourra interpreter.
 
- Pourquoi peut-on dire que JavaScript est un langage "multi-paradigmes" ? **(s)**
- En JS, une fonction peut-elle retourner une fonction ?
- Réponse : On peut dire que Javascript est un langage multiparadigme dans le sens où il supporte plusieurs approche de programmation. Par exemple, il peut à la fois être considéré comme un langage fonctionnel (fonctions mathématiques) et un langage orienté objet (classes).

- Est-ce que `alert` existe en Node.JS ?
- Réponse : Il existe deux aspects en Javascript : une application coté Web(client) et une application coté serveur(amené par node). La fenetre d'alerte est générée par une fonction valable uniquement dans le navigateur.
  
- Est-ce que `window.console.log === console.log` dans le navigateur ?
- Réponse : Les deux fonctions permettent d'afficher lors du deboggage le contenu de l'objet. Mais les deux ne sont pas strictement identiques. L'un fait reference à l'objet console de window du navigateur et permet donc de verifier si celle ci est disponible. 
  
- Quel est votre aspect préféré de JavaScript ? **(s)**
Réponse : Mon apect préféré de Javascript est sa complexité. Il permet d'aller en profondeur dans les différents aspects que le langage codé apporte. Cest par ses apparents aspects paradoxals qu'il met en avant des problématiques essentielles du codage et du fonctionnement WEB et serveur.Il est très libre et on peut faire énormement de choses.

## Épreuve pratique sur 80pts
Vous êtes codeuse/codeur JavaScript dans une clinique du centre-ville.
Vous développez un outil de pré-commande de vaccins dans les stocks publics de la ville, pour les responsables d'équipes médicales.
Votre site doit permettre à ces personnes de réserver différents types de vaccins parmi ceux en cours de développement.

Cloner et utiliser cette "seed" pour produire votre Single Page Application.

Le script `./script.js` est déjà lié à la page `./index.html` grâce à Parcel, de même que `style.scss` - il ne faut donc rien changer dans cette architecture (ne jamais toucher le HTML, garder le lien vers les styles dans le script).

- supprimer le dossier ".git" à la racine du clone
- créer votre propre repo/remote sur votre github et l'associer à votre clone du projet
- `npm install` installe les packages de la seed
- `npm start` lance la seed en mode "développement"
- add, commit, et push réguliers sont recommandés

### Modéliser les données
Produire un fichier data.js dans `./src`, qui exporte un Array d'objets avec les data suivantes:
#### Vaccin 1
Nom: BBIBP-CorV  
Inventeurs: Sinopharm  
Lieux de production: Chine  
Technologie: virus inactivé  
Quantité: 420  
Prix unitaire: 17$  
Approuvé: oui  
#### Vaccin 2
Nom: Sputnik V  
Inventeurs: Gamaleya  
Lieux de production: Russie, Inde  
Technologie: adenovirus  
Quantité: 130  
Prix unitaire: 12$  
Approuvé: non  
#### Vaccin 3
Nom: AZD1222  
Inventeurs: AstraZeneca, University of Oxford  
Lieux de production: Royaume Unis, Brésil, Inde  
Technologie: adenovirus  
Quantité: 5028  
Prix unitaire: 1.78$  
Approuvé: non  
#### Vaccin 4
Nom: Tozinameran  
Inventeurs: BioNTech, Pfizer, Fosun Pharma  
Lieux de production: Allemagne, USA  
Technologie: ARN messager  
Quantité: 980  
Prix unitaire: 14$  
Approuvé: oui  
#### Vaccin 5
Nom: mRNA-1273  
Inventeurs: Moderna, NIAID, BARDA  
Lieux de production: USA  
Technologie: ARN messager  
Quantité: 240  
Prix unitaire: 28$  
Approuvé: non  
#### Vaccin 6
Nom: Ad26.COV2.S  
Inventeurs: Johnson & Johnson, BIDMC  
Lieux de production: USA, Amérique du Sud, Ukraine, Afrique du Sud  
Technologie: adenovirus  
Quantité: 110  
Prix unitaire: 31$  
Approuvé: non  

### Transformer les données en éléments du DOM
Les éléments suivants sont créés dans la div `#app` via JavaScript:
- un `h1` avec le nom du site
- un élément `header`, présentant 
  - un bouton pour classer les vaccins par prix
  - un bouton pour cacher les vaccins "non approuvés" 
- un élément HTML `main`. 
  - c'est le catalogue montrant tous les vaccins sous forme de "cartes", côte à côte ou à la ligne
  - chaque carte présente 
    - une image de vaccin (présente dans le dossier "static")
    - toutes les infos disponibles pour ce vaccin
    - un "input" de "quantité" et un bouton "réserver" à côté
- un élément `footer` résume la commande en cours (vide au début), et contient un bouton "passer la commande"

### Manipulation du DOM et interaction utilisateur
- Lorsque l'utilisateur clique sur "cacher les vaccins non approuvés" les vaccins non approuvés sont cachés. On peut désormais les re-montrer grâce au même bouton
- Lorsqu'un utilisateur clique sur le bouton "réserver" d'une carte de vaccin
  - le vaccin apparaît dans la commande du `footer`, avec la quantité demandée (ex: Tozinameran x3)
  - l'input de quantité disparaît de la carte
  - le bouton "réserver" de ce vaccin devient `disabled`
- Lorsqu'un utilisateur clique sur "passer la commande" dans le `footer`:
  - la page se vide entièrement
  - un message indique "La commande a bien été enregistrée..."

### Bonus (pas compté dans les points - peut réhausser la note finale):
- sur cet écran final, un bouton "Annuler la commande" permet de  recharger automatiquement la page dans son état initial
- le bouton "classer les vaccins par prix" fonctionne, et réordonne les cartes du vaccin le moins cher au plus cher
- Améliorer l'affichage de votre site grâce aux SCSS
- L'action de passer commande lorsqu'il n'y a pas de commande est impossible
- Un bouton dans le `footer` permet d'annuler toute la réservation d'un coup
- Il est impossible de commander plus de vaccins que les quantités existantes
- Le calcul exact des prix, vaccins par vaccins, et le total du prix final sont ajoutés dans le footer
- Ils sont aussi rappelés dans la page suivante
