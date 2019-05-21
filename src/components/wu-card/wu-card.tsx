import { Component, Prop, Element, State } from '@stencil/core'
import { isSlotEmpty } from '../../utils'
@Component({
  tag: 'wu-card',
  styleUrls: ['vars.css', 'wu-card.scss']
})
export class WuCard {
  @Element()
  el: HTMLElement

  /**
   * Title of the card
   */
  @Prop()
  cardTitle?: string

  /**
   * Subtitle of the card
   */
  @Prop()
  cardSubtitle?: string

  /**
   *
   */
  @Prop()
  thumbnailSrc?: string

  /**
   * Card image source url, if specified, image will display on top of the card.
   */
  @Prop()
  mediaSrc?: string

  /**
   * Thumbnail version of the card image, image will be loaded progressively if `media-thumb` is specified
   */
  @Prop()
  mediaThumb?: string

  /**
   * Card image alt text
   */
  @Prop()
  mediaAlt?: string

  /**
   * Position of media in the card
   */
  @Prop({ mutable: true }) mediaAbove: boolean = false

  /**
   * If this card is hoverable
   */
  @Prop({ mutable: true, reflectToAttr: true }) hover?: boolean

  /**
   * If this card has flat (border) style
   */
  @Prop({ mutable: true, reflectToAttr: true }) flat?: boolean

  /**
   * Make card themable
   */
  @Prop({ mutable: true, reflectToAttr: true }) theme?: string

  @Prop() onCardClick: (ev: Event) => void
  @State()
  hasFooter: boolean

  componentDidLoad() {
    this.hasFooter = isSlotEmpty(this.el, 'footer')
    if (this.hover) {
      this.el.classList.add('hoverable')
    }
    if (this.flat) {
      this.el.classList.add('flat')
    }
  }
  handleClick(e: Event) {
    console.log('card click')
    if (this.onCardClick) {
      this.onCardClick(e)
    }
  }

  render() {
    return (
      <div>
        {this.mediaSrc && this.mediaAbove ? (
          <wu-img
            class='card-media'
            src={this.mediaSrc}
            thumb={this.mediaThumb}
            alt={this.mediaAlt}
            onClick={e => this.handleClick(e)}
          />
        ) : null}

        <div class={this.mediaAbove ? 'title-row media-above' : 'title-row'}>
          {this.cardTitle && (
            <div
              class='card-title'
              innerHTML={this.cardTitle}
              onClick={e => this.handleClick(e)}
            />
          )}

          {this.cardSubtitle && (
            <div
              class='card-subtitle'
              innerHTML={this.cardSubtitle}
              onClick={e => this.handleClick(e)}
            />
          )}
        </div>

        {this.mediaSrc && !this.mediaAbove ? (
          <wu-img
            class='card-media'
            src={this.mediaSrc}
            thumb={this.mediaThumb}
            alt={this.mediaAlt}
            onClick={e => this.handleClick(e)}
          />
        ) : null}

        <div class='card-body'>
          <slot />
        </div>
        <div class='card-footer'>
          <div class='footer-left'>
            <slot name='footer-left' />
          </div>
          <div class='footer-right'>
            <slot name='footer-right' />
          </div>
        </div>
      </div>
    )
  }
}
