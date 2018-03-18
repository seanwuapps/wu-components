import { Component } from '@stencil/core'

@Component({
  tag: 'wu-accordion',
  styleUrl: 'wu-accordion.scss'
})
export class WuAccordion {
  render() {
    return <slot />
  }
}
