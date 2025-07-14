const postExpression = async (exp) => {
    let response;

    try {
        response = await fetch('http://192.168.0.12/api/count', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                expression: exp
            })
        });
    } catch (error) {
        throw new Error('Error when fetch result:', error);
    }

    return await response.json();
}

// module.exports = postExpression;