const re = /^\d$/;

document.addEventListener('keydown', async (event) => {
    if (re.test(event.key)) {
        calcInput.innerHTML += event.key;
    }

    switch (event.key) {
        case '+':
        case '-':
        case '*':
        case '/':
        case '^':
        case '%':
            calcInput.innerHTML += event.key;
            break;
        case 'Backspace':
            const inputLength = calcInput.innerHTML.length;
            calcInput.innerHTML = calcInput.innerHTML.slice(0, inputLength - 1);
            break;
        case 'Enter':
            await handleServerResponse();
            break;
    }
});