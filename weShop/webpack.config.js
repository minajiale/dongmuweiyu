module.exports = {
  entry: './src/app.js',
  output: {
    path:'/.dist',
    filename: './dist/bundle.js'
  },
  module:{
    rules:[
      {test:/\.vue$/,use:'vue-loader'},
      {test:/\.css$/,use:'css-loader'}
    ]
  },
  plugins:[

  ]
};
