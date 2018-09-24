import { Component, Prop, Element } from '@stencil/core'
@Component({
  tag: 'wu-menu-item',
  styleUrl: 'wu-menu-item.scss'
})
export class WuMenuItem {
  @Element() el: HTMLElement;
  @Prop() theme?: string;

  componentDidLoad() {
    if(this.theme){
      this.el.setAttribute('theme', this.theme);
    }
  }

  render() {
    return (
      <div class="menu-item">
        <slot />
      </div>
    )
  }
}
