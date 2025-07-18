const path = require('path');

module.exports = {
    mode: 'development',
    entry: {
        utils_keyboard: './public/js/utils/keyboardListener.js',
        utils_main: './public/js/utils/main.js',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'public', 'js', 'bundles'),
    },
};