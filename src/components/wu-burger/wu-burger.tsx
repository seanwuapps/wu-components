import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrls: ['vars.css', 'wu-burger.scss']
  })
export class WuBurger {
  @Element()
  burger: HTMLElement

  /**
   * Change the color of the burger using a theme
   */
  @Prop({ reflectToAttr: true })
  theme?: string

  /**
   * animation used to transition from burger icon to close icon
   */
  @Prop({ reflectToAttr: true, mutable: true })
  animation: 'middle-out' | 'spin-out' | 'rotate' = 'middle-out'

  /**
   * id of the target wu-drawer-menu element
   */
  @Prop({ reflectToAttr: true })
  target: string

  /**
   * if specified, burger icon will disappear at the screen size to accomodate "panel layout"
   */
  @Prop({ reflectToAttr: true }) panel?: 'xs' | 'sm' | 'md' | 'lg'

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
