const mathjs = require('mathjs');

const getValuteRates = require('./fetchResults');

const handleValuteServerResponse = async () => {
    let serverResult;

    try {
        serverResult = await getValuteRates();
    } catch (err) {
        console.log('Ошибка при обработке результата Валютного курса', err);
        return;
    }

    document.querySelector('#EUR-rate').innerHTML = mathjs.round(serverResult.Valute.EUR.Value, 2) ;
    document.querySelector('#USD-rate').innerHTML = mathjs.round(serverResult.Valute.USD.Value, 2);
}

module.exports = handleValuteServerResponse;
