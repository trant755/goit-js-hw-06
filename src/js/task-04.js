
let counterValue = 0;

const increment = () => {
    counterValue += 1;
    refs.counter.textContent = counterValue;
};
const decrement = () => {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
};

const refs = {
    btnMinus: document.querySelector('button[data-action="decrement"]'),
    btnPlus: document.querySelector('button[data-action="increment"]'),
    counter: document.querySelector('#value')
}

// refs.counter.textContent = counterValue;
refs.btnMinus.addEventListener('click', decrement)
refs.btnPlus.addEventListener('click', increment)

