import mathjs = require('mathjs');
import getValuteRates from './fetchResults';

async function handleValuteServerResponse() {
    let serverResult;

    try {
        serverResult = await getValuteRates();
    } catch (err) {
        console.log('Ошибка при обработке результата Валютного курса', err);
    }

    document.querySelector('#EUR-rate').innerHTML = mathjs.round(serverResult.Valute.EUR.Value, 2);
    document.querySelector('#USD-rate').innerHTML = mathjs.round(serverResult.Valute.USD.Value, 2);
}

export default handleValuteServerResponse;
