import { Component, Prop, Element } from '@stencil/core'

@Component({
  tag: 'wu-row',
  styleUrl: 'wu-row.scss'
})
export class WuRow {
  @Prop() gap: string = '0';
  @Element() el: HTMLElement;

  componentDidLoad(){
    this.el.style.cssText = `--gap:${this.gap}`;
  }


  render() {
    return <slot />
  }
}
