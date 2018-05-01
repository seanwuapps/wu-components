import { Component } from '@stencil/core'

@Component({
  tag: 'wu-content',
  styleUrl: 'wu-content.scss'
})
export class WuContent {
  render() {
    return <slot />
  }
}
