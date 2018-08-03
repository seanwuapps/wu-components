import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-card',
  styleUrl: 'wu-card.scss'
})
export class WuCard {
  @Prop() title:string = '';
  render() {
    return <slot />
  }
}
