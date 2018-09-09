import { Component, Prop } from '@stencil/core'
@Component({
  tag: 'wu-menu-header',
  styleUrl: 'wu-menu-header.scss'
})
export class WuMenuHeader {
  @Prop()
  img?: string = ''
  @Prop()
  imgShape?: 'circle' | 'square' = 'square'
  @Prop()
  imgHref?: string = ''
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
