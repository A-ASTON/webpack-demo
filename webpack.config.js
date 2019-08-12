const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    mode: 'development', //set mode to 'development'

    // entry: './src/index.js',
    //rewrite the entry like this:
    entry: {
        app: './src/index.js'
        // print: './src/print.js'   //it will generate the files called ~/dist/app.bundle.js and ~/dist/print.bundle.js
    },

    //
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        hot: true   //use the built-in HMR plugin
        //or just use the CLI to modify the webpack-dev-server configuration with the following command:webpack-dev-server --hotOnly
        
    },

    //manage the plugins
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            titleL: 'Output Management'
        })
    ],

    //manage the output files
    output: {
        filename: '[name].bundle.js',  //there is a change here too 
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }

    
    // module: {
    //     rules: [    //define rules
    //         {
    //             test: /\.css$/,             //any file ends with '.css'   
    //             use: [                      //will be served to the style-loader and the css-loader 
    //                 'style-loader',
    //                 'css-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(png|svg|jpg|gif)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(woff|woff2|eot|ttf|otf)$/,
    //             use: [
    //                 'file-loader'
    //             ]
    //         },
    //         {
    //             test: /\.(csv|tsv)$/,
    //             use: [
    //                 'csv-loader'
    //             ]
    //         },
    //         {
    //             test: /\.xml$/,
    //             use: [
    //                 'xml-loader'
    //             ]
    //         }
    //     ]
    // }
};