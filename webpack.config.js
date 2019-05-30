const path = require('path');
module.exports = {
	// entry: './src/index.ts',
	// entry: ['./src/index.ts', './src/01basic.ts'],
	// entry: './src/01fromEvent.ts',
	entry: './src/02Operator.ts',
    devtool: 'inline-source-map',
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
      extensions: [ '.tsx', '.ts', '.js' ]
    },
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    }
};