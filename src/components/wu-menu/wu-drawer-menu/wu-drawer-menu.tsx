import { Component, Prop, Element, Method } from '@stencil/core'
import { detectTransitionEnd } from '../../../utils/animation'

@Component({
  tag: 'wu-drawer-menu',
  styleUrls: ['vars.css', 'wu-drawer-menu.scss']
  })
export class WuDrawerMenu {
  @Prop()
  theme?: string
  @Prop()
  position?: 'left' | 'right'

  @Element()
  el: HTMLElement

  overlay: HTMLElement

  constructor () {
    this.closeMenu = this.closeMenu.bind(this)
  }

  componentDidLoad () {
    this.overlay = this.el.querySelector('.side-menu-overlay')
    if (this.theme) {
      this.el.setAttribute('theme', this.theme)
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

  @Method()
  closeMenu (trigger?: HTMLElement) {
    this.el.classList.remove('open')
    if (trigger) {
      trigger.classList.remove('open')
    } else {
      const triggers = document.querySelectorAll('wu-burger')
      for (let i = 0; i < triggers.length; i++) {
        triggers[i].classList.remove('open')
      }
    }
    // remove overlay after fade out transition
    detectTransitionEnd(this.overlay, () => {
      this.overlay.style.cssText = 'display:none'
    })
  }

  @Method()
  openMenu (trigger: HTMLElement) {
    this.overlay.style.cssText = 'display:block'
    if (trigger) {
      trigger.classList.add('open')
    } else {
      const triggers = document.querySelectorAll('wu-burger')
      for (let i = 0; i < triggers.length; i++) {
        triggers[i].classList.add('open')
      }
    }
    this.el.classList.add('open')
    this.el.focus()
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
