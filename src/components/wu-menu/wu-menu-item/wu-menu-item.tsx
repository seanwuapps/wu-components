import { Component } from '@stencil/core'
@Component({
  tag: 'wu-menu-item',
  styleUrl: 'wu-menu-item.scss'
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
