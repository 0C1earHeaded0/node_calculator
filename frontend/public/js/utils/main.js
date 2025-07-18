const handleServerResponse = require('../api/calculator/handleServerResult');
const handleValuteServerResponse = require('../api/valuteRate/handleServerResult');

const nums = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0
];

const btns = document.querySelectorAll('.btn');
const calcInput = document.querySelector('.calculator-input');

const onNumClick = (num_btn) => {
    calcInput.innerHTML += num_btn.innerHTML;
}

btns.forEach(async (el) => {
    if (nums.includes(Number(el.innerHTML))) {
        el.addEventListener('click', () => {
            onNumClick(el);
        });
    }

    switch (el.innerHTML) {
        case '&lt;':
            el.addEventListener('click', () => {
                const inputLength = calcInput.innerHTML.length;
                calcInput.innerHTML = calcInput.innerHTML.slice(0, inputLength - 1);
            });
            break;
        case 'C':
            el.addEventListener('click', () => {
                calcInput.innerHTML = '';
            });
            break;
        case '+':
        case '-':
        case '.':
        case '*':
        case '/':
        case '^':
        case '(':
        case ')':
        case '%':
            el.addEventListener('click', () => {
                calcInput.innerHTML += el.innerHTML;
            });
            break;
        case '=':
            el.addEventListener('click', async () => {
                await handleServerResponse();
            });
            break;
    }
});

document.querySelector('#valute-rate').addEventListener('click', () => {
    const valuteWindow = document.querySelector('#valute-window');
    handleValuteServerResponse();

    if (valuteWindow.classList.contains('valute-window_shown')) {
        valuteWindow.classList.remove('valute-window_shown');
        valuteWindow.classList.add('valute-window_hidden');
    } else {
        valuteWindow.classList.remove('valute-window_hidden');
        valuteWindow.classList.add('valute-window_shown');
    }
});