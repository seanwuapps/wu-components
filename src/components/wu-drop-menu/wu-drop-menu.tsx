import { Component, State } from '@stencil/core'

@Component({
  tag: 'wu-drop-menu',
  styleUrls: ['vars.css', 'wu-drop-menu.scss']
})
export class WuDropMenu {
  @State() open: boolean = false
  toggle() {
    this.open = !this.open
  }
  render() {
    return (
      <div>
        <button
          type='button'
          class='menu-trigger'
          onClick={() => this.toggle()}>
          <slot name='trigger' />
        </button>
        <div class={this.open ? 'menu-content open' : 'menu-content'}>
          <slot />
        </div>
      </div>
    )
  }
}
