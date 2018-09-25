import { Component, Prop, Element } from '@stencil/core'

@Component({
  tag: 'wu-header',
  styleUrls: ['vars.css', 'wu-header.scss']
  })
export class WuHeader {
  @Element()
  el: HTMLElement
  @Prop({ reflectToAttr: true })
  theme?: string
  @Prop({ reflectToAttr: true })
  fixed?: boolean

  componentDidLoad () {
    if (this.theme) {
      this.el.setAttribute('theme', this.theme)
    }
    if (this.fixed) {
      this.el.classList.add('fixed')
    }
  }

  render () {
    return <slot />
  }
}
