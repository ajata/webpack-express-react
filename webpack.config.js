module.exports = {
  entry: './dist/app.js',
  output: {
    path: './build',
    filename: 'bundle.js'       
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015','react']
        }
      },
      { test: /\.scss$/, loader:'style!css!sass-loader'},
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json'] 
  }
};