let count = 0
let countValue = document.getElementById("count") 
let previousDataEl = document.getElementById("previousdata");

function increment(){
    console.log("hello")
    count = count + 1
    countValue.innerText = count
}

function save(){
    let previous = previousDataEl.textContent;
    previousDataEl.innerText = previous + count + " - ";
    count = 0; 
    countValue.innerText = count
}

