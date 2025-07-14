const axios = require('axios/dist/browser/axios.cjs');
// import { axios } from 'axios/dist/browser/axios.cjs';

const postExpression = async (exp) => {
    let result;

    try {
        result = await axios.post('http://localhost:3000/count', {
            expression: exp
        });
    } catch (error) {
        throw new Error('Error when fetch result:', error);
    }

    return result;
}

module.exports = postExpression;