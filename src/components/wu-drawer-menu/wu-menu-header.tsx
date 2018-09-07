import { Component } from '@stencil/core'
@Component({
  tag: 'wu-menu-header',
})
export class WuMenuHeader {
  render() {
    return <slot />;
  }
}
