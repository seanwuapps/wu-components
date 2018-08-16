import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrls: ['vars.css','wu-burger.scss']
})
export class WuBurger {
  @Element() burger: HTMLElement
  @Prop() animation: string = 'middle-out'; 
  @Prop() target: string;

  toggle() {
    let menu:HTMLElement = document.querySelector(this.target);
    if (this.burger.classList.contains('open')) {
      // close menu
      this.burger.classList.remove('open')
      menu.classList.remove('open')
    } else {
      // open menu
      this.burger.classList.add('open')
      menu.classList.add('open')
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
