import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-container',
  styleUrl: 'wu-container.scss'
  })
export class WuContainer {
  @Prop({ reflectToAttr: true }) fluid: boolean
  @Prop({ reflectToAttr: true }) fillHeight: boolean
  render () {
    return <slot />
  }
}
