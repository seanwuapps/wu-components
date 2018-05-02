import { Component } from '@stencil/core'
/**
 * reusable content component
 */
@Component({
  tag: 'wu-content',
  styleUrl: 'wu-content.scss'
})
export class WuContent {
  render() {
    return <slot />
  }
}
