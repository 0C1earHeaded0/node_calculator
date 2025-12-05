import postExpression from './fetchResults';

function getExpression(): string {
    return document.querySelector('.calculator-input').innerHTML;
}

async function handleServerResponse() {
    let serverResult;

    try {
        serverResult = await postExpression(getExpression());
    } catch (err) {
        console.log('Ошибка при вычислении значения сервером.');
        alert("Серверу не удалось обработать выражение.");
    }

    document.querySelector('.calculator-input').innerHTML = serverResult.result;
}

export default handleServerResponse;