import { Component } from '@stencil/core'

@Component({
  tag: 'wu-float-aside',
  styleUrl: 'wu-float-aside.scss'
})
export class WuFloatAside {
  @Prop() trigger: string = 'Click here'

  render() {
    return <slot />
  }
}
