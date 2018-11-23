import { Component } from '@stencil/core'

@Component({
  tag: 'wu-container',
  styleUrl: 'wu-container.scss'
  })
export class WuContainer {
  render () {
    return <slot />
  }
}
