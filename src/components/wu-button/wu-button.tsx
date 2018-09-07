import { Component, Element, Prop } from '@stencil/core'

@Component({
  tag: 'wu-button',
  styleUrls: ['vars.css','wu-button.scss']
})
export class WuButton {
  @Element() button: HTMLElement
  @Prop() href?: string;
  @Prop() type: 'submit' | 'reset' | 'button' = 'button';
  
  @Prop({ reflectToAttr: true }) disabled = false;
  onClick(){
    
  }
  render() {
    const TagType = this.href ? 'a' : 'button';
    const attrs = (TagType === 'button')
      ? { type: this.type }
      : { href: this.href };

    return (
      <TagType
        {...attrs}
        disabled={this.disabled}
        onClick={this.onClick.bind(this)}>
        <slot></slot>
      </TagType>
    )
  }
}
