const path = require('path')

module.exports = {
    entry: './app/assets/scripts/App.js',
    output: {
        filename: 'bundled.js',
        path: path.resolve(__dirname, 'app')
    },
    mode: 'development',
    watch: true,
    module: {
        rules: [
            {
                test: /\.css$/i,  //This tells webpack to treat any file with .css extension
                use: ['style-loader', 'css-loader']  //This allows webpack to apply the style to the browser and bundle the css file respectively.
            }
        ]
    }
}