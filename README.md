# Examen 2
Services Web 420-4A4-VI  
Hiver 2021

## Directives
- Vous avez droit à toutes vos notes et Internet.
- Aucune communication n'est permise (messagerie, courriel, etc.). Un élève pris en flagrant délit se verra attribuer la note de 0 pour plagiat. 
- La durée de l'examen est de 1h50.
- Vous devez cloner ce projet et implémenter chacun des points demandés.
- Une fois l'examen terminé, faites un git commit et ensuite un git push de votre projet pour me le remettre.

-----------------------

## Contexte
À partir d'une ébauche de client REACT, vous devez implémenter le code nécessaire pour interroger un service web de citations.

-----------------------
## Installation et mise en route
- L'url de l'api est https://obscure-bastion-46412.herokuapp.com
- Vous pouvez consulter la documentation des routes à l'adresse https://obscure-bastion-46412.herokuapp.com/docs
- L'api est fonctionnel, vous n'avez aucun changement à y apporter. Tout le développement se fera dans le client REACT.
- Ajouter le token que je vous ai envoyé dans le fichier **src/utils/Api.js** à l'endroit indiqué.
- Pour valider que le token est bien configuré, quand vous allez lancer l'application avec npm start vous aller voir dans l'entête de la page "Bienvenue " avec votre nom.
- J'ai utilisé des composants Material Design pour la mise en page (Button, Grid, Paper), vous n'avez pas à y toucher n'y à les modifier sauf peut-être les boutons pour leur ajouter une fonction sur le onClick.

N'oubliez pas de faire la commande 
>npm install
----------------------------

## Points évalués  

### Point #1 - Modification du composant Citation (15 points)

- Modifier le composant pour lui permettre d'afficher une citation et un auteur reçu en paramètre.

### Point #2 - Affichage d'une citation aléatoire (30 points)

- Depuis le composant RandomCitation, faites un appel à l'api pour récupérer une citation aléatoire et l'afficher au chargement du composant.
- Quand on clique sur le bouton rafraichir, regénérer une nouvelle citation aléatoire.

### Point #3 - Affichage de la liste des citations (25 points)

- Au chargement du composant Dashboard, récupérer la liste de toutes vos citations.
- Afficher la liste des citations à l'aide des composants ListeBottles et Citation.
- Par défaut vous n'avez aucune citation dans la base de données, vous pouvez utiliser Postman pour en ajouter ou attendre d'avoir complêter le formulaire d'ajout pour en voir apparaitre.

### Point #4 - Ajout d'une citation (30 points)

- Permettre d'ajouter une citation en remplissant le formulaire du composant FormAjouterBottle. 
- Créer une fonction qui effectue un appel à l'api dans le composant Dashboard.
- Envoyer cette fonction en paramètre au composant FormAjouterBottle.
- Quand l'ajout est fait, la liste des citations doit se mettre à jour automatiquement.

### Point #5 - Supprimer une citation (Bonus - 10 points)

- Depuis le composant ListeBottles, permettre de supprimer une citation quand on clique sur le bouton supprimer correspondant.
- Après la suppression, la liste des citations doit se mettre à jour automatiquement.

----------------------------

## Commit final et remise
- Une fois l'examen terminé, faire un dernier commit avec la mention **Commit final**
- Ensuite, faire un **git push** pour me remettre l'examen. (Je ne corrigerai rien de plus récent que le commit final)

----------------------------
 

# saqReact
# saqReact
