async function postExpression(exp: String) {
    let response: Response;

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
        throw new Error('Error when fetch calculation result:' + error);
    }

    return response.json();
} 

export default postExpression;