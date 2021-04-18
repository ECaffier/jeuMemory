// Var for the face of the card;
let gameCardNoShuffle = ["img/Warlock.png","img/Warrior.png","img/Druid.png","img/Shaman.png","img/Paladin.png","img/Hunter.png","img/Warlock.png","img/Warrior.png","img/Druid.png","img/Shaman.png","img/Paladin.png","img/Hunter.png"];
//This random the array
let gameCard = gameCardNoShuffle.sort((a, b) => 0.5 - Math.random());
// Var for the back of the card
let backGameCard=["img/backCard.png"]
// Var for the winning card
let winGameCard=["img/WinnerCard.png"]
// Var to stock cards and verif if both card are the same or not
let gameVerif =[];
// Var to end the game
let gameEnd=0;

// This function is showing the face of the card on click, the loop allow the player to return the card he want to by clicking on it,
// add the card to the table for compare, launch function compare if there is 2 cards on the table for compare.
// finaly it add a class that allow me to do what i want on the clicked card.

function playMemory(){
    let useUtilityCard = document.getElementsByClassName("utilityCard");
    for(let i=0;i<gameCard.length; i++){ 
        useUtilityCard[i].onclick = function(){
            this.src= gameCard[i];
            this.classList.add("tamponClass");
            gameVerif.push(gameCard[i]);
            if (gameVerif.length == 2){
                setTimeout("compare()", 1000);
                if (gameEnd > 8 ){
                    endGame();
                }
            }
        };
    }
}

// This function compare the 2 cards picked and change the img src for the winner or the loser one.

function compare(){
    if(gameVerif[0] === gameVerif[1]){
        let list = document.querySelectorAll('.tamponClass');
        for (let k=0; k<list.length; k++){
            list[k].style.transform = "rotate(2deg)";
            // list[k].src=winGameCard[0];
            list[k].classList.remove("tamponClass");
            gameEnd++;
        } 
    }
    else{
        let list = document.querySelectorAll('.tamponClass');
        for (let j=0; j<list.length; j++){
            list[j].src=backGameCard[0];
            list[j].classList.remove("tamponClass");
        }   
    }
        gameVerif =[];
}

//Function to play

function wannaPlay(){
    document.getElementById("wannaPlay").style.display="none";
    playMemory();
}

function endGame(){
    document.getElementById("wannaReplay").style.display="block";
}
function rejouer(){
    location.reload();
}






// I let here all the path i used to do this function :

// function revealCard1(){
//     let kk = document.getElementsByClassName("utilityCard");
//     kk.src = gameCard[0];
//     gameVerif.push(gameCard[0])
//     gameEnd++;
//    setTimeout("compare()", 1500);
// }

// function revealCard2(){
//     document.getElementById("card2").src = gameCard[0];
//     gameVerif.push(gameCard[0])
//     gameEnd.push(gameCard[0])
//     setTimeout("compare()", 1500);
// }

// function addClassToImage() {
//     var x = document.getElementsByClassName("newClass");
//     var j;
//     for (j = 0; j < x.length; j++) {
//       x[j].classList.add("tamponClass");
//     }
//   }

// for(i=0;i<useUtilityCard.length; i++){   
//     useUtilityCard[i].onclick=function(){
//         for (element of gameCard){
//             console.log(element[i]);
//         }
//     };
// }

// function showCard(){
//     for (i=0; i<gameCard.length; i++){
//         onclick="revealCard()";
//     }
// }
// showCard();

// function revealCard(){ 
//         this[i].src= gameCard[i];
//         gameVerif.push(gameCard[i]);
//         setTimeout("compare()", 1500);
             
// }

// function showBackCard(){
//     let backCard = document.querySelector('article')
//     for (let i = 0 ; i< data.length; i++ ) {
//         backCard.innerHTML += '<div class="row">' + '<img class="cardsImage col-6 cold-md-2 col-lg-1" src="img/backCard.png" alt="Back of the card" onclick="revealCard()"></img>'

//         // for (let i = 0 ; i< data.length; i++ ) {
//         //     apiContent.innerHTML += '<div class="card cardStyle">'+'<h5 class="card-header cardHead">'+ data[i].id +'</h5>'+
//         //     '<div class="card-body">'+ '<h5 class="card-title">'+ data[i].titre + '</h5>'+
//         //     '<p class="card-text">'+ data[i].contenu +'</p>'+
//         //     '<a href="#" class="btn btn-blue">'+ "En savoir plus" +'</a>'+'</div>'+'</div>';
//         // }
//     }
// } 

// showBackCard();