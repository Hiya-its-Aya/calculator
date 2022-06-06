
const screen= document.querySelector('#calc-screen');


//print buttons pressed on screen
//clear, one click for current entry, two to start over
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
    const buttons = document.querySelectorAll('button');
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
        
        });
    });
}


operator()




//return answer on screen 