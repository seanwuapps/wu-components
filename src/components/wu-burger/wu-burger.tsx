import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrls: ['vars.css', 'wu-burger.scss']
  })
export class WuBurger {
  @Element()
  burger: HTMLElement
  @Prop({ reflectToAttr: true })
  theme?: string
  @Prop({ reflectToAttr: true, mutable: true })
  animation: string = 'middle-out'
  @Prop({ reflectToAttr: true })
  target: string

  targetMenu: Element

  componentDidLoad () {
    if (this.theme) {
      this.burger.setAttribute('theme', this.theme)
    }
    this.targetMenu = document.querySelector(this.target)
  }
  toggle () {
    if (this.burger.classList.contains('open')) {
      // close menu
      this.burger.classList.remove('open')
      if (this.targetMenu && typeof this.targetMenu['closeMenu'] === 'function') {
        // this.targetMenu.classList.remove('open')
        this.targetMenu['closeMenu'](this.burger)
      }
    } else {
      // open menu
      this.burger.classList.add('open')
      if (this.targetMenu && typeof this.targetMenu['openMenu'] === 'function') {
        // this.targetMenu.classList.add('open')
        // this.targetMenu.focus()
        this.targetMenu['openMenu'](this.burger)
      }
    }
  }

  render () {
    return (
      <button type="button" onClick={() => this.toggle()} class={this.animation}>
        <span />
        <span />
        <span />
      </button>
    )
  }
}
