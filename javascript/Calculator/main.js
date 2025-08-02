let display = document.getElementById("value")
console.log(display)
let currentValue = ""
let final = document.getElementById("final")

function num1(){
    currentValue += "1";
    display.textContent = currentValue;

}

function num2(){
     currentValue += "2";
    display.textContent = currentValue;

}

function num3(){
     currentValue += "3";
    display.textContent = currentValue;

}

function num4(){
     currentValue += "4";
    display.textContent = currentValue;

}

function num5(){
     currentValue += "5";
    display.textContent = currentValue;

}

function num6(){
     currentValue += "6";
    display.textContent = currentValue;
}

function num7(){
     currentValue += "7";
    display.textContent = currentValue;

}

function num8(){
     currentValue += "8";
    display.textContent = currentValue;

}

function num9(){
     currentValue += "9";
    display.textContent = currentValue;

}

function num0(){
     currentValue += "0";
    display.textContent = currentValue;

}



function add(){
    currentValue += "+";
    display.textContent = currentValue;
}

function sub(){
     currentValue += "-";
    display.textContent = currentValue;
}

function mul(){
     currentValue += "*";
    display.textContent = currentValue;
}

function div(){
     currentValue += "/";
    display.textContent = currentValue;
}

function total(){
      try {
        let result = eval(currentValue);
        currentValue = result.toString();  
        display.textContent = currentValue;
    } catch {
        display.textContent = "Error";
        currentValue = "";
    }

}
    

function clearDisplay(){
    currentValue = "";
    display.textContent = "0";
}