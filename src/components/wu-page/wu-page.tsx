import { Component, Prop, Element } from '@stencil/core'

@Component({
  tag: 'wu-page',
  styleUrl: 'wu-page.scss'
  })
export class WuPage {
  @Element()
  el: HTMLElement
  @Prop()
  reflectFixedHeader?: boolean
  componentDidLoad () {
    if (this.reflectFixedHeader) {
      this.el.classList.add('.reflect-fixed-header')
    }
  }
  render () {
    return <slot />
  }
}
