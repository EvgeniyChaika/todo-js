const path = require('path');

module.exports = {
    entry: './src/index.jsx',

    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public'),
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    'react-hot-loader',
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react']
                        }
                    }
                ]
            }
        ]
    },

    devServer: {
        proxy: {
            '/api': 'http://localhost:3000'
        }
    },

    devtool: 'cheap-eval-source-map',

    resolve: {
        extensions: ['.js', '.jsx', '.json', '*']
    }
};