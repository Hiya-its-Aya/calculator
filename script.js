const screen = document.querySelector('#calc-screen');
const buttons = document.querySelectorAll('button');
const num = document.createElement('div');
let previousNum = '';
let currentNum = '';
let operator = '';



//print buttons pressed on screen
//do math functions
function add(num1, num2){
    const newNum = num1 + num2
    return newNum
}

function sub(num1, num2){
    const newNum = num1 - num2
    return newNum
}

function mult(num1, num2){
    const newNum = num1 * num2
    return newNum
}

function div(num1, num2){
    const newNum = num1 / num2
    return newNum
}

//operate function 
//doesnt return correct number
function operate(operator) {
    console.log(operator)
    previousNum = Number(previousNum);
    currentNum = Number(currentNum);
    let ans =0;
    if (operator === "add") {
        ans = previousNum + currentNum;
      } else if (operator === "subtract") {
        previousNum -= currentNum;
      } else if (operator === "multipy") {
        previousNum *= currentNum;
      } else if (operator === "divide") {
        if (currentNum <= 0) {
          previousNum = "Error";
        displayResults();
        return;
      }
      previousNum /= currentNum;
    }
    previousNum = roundNumber(previousNum);
    previousNum = previousNum.toString();
    displayResults();
}

function displayResults() {
    if (previousNum.length <= 11) {
      screen.textContent = previousNum;
    } else {
      screen.textContent = previousNum.slice(0, 11) + "...";
    }
    operator = "";
    currentNum = "";
}
  

function roundNumber(num) {
    return Math.round(num * 100000) / 100000;
}

buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        if(isNaN(e.target.id) == false){
            handleNumber(e.target.textContent);
        }
        else{
            if(e.target.id == "add" ||e.target.id == "subtract" ||e.target.id == "multiply" ||e.target.id == "divide" ){
                handleOperator(e.target.textContent)
            }
            else if(e.target.id = "equals"){
                if(currentNum != '' && previousNum != '')
                operate();
            }
        }
    });
});

function handleNumber(number) {
    if (previousNum !== "" && currentNum !== "" && operator === "") {
      previousNum = "";
      screen.textContent = currentNum;
    }
    if  (currentNum.length <= 6) {
     currentNum += number;
        screen.textContent = currentNum;
      }
}

function handleOperator(operator){
    if (previousNum === "") {
        previousNum = currentNum;
        screen.textContent = previousNum + " " + operator;
        currentNum = "";
      } else if (currentNum === "") {
        screen.textContent = previousNum + " " + operator;
        currentNum = "";
      } else {
        operate(operator);
        screen.textContent = previousNum + " " + operator;
      } 
}


// function displayResults(){

// }


//return answer on screen 