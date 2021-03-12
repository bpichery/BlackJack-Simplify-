const player = prompt("Hello and welcome to the Black Jack game! what's your name?");

console.log("Hello " + player + "! Here are your cards!");


const min=1; 
const max=10;

function drawCard(){
 return  Math.floor(Math.random() * (max - min)) + min; 
}
 let card1 = drawCard();
 let card2 = drawCard();
 console.log(card1, card2);
  
let totalPlayer= (card1 +card2)
console.log(totalPlayer);

 console.log("Here are the dealer's cards!");

 let card3 = drawCard();
 let card4 = drawCard();
 console.log(card3, card4);
  
let totalDealer = (card3 + card4)
console.log(totalDealer);



  while(totalPlayer<21){
    if (confirm("Do you want to pick a card?")) {
      let card5 = drawCard();
    console.log(card5);
    totalPlayer = totalPlayer + card5;
    }
    else {
      console.log(totalPlayer);
      if(totalPlayer>totalDealer && totalPlayer<21) 
     
      else {
     
    }
    break;
    }
    
  }
    
{totalPlayer > totalDealer && totalPlayer<21 ? "You win!" : "You lose"}





