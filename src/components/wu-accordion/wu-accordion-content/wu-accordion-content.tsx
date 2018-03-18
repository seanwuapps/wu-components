import { Component } from '@stencil/core'

@Component({
  tag: 'wu-accordion-content',
  styleUrl: 'wu-accordion-content.scss'
})
export class WuAccodionContent {
  render() {
    return <slot />
  }
}
