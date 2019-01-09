import { Component } from '@stencil/core'

@Component({
  tag: 'wu-form',
  styleUrls: ['vars.css', 'wu-form.scss']
  })
export class WuForm {
  onToggleChange (e) {
    console.log(e.detail)
  }
  render () {
    return (
      <div>
        <slot />
      </div>
    )
  }
}
