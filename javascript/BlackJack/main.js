let firstCard = 5;
let secondCard = 10;
let blackJack = false;
let isAlive = true;
let sum = firstCard + secondCard;
let message = "";
let message_out=document.getElementById("message-el");

function startGame(){
    if (sum <= 20) {
    message = "Do you want to draw a new card?";
    isAlive = true;
}
else if (sum === 21) {
    message = "Wohoo! You've got a Blackjack!";
    blackJack = true;
} 
else {
    message = "You're out of the game!";
    isAlive = false;
}
 message_out.textContent = message;
}