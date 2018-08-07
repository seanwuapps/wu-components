import { Component, Prop, Element } from '@stencil/core';


@Component({
  tag: 'wu-col',
  styleUrl: 'wu-col.scss'
})
export class WuCol {
  @Prop() basis: string = '';
  @Prop() portion: string = '1';
  @Element() col: HTMLElement;
  

  componentDidLoad() {
    this.col.style.cssText = `flex-grow: ${this.portion}`
    if(this.basis.length){
      this.col.style.cssText += `flex-basis: ${this.basis}; flex-shrink: 0;`
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
