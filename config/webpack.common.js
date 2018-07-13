const resolve = require('path').resolve;

module.exports = {
    entry: resolve('src'),
    output: {
        path: resolve('dist'),
        filename: 'yeti-table.js',
		libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                'babel-loader', 'ts-loader'
            ]
        }]
    },
    resolve: {
        extensions: ['.jsx', '.tsx', '.js', '.ts'],
        descriptionFiles: ['package.json'],
        modules: [
            resolve('node_modules'),
            'node_modules'
        ]
    },
    externals: {
        react: 'react'
    }
};