const { resolve } = require('path');
 
module.exports = {
    mode: 'production',
    entry: './index.jsx',
    output: {
        path: resolve(__dirname, 'dist'),
        filename: 'index.js',
        libraryTarget: 'commonjs2'
    },
    context: resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    }
}
