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

  @State()
  hasFooter: boolean

  @State()
  hasCustomTitle: boolean

  @State()
  hasOverflowMenu: boolean

  componentDidLoad() {
    this.hasFooter = isSlotEmpty(this.el, 'footer')
    this.hasCustomTitle = isSlotEmpty(this.el, 'custom-title')
    this.hasOverflowMenu = isSlotEmpty(this.el, 'overflow-menu')

    if (this.hover) {
      this.el.classList.add('hoverable')
    }
    if (this.flat) {
      this.el.classList.add('flat')
    }
  }

  render() {
    const titleRowClass =
      'title-row' +
      (this.mediaAbove ? ' media-above' : '') +
      (this.hasOverflowMenu ? ' has-overflow-menu' : '')

    return (
      <div>
        <div
          class={this.mediaAbove ? 'overflow-menu on-media' : 'overflow-menu'}>
          <slot name='overflow-menu' />
        </div>
        <div class='card'>
          {this.mediaSrc && this.mediaAbove ? (
            <wu-img
              class='card-media'
              src={this.mediaSrc}
              thumb={this.mediaThumb}
              alt={this.mediaAlt}
            />
          ) : null}

          <div class={titleRowClass}>
            <slot name='custom-title' />
            {!this.hasCustomTitle && this.cardTitle && (
              <div class='card-title'>{this.cardTitle}</div>
            )}

            {!this.hasCustomTitle && this.cardSubtitle && (
              <div class='card-subtitle'>{this.cardSubtitle}</div>
            )}
          </div>

          {this.mediaSrc && !this.mediaAbove ? (
            <wu-img
              class='card-media'
              src={this.mediaSrc}
              thumb={this.mediaThumb}
              alt={this.mediaAlt}
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
      </div>
    )
  }
}
