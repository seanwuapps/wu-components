import { Config } from '@stencil/core';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  copy:[
    {src: 'demo-pages/'}
  ],
  outputTargets: [{
    type: 'www',
    dir: '../docs'
  }]
};
