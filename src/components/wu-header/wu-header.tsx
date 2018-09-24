import { Component, Prop, Element } from '@stencil/core';

@Component({
  tag: 'wu-header',
  styleUrl: 'wu-header.scss'
})
export class WuHeader {
  @Element() el: HTMLElement;
  @Prop({reflectToAttr: true}) theme?:string;

  componentDidLoad() {
    if(this.theme){
      this.el.setAttribute('theme', this.theme);
    }
  }

  render() {
    return <slot />
  }
}
