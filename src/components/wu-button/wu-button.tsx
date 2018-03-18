import { Component, Element } from '@stencil/core'

@Component({
  tag: 'wu-button',
  styleUrl: 'wu-button.scss'
})
export class WuButton {
  @Element() button: HTMLElement

  render() {
    return <slot />
  }
}