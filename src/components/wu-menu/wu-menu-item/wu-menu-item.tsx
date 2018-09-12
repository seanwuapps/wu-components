import { Component, Prop } from '@stencil/core'
@Component({
  tag: 'wu-menu-item',
  styleUrl: 'wu-menu-item.scss'
})
export class WuMenuItem {
  
  @Prop() theme?: string;
  render() {
    return (
      <div class="menu-item">
        <slot />
      </div>
    )
  }
}
