module.exports = require('mosaaaico2')({
  module: {
    loaders: [{
      test: /\.(pug|jade)$/,
      loader: 'html!pug-html?exports=false'
    }]
  }
})
