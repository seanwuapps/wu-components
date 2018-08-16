import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'wu-drawer-menu',
  styleUrls: ['vars.css','wu-drawer-menu.scss']
})
export class WuDrawerMenu {
  @Prop() items: Object;
  
  componentDidLoad(){
    console.log(this.items);
  }
  render() {
    console.log(this.items);
    return (
      <nav class="side-menu">
        <ul>
          <li></li>
        </ul>
      </nav>
    )
  }
}
