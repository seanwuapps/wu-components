import { Component, Prop, Element } from '@stencil/core';


@Component({
  tag: 'wu-col',
  styleUrl: 'wu-col.scss'
})
export class WuCol {
  @Prop() basis: string = 'auto'
  @Element() col: HTMLElement;
  

  componentDidLoad() {
    if( this.basis !== 'auto') {
      this.col.style['flex-basis'] = this.basis      
    }
  }

  render() {
    return (
      <slot />
    );
  }
}
