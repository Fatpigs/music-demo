
module.exports = {
  entry: './src/home.js',
  output: {
    filename: './bundle.js'
  
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader','css-loader'],
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '../images/[name].[ext]'
        }
      }
    ],
  },
};
