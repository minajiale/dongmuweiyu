module.exports = {
  entry: './src/app.js',
  output: {
    filename: './dist/bundle.js'
  },
  module:{
    rules:[
      {test:/\.vue$/,use:''}
    ]
  }
};
