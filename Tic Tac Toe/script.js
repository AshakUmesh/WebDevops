console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let audioturn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

// Function to change the turn
const changeTurn = () => {
    return turn === "X" ? "O" : "X";
}

// Function to check for a win (you’ll implement later)
const checkWin = () => {
    // TODO: Add win logic
}

// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector(".boxtext");
    element.addEventListener("click", () => {
        if (element.innerText === "" && !isgameover) {
            element.innerText = turn;
            turn = changeTurn();
            audioturn.play();
            checkWin();
            if (!isgameover) {
                document.querySelector(".info").innerText = "Turn for " + turn;
            }
        }
    });
});

document.getElementById("reset").addEventListener("click", () => {
    let boxtexts = document.querySelectorAll(".boxtext");
    console.log("Found spans:", boxtexts.length);  
    boxtexts.forEach(e => e.innerText = "");
    turn = "X";
    isgameover = false;
    document.querySelector(".info").innerText = "Turn for " + turn;
});
