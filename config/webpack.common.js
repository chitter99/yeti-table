const resolve = require('path').resolve;
const TypescriptDeclarationPlugin = require('typescript-declaration-webpack-plugin');

module.exports = {
    entry: {
        'index': resolve('src'),
        'styling': resolve('src/styling')
    },
    output: {
        path: resolve('dist'),
        filename: '[name].js',
		libraryTarget: 'umd'
    },
    module: {
        rules: [{
            test: /\.tsx?$/,
            use: [
                'babel-loader', 'ts-loader'
            ]
        },
        {
            test: /\.css/,
            use: [
                'style-loader', 'css-loader'
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
    },
	plugins: [
		new TypescriptDeclarationPlugin({
			out: 'index.d.ts'
		})
	]
};