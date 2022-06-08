const screen = document.querySelector('#calc-screen');
const buttons = document.querySelectorAll('button');
const num = document.createElement('div');
let firstNum = '';
let secondNum = '';
let currentOp  = null;
let shouldReset = false;



//print buttons pressed on screen
//do math functions
function add(num1, num2){
    const newNum = num1 + num2
    console.log(newNum)
}

function sub(num1, num2){
    const newNum = num1 - num2
    console.log(newNum)
}

function mult(num1, num2){
    const newNum = num1 * num2
    console.log(newNum)
}

function div(num1, num2){
    const newNum = num1 / num2
    console.log(newNum)
}

//operator function 

function operator(){
    let num1 = prompt("first number: ")
    let op = prompt("choose operation:")
    let num2 = prompt("choose another number:")
    if(op === "+"){
        console.log(add(num1, num2))
    }
    else if(op === "-"){
        console.log(sub(num1, num2))
    }
    else if(op === "/"){
        console.log(div(num1, num2))
    }
    else{ 
        console.log(mult(num1, num2))
    }

}


function appendNumber(number) {
    if (currentOp.textContent === '0' || shouldResetScreen)
      resetScreen()
    currentOperationScreen.textContent += number
  }

// function display(){
//     num.classList.add('num');
//     buttons.forEach((button) => {
//         button.addEventListener('click', function(e){
//             let name= e.target.id;
//             let newName = '';
//             if(isNaN(name) == false){
//                 newName = newName + name;
//                 console.log(newName)
//             }
//             num.textContent = newName; 
//             screen.appendChild(num);
//         });
//     });
// }

// function store(name){
//     num.classList.add('num');
//     newName = newName + name;
//     num.textContent = newName; 
// }
display()




//return answer on screen 