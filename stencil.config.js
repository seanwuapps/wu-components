var sass = require('@stencil/sass');
var postcss = require('@stencil/postcss');
var autoprefixer = require('autoprefixer');

exports.config = {
  namespace: 'wu-components',
  plugins: [
    sass.sass(),
    postcss.postcss({
      plugins: [
        autoprefixer()
      ]
    })
  ],
  outputTargets: [
    {type: 'dist'},
    {type: 'www'}
  ],
  globalStyle: 'src/globals/vars.css'
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
