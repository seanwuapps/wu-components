var sass = require('@stencil/sass')
var postcss = require('@stencil/postcss')
var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem')
var postcssNormalize = require('postcss-normalize')

exports.config = {
  namespace: 'wu-components',
  plugins: [
    sass.sass({
      injectGlobalPaths: ['src/sass/mixins.scss', 'src/sass/utils.scss']
    }),
    postcss.postcss({
      plugins: [
        postcssNormalize(),
        pxtorem({
          replace: false
        }),
        autoprefixer()
      ]
    })
  ],
  outputTargets: [{ type: 'dist' }, { type: 'www' }],
  globalStyle: 'src/globals/vars.css'
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
