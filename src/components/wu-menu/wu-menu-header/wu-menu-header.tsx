import { Component, Prop } from '@stencil/core'
@Component({
  tag: 'wu-menu-header',
  styleUrl: 'wu-menu-header.scss'
})
export class WuMenuHeader {
  @Prop() img?: string = '';
  @Prop() imgShape?: 'circle' | 'square' = 'square';

  render() {
    return (
      <div>
        { 
          this.img.length > 0 ? 
          <div class="img">
            <img src={this.img} class={this.imgShape === 'circle' ? 'circle' : null}></img>
          </div>
          : null
        }
        <div class="title">
          <slot name="title" />
        </div>
        <div class="sub-title">
          <slot name="sub-title"/>
        </div>
      </div>
    );
  }
}
