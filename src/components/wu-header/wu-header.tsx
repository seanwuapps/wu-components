import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'wu-header',
  styleUrl: 'wu-header.scss'
})
export class WuHeader {
  @Prop({reflectToAttr: true}) theme?:string;

  render() {
    return <slot />
  }
}
