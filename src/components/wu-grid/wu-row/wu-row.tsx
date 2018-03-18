import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-row',
  styleUrl: 'wu-row.scss'
})
export class WuRow {
  @Prop() maxCols: number

  render() {
    return <slot />
  }
}
