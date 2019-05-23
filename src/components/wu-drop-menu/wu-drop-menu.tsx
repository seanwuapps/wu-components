import { Component, State, Element } from '@stencil/core'

@Component({
  tag: 'wu-drop-menu',
  styleUrls: ['vars.css', 'wu-drop-menu.scss']
})
export class WuDropMenu {
  @Element() el: HTMLElement
  @State() open: boolean = false
  toggle() {
    this.open = !this.open
  }

  componentDidLoad() {
    document.addEventListener('click', event => {
      var isClickInside = this.el.contains(event.target as HTMLElement)

      if (!isClickInside) {
        this.open = false
      }
    })

    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        //esc
        this.open = false
      }
    })

    this.el.addEventListener('click', e => {
      e.stopPropagation()
    })
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
