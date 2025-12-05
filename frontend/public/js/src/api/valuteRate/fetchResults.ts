async function getValuteRates() {
    let response: Response;

    try {
        response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js');
    } catch (err) {
        throw new Error('Error when fetch valute rate:' + err);
    }

    return response.json();
}

export default getValuteRates;