const postExpression = require('./fetchResults');

const getExpression = () => {
    return document.querySelector('.calculator-input').innerHTML;
}

const handleServerResponse = async () => {
    let serverResult;

    try {
        serverResult = await postExpression(getExpression());
    } catch (err) {
        console.log('Неверное выражение!');
        alert("Серверу не удалось обработать выражение!");
        return;
    }

    document.querySelector('.calculator-input').innerHTML = serverResult.data.result;
}

module.exports = handleServerResponse;