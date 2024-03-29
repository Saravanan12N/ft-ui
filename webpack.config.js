const path = require('path');

module.exports ={
    entry : path.resolve(__dirname, 'src/index.js'),
    output: {
        path:path.join(__dirname,'public'),
        filename: 'bundle.js'
    },
    
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.scss$/i,
                use: ['style-loader', 'css-loader'],
            }
        ]
    },

}