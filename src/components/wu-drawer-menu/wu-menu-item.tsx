import { Component } from '@stencil/core'
@Component({
  tag: 'wu-menu-item'
})
export class WuMenuItem {
  
  render() {
    return (
      <div class="menu-item">
        <slot />
      </div>
    )
  }
}
