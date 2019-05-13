import { Component, Prop, Element, State } from "@stencil/core";
import { isSlotEmpty } from "../../utils";
@Component({
  tag: "wu-card",
  styleUrls: ["vars.css", "wu-card.scss"]
})
export class WuCard {
  @Element()
  el: HTMLElement;

  /**
   * Title of the card
   */
  @Prop()
  cardTitle?: string = "";

  /**
   * Card image source url, if specified, image will display on top of the card.
   */
  @Prop()
  src?: string = "";

  /**
   * Thumbnail version of the card image, image will be loaded progressively if `thumb` is specified
   */
  @Prop()
  thumb?: string = "";

  /**
   * Card image alt text
   */
  @Prop()
  alt?: string = "";

  /**
   * If this card is hoverable
   */
  @Prop({ reflectToAttr: true }) hover?: boolean;

  /**
   * If this card has flat (border) style
   */
  @Prop({ reflectToAttr: true }) flat?: boolean;

  /**
   * Make card themable
   */
  @Prop({ reflectToAttr: true }) theme?: boolean;

  @State()
  hasFooter: boolean;

  componentDidLoad() {
    this.hasFooter = isSlotEmpty(this.el, "footer");
    if (this.hover) {
      this.el.classList.add("hoverable");
    }
    if (this.flat) {
      this.el.classList.add("flat");
    }
  }
  render() {
    return (
      <div class='card'>
        {this.src && (
          <wu-img
            class='card-media'
            src={this.src}
            thumb={this.thumb}
            alt={this.alt}
          />
        )}
        <div>
          {this.cardTitle && (
            <div class='card-title' innerHTML={this.cardTitle} />
          )}
          <div class='card-body'>
            <slot />
          </div>
        </div>
        {this.hasFooter && (
          <div class='card-footer'>
            <slot name='footer' />
          </div>
        )}
      </div>
    );
  }
}
