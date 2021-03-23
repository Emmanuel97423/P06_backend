# # P06_backend

## API pour So Peckocko

Le projet a été généré avec [NodeJS](https://github.com/nodejs/node) version 14.15.1
[ExpressJs](https://expressjs.com/) version 4.16.1
[MongoDb Atlas](https://www.mongodb.com/cloud/atlas)

Pour faire fonctionner le projet, vous devez cloner le repository puis effectuer la commande `npm install`.

## Serveur de développement

Démarrer `nodemon server.js` pour avoir accès au serveur de développement. L'application tourne sur `http://localhost:3000/`. L'application va se recharger automatiquement si vous modifiez un fichier source.

## Routes
`POST /api/auth/signup`: Chiffre le mot de passe de l'utilisateur, ajoute l'utilisateur à la base de données.

`POST /api/auth/login `: Vérifie les informations d'identification de l'utilisateur, en renvoyant l'identifiant userID depuis la base de données et un jeton Web JSON signé (contenant également l'identifiant userID).

`GET /api/sauces`: Renvoie le tableau de toutes les sauces dans la base de données.

`GET /api/sauces/:id`: Renvoie la sauce avec l'ID fourni.

`POST /api/sauces`: Capture et enregistre l'image, analyse la sauce en utilisant une chaîne de caractères et l'enregistre dans la base de données, en définissant correctement son image URL. Remet les sauces aimées et celles détestées à 0, et les sauces usersliked et celles usersdisliked aux tableaux vides.

`PUT /api/sauces/:id`: Met à jour la sauce avecl'identifiant fourni. Si une image est téléchargée, capturez-la et mettez à jour l'image URL des sauces. Si aucun fichier n'est fourni, les détails de la sauce figurent directement dans le corps de la demande (req.body.name, req.body.heat etc). Si un fichier est fourni, la sauce avec chaîne est en req.body.sauce.

`DELETE /api/sauces/:id`: Supprime la sauce avec l'ID fourni.

`POST /api/sauces/:id/like` : Définit le statut "j'aime" pour userIDfourni. Si j'aime = 1, l'utilisateur aime la sauce. Si j'aime = 0, l'utilisateur annule ce qu'il aime ou ce qu'il n'aime pas. Si j'aime = -1, l'utilisateur n'aime pas la sauce. L'identifiant de l'utilisateur doit être ajouté ou supprimé du tableau approprié, en gardant une trace de ses préférences et en l'empêchant d'aimer ou de ne pas aimer la même sauce plusieurs fois. Nombre total de "j'aime" et de "je n'aime pas" à mettre à jour avec chaque "j'aime".




