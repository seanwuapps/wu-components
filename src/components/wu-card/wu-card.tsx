import { Component } from '@stencil/core'

@Component({
  tag: 'wu-card',
  styleUrl: 'wu-card.scss'
})
export class WuCard {
  render() {
    return <slot />
  }
}
