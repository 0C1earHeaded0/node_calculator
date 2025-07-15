const postExpression = async (exp) => {
    let response;

    try {
        response = await fetch('/api/count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                expression: exp
            })
        });
    } catch (error) {
        throw new Error('Error when fetch calculation result:', error);
    }

    return await response.json();
}

module.exports = postExpression;