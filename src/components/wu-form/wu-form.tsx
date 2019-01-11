import { Component } from '@stencil/core'

@Component({
  tag: 'wu-form',
  styleUrls: ['vars.css', 'wu-form.scss']
  })
export class WuForm {
  render () {
    return (
      <div>
        <slot />
      </div>
    )
  }
}
