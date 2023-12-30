let display = document.getElementById('display');
let calculator = document.querySelector('.calculator');
const buttonClear = document.querySelector('.clear');
const orangeBtn = document.querySelectorAll('.left')
const numbersAndSigns = document.querySelectorAll('.append');
const result = document.querySelector('.result');
const cos = document.querySelector('.cos');
console.log(orangeBtn)


let state = {};

let countActions = 0;


numbersAndSigns.forEach(item => {
    item.addEventListener('click', appendToDisplay)
})

orangeBtn.forEach(item => {
    item.addEventListener('touchstart', addActiveStateOrange)
    item.addEventListener('touchend', removeActiveStateOrange)
})

function addActiveStateOrange() {
    evt.target.classList.add('active-orange')
}

function removeActiveStateOrange() {
    evt.target.classList.remove('active-orange')
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

cos.addEventListener('click', calculateCos)

function calculateCos() {

    let result = Math.cos(eval(state[`current${countActions}`]))
    display.value = result.toFixed(2);
}

function calculateSin() {
    let result = Math.sin(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateTan() {
    let result = Math.tan(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateCot() {
    let result = 1 / Math.tan(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateSqrt() {
    let result = Math.sqrt(eval(display.value))
    display.value = result.toFixed(2);
}

function calculateSquareRoot() {
    let result = eval(display.value) ** 2;
    display.value = result.toFixed(2);
}