// BoardScore Pro
// Système principal


let players = [];

let selectedGame = null;

let gameStarted = false;



// Éléments HTML

const home = document.getElementById("home");
const game = document.getElementById("game");

const gamesContainer = document.getElementById("games-container");

const playersContainer = document.getElementById("players-container");

const addPlayerButton = document.getElementById("add-player");

const startButton = document.getElementById("start-game");

const newGameButton = document.querySelector(".main-button");




// Afficher les jeux

function displayGames(){

    gamesContainer.innerHTML = "";


    games.forEach((game)=>{


        const card = document.createElement("div");

        card.className = "player-card";


        card.innerHTML = `

            <h3>${game.name}</h3>

            <p>${game.description}</p>

            <p>👥 Maximum : ${game.maxPlayers}</p>


            <button onclick="selectGame('${game.id}')">

                Choisir

            </button>

        `;


        gamesContainer.appendChild(card);


    });

}




// Choisir un jeu

function selectGame(id){


    selectedGame = getGame(id);


    document.getElementById("game-title").innerHTML =
    selectedGame.name;


    alert(
        "Tu as choisi : " + selectedGame.name
    );


}




// Nouvelle partie

newGameButton.addEventListener("click",()=>{


    if(!selectedGame){

        alert("Choisis d'abord un jeu !");
        return;

    }


    home.classList.add("hidden");

    game.classList.remove("hidden");


});





// Ajouter un joueur

addPlayerButton.addEventListener("click",()=>{


    if(gameStarted){

        return;

    }


    let name = prompt(
        "Nom du joueur :"
    );


    if(name){


        players.push({

            name:name,

            score:0,

            rounds:[]

        });


        saveGame();

        displayPlayers();


    }


});





// Démarrer

startButton.addEventListener("click",()=>{


    if(players.length < 1){

        alert(
            "Ajoute au moins un joueur"
        );

        return;

    }


    gameStarted = true;


    startButton.style.display="none";


});






// Affichage joueurs

function displayPlayers(){


    playersContainer.innerHTML="";


    players.forEach((player,index)=>{


        let card=document.createElement("div");


        card.className="player-card";


        card.innerHTML=`

        <h3>${player.name}</h3>


        <div class="score">

        ${player.score}

        </div>


        <button onclick="changeScore(${index},1)">
        +1
        </button>


        <button onclick="changeScore(${index},-1)">
        -1
        </button>

        `;


        playersContainer.appendChild(card);


    });


}





// Modifier score

function changeScore(index,value){


    players[index].score += value;


    saveGame();

    displayPlayers();


}






// Sauvegarde

function saveGame(){


    localStorage.setItem(

        "BoardScoreSave",

        JSON.stringify({

            players:players,

            game:selectedGame

        })

    );


}




// Chargement

function loadGame(){


    let save =
    localStorage.getItem(
        "BoardScoreSave"
    );


    if(save){


        let data=JSON.parse(save);


        players=data.players || [];


        displayPlayers();


    }


}




displayGames();

loadGame();
