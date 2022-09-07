var path = require('path');
module.exports = {
    mode: 'none',
    entry: './src/index.js',
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        compress: true,
        port: 9000,
    },
    module: {
        rules: [
            {
                loader: 'babel-loader',
                test: '/.(js|jsx)$/',
                exclude: /node_modules/,
            },
        ],
    },
};
