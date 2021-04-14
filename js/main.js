let gameCard = ["img/Warlock.png","img/Warrior.png","img/Druid.png","img/Rogue.png","img/Shaman.png","img/Paladin.png","img/Hunter.png"];
let gameVerif =[];

function revealCard1(){
    document.getElementById("card1").src = gameCard[0];
    gameVerif.push(gameCard[0])
   setTimeout("compare()", 1500);

}

function revealCard2(){
    document.getElementById("card2").src = gameCard[1];
    gameVerif.push(gameCard[1])
    setTimeout("compare()", 1500);

}

function compare(){
    if (gameVerif.length === 2){
        if(gameVerif[0] === gameVerif[1]){
        document.getElementById("card1").src="img/trouve.jpg";
        document.getElementById("card2").src="img/trouve.jpg";
        }
        else{
            document.getElementById("card1").src="img/backCard.jpg";
            document.getElementById("card2").src="img/backCard.jpg";
        }
    gameVerif =[];
    }
}








// function showBackCard(){
//     let backCard = document.querySelector('article')
//     for (let i = 0 ; i< data.length; i++ ) {
//         backCard.innerHTML += '<div class="row">' + '<img class="cardsImage col-6 cold-md-2 col-lg-1" src="img/backCard.jpg" alt="Back of the card" onclick="revealCard()"></img>'

//         // for (let i = 0 ; i< data.length; i++ ) {
//         //     apiContent.innerHTML += '<div class="card cardStyle">'+'<h5 class="card-header cardHead">'+ data[i].id +'</h5>'+
//         //     '<div class="card-body">'+ '<h5 class="card-title">'+ data[i].titre + '</h5>'+
//         //     '<p class="card-text">'+ data[i].contenu +'</p>'+
//         //     '<a href="#" class="btn btn-blue">'+ "En savoir plus" +'</a>'+'</div>'+'</div>';
//         // }
//     }
// } 

// showBackCard();