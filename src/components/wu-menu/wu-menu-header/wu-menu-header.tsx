import { Component, Prop, Element } from '@stencil/core'
@Component({
  tag: 'wu-menu-header',
  styleUrl: 'wu-menu-header.scss'
})
export class WuMenuHeader {
  @Element() el: HTMLElement;
  @Prop() theme?: string;
  @Prop() img?: string;
  @Prop() imgHref?: string;
  @Prop({mutable: true}) imgShape?: 'circle' | 'square' = 'square'

  componentDidLoad() {
    if(this.theme){
      this.el.setAttribute('theme', this.theme);
    }
  }


  render() {
    return (
      <div>
        {this.img.length > 0 ? (
          <div class="img">
            {this.imgHref.length ? (
              <a href={this.imgHref}>
                <img src={this.img} class={this.imgShape === 'circle' ? 'circle' : null} />
              </a>
            ) : (
              <img src={this.img} class={this.imgShape === 'circle' ? 'circle' : null} />
            )}
          </div>
        ) : null}
        <div class="title">
          <slot name="title" />
        </div>
        <div class="sub-title">
          <slot name="sub-title" />
        </div>
      </div>
    )
  }
}
