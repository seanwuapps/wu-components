import { Component, Element, Prop } from '@stencil/core'
import Rellax from 'rellax'
@Component({
  tag: 'wu-parallax',
  styleUrl: 'wu-parallax.scss'
  })
export class WuParallax {
  @Prop({ mutable: true }) speed: number = -2
  @Prop() imgSrc: string
  @Prop() imgThumb: string
  @Prop({ reflectToAttr: true }) center: boolean

  @Element() el: HTMLElement
  rellax: any
  componentDidLoad () {
    this.rellax = new Rellax(this.el, {
      speed: this.speed,
      center: true,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false
    })
  }
  render () {
    return (
      <div class="parallax-container">
        <div class="parallax-bg" style={{ backgroundImage: `url(${this.imgSrc})` }} />
        <div class="parallax-content">
          <slot />
        </div>
      </div>
    )
  }
}
