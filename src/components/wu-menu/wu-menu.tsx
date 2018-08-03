import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-menu',
  styleUrl: 'wu-menu.scss'
})
export class WuMenu {
  @Prop() menuItems: Object;
  

  render() {
    return (
      <div class="side-menu">
        
      </div>
    )
  }
}
