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
