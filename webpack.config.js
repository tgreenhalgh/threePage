module.exports = {
  entry: './src/index.jsx',
  output: {
    path: __dirname + '/dist/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
    {
      test: /\.jsx?$/,
      exclude: /(node_modules)/,
      loaders: ['babel']
    }]
  }
}
