import { Component, Prop, Element, Listen } from '@stencil/core'

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
  equalHeight: string = ''

  componentDidLoad() {
    this.el.style.cssText = `--gap:${this.gap}`
  }
  @Listen('window:load')
  doEqualHeight() {
    if (this.equalHeight.length) {
      setTimeout(() => {
        const elmList = this.el.querySelectorAll(this.equalHeight)
        const maxHeight = this.getMaxHeight(elmList)
        for (let i = 0; i < elmList.length; i++) {
          ;(elmList[i] as HTMLElement).style.height = maxHeight + 'px'
        }
      }, 100)
    }
  }

  getMaxHeight(els) {
    let result = 0
    for (let i = 0; i < els.length; i++) {
      const el = els[i]
      const height = parseFloat(window.getComputedStyle(el).height)
      if (height > result) {
        result = height
      }
    }
    return result
  }

  render() {
    return <slot />
  }
}
