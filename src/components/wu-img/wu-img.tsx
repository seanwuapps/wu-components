import { Component, Prop, Element, State } from '@stencil/core'

@Component({
  tag: 'wu-img',
  styleUrl: 'wu-img.scss'
})
export class WuImg {
  @Element() el: HTMLElement

  @Prop() thumb: string
  @Prop() src: string
  @Prop() alt: string
  @Prop({reflectToAttr:true}) shape?: string //'square'|'circle'|'16:9'|'5:4'
  @Prop({reflectToAttr:true}) positionX?: string //'center'|'left'|'right'|...(css)
  @Prop({reflectToAttr:true}) positionY?: string //'center'|'top'|'bottom'|...(css)

  @State() loading: boolean = true

  onFullImageLoaded = () => {
    const mainImg: HTMLImageElement = this.el.querySelector('img.main')
    const loaderImg: HTMLImageElement = this.el.querySelector('img.loader')
    mainImg.src = loaderImg.src
    loaderImg.parentNode.removeChild(loaderImg)
    this.loading = false
  }

  render() {
    return (
      <div>
        <img src={this.thumb} alt={this.alt} class={this.loading ? 'main' : 'main loaded'} />
        <img src={this.src} alt={this.alt} class="loader" onLoad={() => this.onFullImageLoaded()} />
      </div>
    )
  }
}
