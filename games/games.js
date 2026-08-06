// BoardScore Pro
// Bibliothèque des jeux de société


const games = [

    {
        id: "custom",
        name: "🎲 Jeu personnalisé",
        description: "Crée tes propres règles de score",
        maxPlayers: 20,
        minScore: 0
    },


    {
        id: "uno",
        name: "🃏 Uno",
        description: "Compteur de points Uno classique",
        maxPlayers: 10,
        minScore: 0
    },


    {
        id: "skyjo",
        name: "🟦 Skyjo",
        description: "Compte les points de chaque manche",
        maxPlayers: 8,
        minScore: 0
    },


    {
        id: "phase10",
        name: "🔢 Phase 10",
        description: "Suivi des phases et des scores",
        maxPlayers: 6,
        minScore: 0
    },


    {
        id: "monopoly",
        name: "🏦 Monopoly",
        description: "Gestion de l'argent des joueurs",
        maxPlayers: 8,
        minScore: 0
    },


    {
        id: "scrabble",
        name: "🔤 Scrabble",
        description: "Compteur de points de mots",
        maxPlayers: 4,
        minScore: 0
    },


    {
        id: "catan",
        name: "🏝️ Catan",
        description: "Suivi des points de victoire",
        maxPlayers: 6,
        minScore: 0
    },


    {
        id: "risk",
        name: "⚔️ Risk",
        description: "Score et objectifs",
        maxPlayers: 6,
        minScore: 0
    },


    {
        id: "carcassonne",
        name: "🏰 Carcassonne",
        description: "Points des territoires",
        maxPlayers: 5,
        minScore: 0
    },


    {
        id: "azul",
        name: "🟦 Azul",
        description: "Score de fin de partie",
        maxPlayers: 4,
        minScore: 0
    },


    {
        id: "splendor",
        name: "💎 Splendor",
        description: "Points de prestige",
        maxPlayers: 4,
        minScore: 0
    },


    {
        id: "dixit",
        name: "🖼️ Dixit",
        description: "Score des joueurs",
        maxPlayers: 6,
        minScore: 0
    },


    {
        id: "ticket",
        name: "🚂 Les Aventuriers du Rail",
        description: "Points de voyage",
        maxPlayers: 5,
        minScore: 0
    },


    {
        id: "pandemic",
        name: "🦠 Pandemic",
        description: "Score de mission",
        maxPlayers: 4,
        minScore: 0
    }

];


// Trouver un jeu par son identifiant

function getGame(id){

    return games.find(
        game => game.id === id
    );

}


// Ajouter un jeu personnalisé

function addCustomGame(game){

    games.push(game);

      }
