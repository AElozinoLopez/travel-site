const path = require('path')

const postCSSPlugins = [
    require('postcss-simple-vars'),
    require('postcss-nested'),
    require('autoprefixer')
]

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
                use: ['style-loader', 'css-loader', {loader: "postcss-loader", options: {postcssOptions: {plugins: postCSSPlugins}}}]  //This allows webpack to apply the style to the browser and bundle the css file respectively.
            }
        ]
    }
}