var sass = require('@stencil/sass')
var postcss = require('@stencil/postcss')
var autoprefixer = require('autoprefixer')
var pxtorem = require('postcss-pxtorem')
var postcssNormalize = require('postcss-normalize')

exports.config = {
  namespace: 'wu-components',
  plugins: [
    sass.sass({
      injectGlobalPaths: ['src/sass/mixins.scss']
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
  outputTargets: [{ type: 'dist' }, { type: 'www' }, { type: 'docs' }],
  globalStyle: 'src/globals/globals.scss',
  enableCache: false,
  hashFileNames: true
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
