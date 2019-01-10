import { Component } from '@stencil/core'

@Component({
  tag: 'wu-field-stacked',
  styleUrl: 'wu-field-stacked.scss'
  })
export class WuFieldStacked {
  render () {
    return <slot />
  }
}
