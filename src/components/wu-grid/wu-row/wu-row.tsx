import { Component, Prop, Element } from '@stencil/core'

@Component({
  tag: 'wu-row',
  styleUrl: 'wu-row.scss'
  })
export class WuRow {
  @Element()
  el: HTMLElement
  @Prop({ mutable: true })
  gap: string = '0'
  @Prop({ mutable: true })
  autoMobile: boolean = true
  componentDidLoad () {
    this.el.style.cssText = `--gap:${this.gap}`
    if (this.autoMobile) {
      this.el.classList.add('auto-mobile')
    }
  }

  render () {
    return <slot />
  }
}
