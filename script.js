let players = [];

let gameStarted = false;


// Boutons principaux

const newGameButton = document.querySelector(".main-button");
const home = document.getElementById("home");
const game = document.getElementById("game");

const playersContainer = document.getElementById("players-container");

const addPlayerButton = document.getElementById("add-player");
const startButton = document.getElementById("start-game");


// Nouvelle partie

newGameButton.addEventListener("click", () => {

    home.classList.add("hidden");
    game.classList.remove("hidden");

});


// Ajouter un joueur

addPlayerButton.addEventListener("click", () => {

    if(gameStarted){
        return;
    }


    let name = prompt("Nom du joueur :");


    if(name && name.trim() !== ""){

        players.push({

            name: name,
            score: 0

        });


        saveGame();
        displayPlayers();

    }

});



// Démarrer la partie

startButton.addEventListener("click", () => {

    if(players.length < 1){

        alert("Ajoute au moins un joueur !");
        return;

    }


    gameStarted = true;

    startButton.style.display = "none";

    displayPlayers();

});



// Afficher les joueurs

function displayPlayers(){

    playersContainer.innerHTML = "";


    players.forEach((player,index)=>{


        let card = document.createElement("div");

        card.className = "player-card";


        card.innerHTML = `

            <h3>${player.name}</h3>

            <div class="score">
                ${player.score}
            </div>


            <div class="score-buttons">

                <button onclick="changeScore(${index},1)">
                    +1
                </button>


                <button onclick="changeScore(${index},-1)">
                    -1
                </button>

            </div>

        `;


        playersContainer.appendChild(card);


    });

}



// Modifier un score

function changeScore(index,value){


    players[index].score += value;


    saveGame();

    displayPlayers();


}



// Sauvegarde automatique

function saveGame(){

    localStorage.setItem(
        "BoardScoreSave",
        JSON.stringify(players)
    );

}



// Charger une ancienne partie

function loadGame(){

    let save = localStorage.getItem("BoardScoreSave");


    if(save){

        players = JSON.parse(save);

        displayPlayers();

    }

}


loadGame();
// Affichage des jeux

function displayGames(){

    const container = document.getElementById("games-container");

    if(!container) return;


    container.innerHTML = "";


    games.forEach((game)=>{


        let card = document.createElement("div");

        card.className = "player-card";


        card.innerHTML = `

            <h3>${game.name}</h3>

            <p>${game.description}</p>

            <p>👥 ${game.maxPlayers} joueurs maximum</p>


            <button onclick="selectGame('${game.id}')">
                Jouer
            </button>

        `;


        container.appendChild(card);


    });

}



// Sélection d'un jeu

let selectedGame = null;


function selectGame(id){

    selectedGame = getGame(id);


    alert(
        "Jeu sélectionné : " + selectedGame.name
    );

}


// Lancer l'affichage au démarrage

displayGames();
