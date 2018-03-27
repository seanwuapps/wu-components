import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-shadow',
  styleUrl: 'wu-shadow.scss'
})
export class WuShadow {
  @Prop() type: string = 'box' // or drop
  @Prop() depth: number = 1
  render() {
    return (
      <div class={`shadow-${this.depth} ${this.type}`}>
        <slot />
      </div>
    )
  }
}
