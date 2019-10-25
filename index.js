const display = document.getElementById('display');
const numbers = document.querySelectorAll('.calculator__numbers button'); //returns array of number buttons
const clear = document.getElementById('clear');
const negative = document.getElementById('negative');
const percent = document.getElementById('percent');
const divide = document.getElementById('divide');
const multiply = document.getElementById('multiply');
const add = document.getElementById('add');
const subtract = document.getElementById('subtract');
const equals = document.getElementById('equals');

const state = {
    values:[''], 
    operator: null
}

function inputNumber(value){

    const valueIndex = state.values.length -1
    state.values[valueIndex] += '' + value

    display.innerHTML= state.values[valueIndex]
}

function inputOperator(value){
    if(state.values.length > 1 || value === '='){
        const output = eval(state.values[0] + state.operator + state.values[1]);
        state.values = [output]
    }else {state.values.push('')}
    
    display.innerHTML = state.values[state.values.length-1];
    if (value !== '=') state.operator = value;
}
//attach event handlers to the number buttons
numbers.forEach(function(button){ //for each button
    const number = button.innerHTML.toString(); //grab the innerHTML and convert to a string
    //console.log(number)
    button.addEventListener('click', function(){ //listen for the click
        inputNumber(number)
        // const value = display.innerHTML + number; //append the number to the display's innerHTML and assign to value
        // display.innerHTML=value; //change innerHTML of display to = value
    })
})

function resetCalculator() {
    state.values = [''];
    state.operator = null;
    display.innerHTML = state.values;
  }

//clear button functionality
clear.addEventListener('click', function(){
    resetCalculator()
})

//negative button functionality
negative.addEventListener('click', function(){
    const value = +display.innerHTML * -1;
    display.innerHTML=value;
})

//percent button functionality
percent.addEventListener('click', function(){
    const value = Number(display.innerHTML) / 100;
    display.innerHTML=value;
})

add.addEventListener('click', function(){
    inputOperator('+')
})

subtract.addEventListener('click', function(){
    inputOperator('-')
})

equals.addEventListener('click', function(){
    inputOperator('=')
})