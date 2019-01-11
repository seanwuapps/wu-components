import { Component } from '@stencil/core'

@Component({
  tag: 'wu-divider',
  styleUrls: ['vars.css', 'wu-divider.scss']
  })
export class WuDivider {
  render () {
    return (
      <span>
        <slot />
        <span class="wu-divider-content">
          <slot name="divider-text" />
        </span>
      </span>
    )
  }
}
