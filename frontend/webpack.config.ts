const path = require('path');

module.exports = {
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    entry: {
        utils_side_bar: './public/js/src/utils/side-bar.ts',
        utils_keyboard: './public/js/src/utils/keyboardListener.ts',
        utils_main: './public/js/src/utils/main.ts',
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(path.dirname(__filename), 'public', 'js', 'dist'),
    },
};