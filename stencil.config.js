const sass = require('@stencil/sass')
exports.config = {
  namespace: 'wu-components',
  generateDistribution: true,
  serviceWorker: false,
  plugins: [sass()],
  bundles: [
    {
      components: [
        'wu-row',
        'wu-col',
        'wu-spinner',
        'wu-burger',
        'wu-accordion',
        'wu-accordion-header',
        'wu-accordion-content',
        'code-block'
      ]
    }
  ]
}

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
