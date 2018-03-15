import { Component } from '@stencil/core'

@Component({
  tag: 'wu-row',
  styleUrl: 'wu-row.scss'
})
export class WuRow {
  render() {
    return <slot />
  }
}
