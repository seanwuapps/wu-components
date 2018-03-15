import { Component, Element } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrl: 'wu-burger.scss'
})
export class WuBurger {
  @Element() burger: HTMLElement

  toggle() {
    if (this.burger.classList.contains('open')) {
      this.burger.classList.remove('open')
    } else {
      this.burger.classList.add('open')
    }
  }

  render() {
    return (
      <button type="button" onClick={() => this.toggle()}>
        <span />
        <span />
        <span />
      </button>
    )
  }
}
