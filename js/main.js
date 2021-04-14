let gameCard = ["img/Warlock.png","img/Warrior.png","img/Druid.png","img/Shaman.png","img/Paladin.png","img/Hunter.png","img/Warlock.png","img/Warrior.png","img/Druid.png","img/Shaman.png","img/Paladin.png","img/Hunter.png"];
// let backGameCard =["img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png","img/backCard.png", ];
let gameVerif =[];
let gameEnd=0;



// function revealCard1(){
//     let kk = document.getElementsByClassName("kkk");
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


let eee = document.getElementsByClassName("kkk");

for(let i=0;i<gameCard.length; i++){   
    eee[i].onclick = function(){
        this.src= gameCard[i];
        gameVerif.push(gameCard[i]);
        if (gameVerif.length === 2){
            if(gameVerif[0] === gameVerif[1]){
            // document.getElementById("card1").onclick=null;
            this.src="img/grey.png";
            // document.getElementById("card2").onclick=null;
            this.src="img/grey.png";
            }
            else{
                alert("rpot");
                this.src="img/backCard.png";
                this.src="img/backCard.png";
            }
        gameVerif =[];
        }
    };
}



function compare(){
    if (gameVerif.length === 2){
        if(gameVerif[0] === gameVerif[1]){
            alert("prout");
        // document.getElementById("card1").onclick=null;
        eee[i].src="img/grey.png";
        // document.getElementById("card2").onclick=null;
        eee.src="img/grey.png";
        }
        else{
            eee.src="img/backCard.png";
            eee.src="img/backCard.png";
        }
    gameVerif =[];
    }
}



// for(i=0;i<eee.length; i++){
    
//     eee[i].onclick=function(){
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