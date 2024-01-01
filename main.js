let display = document.getElementById('display');
let calculator = document.querySelector('.calculator');
const buttonClear = document.querySelector('.clear');
const orangeBtn = document.querySelectorAll('.left')
const numbersAndSigns = document.querySelectorAll('.append');
const result = document.querySelector('.result');
const cos = document.querySelector('.cos');
const sin = document.querySelector('.sin');
const tan = document.querySelector('.tan');
const cot = document.querySelector('.cot');
const sqrt = document.querySelector('.sqrt');
const square = document.querySelector('.square');
const squareN = document.querySelector('.squareN');
const numBtns = document.querySelectorAll('.num');
const funcBtns = document.querySelectorAll('.func');

window.navigator = window.navigator || {};
if (navigator.vibrate === undefined) {
    alert("Вибрация не поддерживается");
};

console.log(window.navigator)



let state = {};

let countActions = 0;


numbersAndSigns.forEach(item => {
    item.addEventListener('click', appendToDisplay)
})

orangeBtn.forEach(item => {
    item.addEventListener('touchstart', addActiveStateOrange)
    item.addEventListener('touchend', removeActiveStateOrange)
})


numBtns.forEach(item => {
    item.addEventListener('touchstart', addNumBtnTouch);
    item.addEventListener('touchend', removeNumBtnTouch);
})

funcBtns.forEach(item => {
    item.addEventListener('touchstart', addFuncBtnTouch);
    item.addEventListener('touchend', removeFuncBtnTouch);
})

function addFuncBtnTouch(evt) {
    evt.target.style.backgroundColor = '#d9d9d9'
}

function removeFuncBtnTouch(evt) {
    evt.target.style.backgroundColor = '#a5a5a5';
}

function addNumBtnTouch(evt) {
    evt.target.style.backgroundColor = '#737373';
    window.navigator.vibrate(200);
}

function removeNumBtnTouch(evt) {
    evt.target.style.backgroundColor = '#343434'
}

function addActiveStateOrange(evt) {
    evt.target.style.backgroundColor = '#fcc78d'
}

function removeActiveStateOrange(evt) {
    evt.target.style.backgroundColor = '#ffa00a'
}


function appendToDisplay(evt) {

    if (evt.target.classList.contains('num')) {

        if (evt.target.classList.contains('num')) {
            if (!state[`current${countActions}`]) {
                state[`current${countActions}`] = "";
            }
            if (Object.values(state)[Object.values(state).length - 1] === '+') {
                countActions += 1;
                console.log(evt.target.textContent)
                if (!state[`current${countActions}`]) {
                    state[`current${countActions}`] = "";
                }
                state[`current${countActions}`] += evt.target.textContent;
                display.value = state[`current${countActions}`];

            } else if (Object.values(state)[Object.values(state).length - 1] === '-') {
                countActions += 1;
                console.log(evt.target.textContent)
                if (!state[`current${countActions}`]) {
                    state[`current${countActions}`] = "";
                }
                state[`current${countActions}`] += evt.target.textContent;
                display.value = state[`current${countActions}`];

            } else if (Object.values(state)[Object.values(state).length - 1] === '/') {
                countActions += 1;
                console.log(evt.target.textContent)
                if (!state[`current${countActions}`]) {
                    state[`current${countActions}`] = "";
                }
                state[`current${countActions}`] += evt.target.textContent;
                display.value = state[`current${countActions}`];

            } else if (Object.values(state)[Object.values(state).length - 1] === '*') {
                countActions += 1;
                console.log(evt.target.textContent)
                if (!state[`current${countActions}`]) {
                    state[`current${countActions}`] = "";
                }
                state[`current${countActions}`] += evt.target.textContent;
                display.value = state[`current${countActions}`];

            } else {
                state[`current${countActions}`] += evt.target.textContent;
                display.value = state[`current${countActions}`];

            }

        } else if (evt.target.classList.contains('op')) {
            countActions += 1;
            state[`current${countActions}`] = evt.target.textContent;
        }

    } else {
        if (evt.target.classList.contains('num')) {
            if (!state[`current${countActions}`]) {
                state[`current${countActions}`] = "";
            }
            state[`current${countActions}`] += evt.target.textContent;
        } else if (evt.target.classList.contains('op')) {
            countActions += 1;
            state[`current${countActions}`] = evt.target.textContent;

        }
    }
    console.log(state)
}

buttonClear.addEventListener('click', clearDisplay)

function clearDisplay() {
    display.value = "";
    state = {};
}

result.addEventListener('click', calculateResult)

function calculateResult() {
    try {
        const values = Object.values(state).join('');
        console.log(values)
        display.value = Number.isInteger(eval(values)) ? eval(values) : eval(values).toFixed(2)
        console.log(eval(values))

    } catch (error) {
        display.value = 'Error'
    }
}

cos.addEventListener('click', calculateCos);
sin.addEventListener('click', calculateSin);
tan.addEventListener('click', calculateTan);
cot.addEventListener('click', calculateCot);
sqrt.addEventListener('click', calculateSqrt);
square.addEventListener('click', calculateSquareRoot);
squareN.addEventListener('click', calculateNRoot)

// async function nRoot() {
//     return await Object.values(state)[Object.values(state).length - 1]
// }

function calculateNRoot() {
    display.value = state[`current${countActions}`];
    countActions += 1;
    const id = setTimeout(() => {
        const result = eval(Object.values(state)[Object.values(state).length - 2]) ** Object.values(state)[Object.values(state).length - 1]
        console.log(Object.values(state)[Object.values(state).length - 1])

        display.value = Number.isInteger(result) ? result : result.toFixed(2)
    }, 5000)
    console.log(state)

}

function calculateCos() {
    // let result = Math.cos(eval(state[`current${countActions}`]))
    let result = Math.cos(eval(display.value))
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}

function calculateSin() {
    let result = Math.sin(eval(display.value))
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}

function calculateTan() {
    let result = Math.tan(eval(display.value))
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}

function calculateCot() {
    let result = 1 / Math.tan(eval(display.value))
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}

function calculateSqrt() {
    let result = Math.sqrt(eval(display.value))
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}

function calculateSquareRoot() {
    let result = eval(display.value) ** 2;
    display.value = Number.isInteger(result) ? result : result.toFixed(2);
    state[`current${countActions}`] = display.value
}