import { Component, Element, Prop } from "@stencil/core";

@Component({
  tag: "wu-button",
  styleUrls: ["vars.css", "wu-button.scss"]
})
export class WuButton {
  @Element() button: HTMLElement;
  /**
   * If `href` attribute is specified, the button will be output as an `a` tag
   */
  @Prop() href?: string;

  /**
   * Html type of the button
   */
  @Prop() type: "submit" | "reset" | "button" = "button";

  /**
   * If this button is disabled
   */
  @Prop({ reflectToAttr: true }) disabled: boolean = false;

  /**
   * Button theme
   */
  @Prop({ reflectToAttr: true }) theme?: string;

  /**
   * Shape of the button
   */
  @Prop({ reflectToAttr: true }) shape?: "circle" | "round";

  /**
   * If use outline styles
   */
  @Prop({ reflectToAttr: true }) outline?: boolean;

  /**
   * If button will extend to full width
   */
  @Prop({ reflectToAttr: true }) block?: boolean;

  /**
   * If the button will use flat style
   */
  @Prop({ reflectToAttr: true }) flat?: boolean;

  componentDidLoad() {
    if (this.theme) {
      this.button.setAttribute("theme", this.theme);
    }

    if (this.shape) {
      this.button.classList.add(`shape-${this.shape}`);
    }
    if (this.outline) {
      this.button.classList.add(`outline`);
    }
    if (this.block) {
      this.button.classList.add(`block`);
    }
    if (this.flat) {
      this.button.classList.add(`flat`);
    }
  }

  onClick() {}
  render() {
    const TagType = this.href ? "a" : "button";
    const attrs =
      TagType === "button" ? { type: this.type } : { href: this.href };

    return (
      <TagType
        {...attrs}
        disabled={this.disabled}
        onClick={this.onClick.bind(this)}>
        <slot />
      </TagType>
    );
  }
}
