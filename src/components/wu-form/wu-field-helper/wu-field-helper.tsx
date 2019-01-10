import { Component } from '@stencil/core'

@Component({
  tag: 'wu-field-helper',
  styleUrl: 'wu-field-helper.scss'
  })
export class WuFieldHelper {
  render () {
    return <slot />
  }
}
