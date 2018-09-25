import { Component } from '@stencil/core'

@Component({
  tag: 'wu-page',
  styleUrl: 'wu-page.scss'
  })
export class WuPage {
  render () {
    return <slot />
  }
}
