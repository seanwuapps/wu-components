import { Component } from '@stencil/core';


@Component({
  tag: 'wu-divider',
  styleUrls:['vars.css','wu-divider.scss']
})
export class WuDivider {
  render() {
    return <slot />;
  }
}