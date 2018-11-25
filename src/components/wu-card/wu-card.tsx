import { Component, Prop, Element, State } from '@stencil/core'
import { isSlotEmpty } from '../../utils'
@Component({
  tag: 'wu-card',
  styleUrls: ['vars.css', 'wu-card.scss']
  })
export class WuCard {
  @Prop()
  cardTitle: string = ''
  @Element()
  el: HTMLElement

  @Prop()
  thumb: string = ''
  @Prop()
  src: string = ''
  @Prop()
  alt: string = ''

  @State()
  hasFooter: boolean

  componentDidLoad () {
    this.hasFooter = isSlotEmpty(this.el, 'footer')
  }
  render () {
    return (
      <div class="card">
        {this.src ? <wu-img class="card-media" src={this.src} thumb={this.thumb} alt={this.alt} /> : null}
        <div>
          <div class="card-title">{this.cardTitle}</div>
          <div class="card-body">
            <slot />
          </div>
        </div>
        {this.hasFooter ? (
          <div class="card-footer">
            <slot name="footer" />
          </div>
        ) : null}
      </div>
    )
  }
}
