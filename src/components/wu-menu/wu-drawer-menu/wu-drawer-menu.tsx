import { Component, Prop, Element } from '@stencil/core'
import { detectTransitionEnd } from '../../../utils/animation'

@Component({
  tag: 'wu-drawer-menu',
  styleUrls: ['vars.css', 'wu-drawer-menu.scss']
  })
export class WuDrawerMenu {
  @Prop()
  theme?: string
  @Prop()
  position?: string
  @Prop()
  items: Object | String = {
    home: {
      label: 'Home'
    }
  }
  @Element()
  el: HTMLElement

  constructor () {
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidLoad () {
    if (this.theme) {
      this.el.setAttribute('theme', this.theme)
    }

    // remove overlay after fade out transition
    let overlay: HTMLElement = this.el.querySelector('.side-menu-overlay')

    if (typeof this.items === 'string') {
      this.items = JSON.parse(this.items)
    }
    this.el.tabIndex = -1
    document.addEventListener('keyup', e => {
      if (e.keyCode === 27) {
        this.closeMenu()
      }
    })
    const focusable: NodeListOf<HTMLElement> = this.el.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )

    if (focusable.length) {
      const lastChild: HTMLElement = focusable[focusable.length - 1]
      const firstChild: HTMLElement = focusable[0]
      lastChild.addEventListener('blur', () => {
        firstChild.focus()
      })
    }
  }

  closeMenu () {
    this.el.classList.remove('open')
    const triggers = document.querySelectorAll('wu-burger')
    for (let i = 0; i < triggers.length; i++) {
      triggers[i].classList.remove('open')
    }
  }

  render () {
    return [
      <nav class="side-menu">
        <slot />
      </nav>,
      <div class="side-menu-overlay" onClick={() => this.closeMenu()} />
    ]
  }
}
