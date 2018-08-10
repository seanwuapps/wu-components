import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrl: 'wu-burger.scss'
})
export class WuBurger {
  @Element() burger: HTMLElement
  @Prop() animation: string = 'middle-out'; 

  toggle() {
    if (this.burger.classList.contains('open')) {
      this.burger.classList.remove('open')
    } else {
      this.burger.classList.add('open')
    }
  }

  render() {
    return (
      <button type="button" onClick={() => this.toggle()} class={this.animation}>
        <span />
        <span />
        <span />
      </button>
    )
  }
}
