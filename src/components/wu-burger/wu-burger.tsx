import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-burger',
  styleUrls: ['vars.css','wu-burger.scss']
})
export class WuBurger {
  @Element() burger: HTMLElement;
  @Prop({reflectToAttr: true}) theme?: string;
  @Prop({reflectToAttr: true, mutable: true}) animation: string = 'middle-out';
  @Prop({reflectToAttr: true}) target: string;

  componentDidLoad() {
    if(this.theme){
      this.burger.setAttribute('theme', this.theme);
    }
  }
  toggle() {
    let menu:HTMLElement = document.querySelector(this.target);

    if (this.burger.classList.contains('open')) {
      // close menu
      this.burger.classList.remove('open')
      if(menu){
        menu.classList.remove('open')
      }
    } else {
      // open menu
      this.burger.classList.add('open')
      if(menu){
        menu.classList.add('open')
        menu.focus();
      }
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
