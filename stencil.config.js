const sass = require('@stencil/sass')
exports.config = {
  namespace: 'wu-components',
  plugins: [sass()],
  outputTargets: [
    {
      type: 'dist',
    },
    {
      type: 'www'
    }
  ],
  bundles: [
    {
      components: [
        'wu-row',
        'wu-col',
        'wu-card',
        'wu-spinner',
        'wu-shadow',
        'wu-burger',
        'wu-img',
        'wu-menu',
        'wu-accordion',
        'wu-accordion-header',
        'wu-rating',
        'wu-button',
        'wu-tinder-card',
        'code-block',
      ]
    }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
