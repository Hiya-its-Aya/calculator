const screen = document.querySelector('#calc-screen');
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
let previousNum = '';
let currentNum = '';
let operator = '';

//operate function 
//doesnt return correct number

numbers.forEach((number) => {
    number.addEventListener("click", (e) => {
      handleNumber(e.target.textContent);
    });
});


operators.forEach((op) => {
  op.addEventListener('click', (e) =>{
    handleOperator(e.target.textContent)
    operator = e.target.id
  });
});


equals.addEventListener('click', () => {
    operate();
  });


clear.addEventListener('click',() => {
  handleClear();
})


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

function handleOperator(op){
  if (previousNum === "") {
      previousNum = currentNum;
      screen.textContent = previousNum + " " + op;
      currentNum = "";
    } else if (currentNum === "") {
      screen.textContent = previousNum + " " + op;
      currentNum = "";
    } else {
      operate();
      operator = op;
      screen.textContent = previousNum + " " + op;
    } 
}

function operate() {
  
  previousNum = Number(previousNum);
  currentNum = Number(currentNum);
  if (operator === "add") {
      previousNum += currentNum;
    } else if (operator === "subtract") {
      previousNum -= currentNum;
    } else if (operator === "multiply") {
      previousNum *= currentNum;
    } else if (operator === 'divide') {
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

function roundNumber(num) {
  return Math.round(num * 100000) / 100000;
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

function handleClear(){
  previousNum = '';
  currentNum = '';
  operator = '';
  screen.textContent = '';
}

