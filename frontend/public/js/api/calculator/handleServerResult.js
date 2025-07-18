const postExpression = require('./fetchResults');

const getExpression = () => {
    return document.querySelector('.calculator-input').innerHTML;
}

const handleServerResponse = async () => {
    let serverResult;

    try {
        serverResult = await postExpression(getExpression());
    } catch (err) {
        console.log('Ошибка при вычислении значения сервером.');
        alert("Серверу не удалось обработать выражение.");
        return;
    }

    document.querySelector('.calculator-input').innerHTML = serverResult.result;
}

module.exports = handleServerResponse;