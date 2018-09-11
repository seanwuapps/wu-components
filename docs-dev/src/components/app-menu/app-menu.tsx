import { Component } from '@stencil/core';
import 'wu-components';

@Component({
  tag: 'app-menu'
})
export class AppMenu {
  
  render() {
    return (
    <wu-drawer-menu id="menu" position="left" class="open">
    <wu-menu-header theme="secondary" img="/assets/images/cap.svg" img-shape="circle" img-href="#">
      <span slot="title">
        <a href="#">Steve Rogers</a>
      </span>
      <span slot="sub-title">
        <a href="#">Captain America</a>
      </span>
    </wu-menu-header>
    
    <wu-menu-list>
      <wu-menu-item>
          <a href="#">
            <i class="material-icons">home</i>
            Home
          </a>
      </wu-menu-item>
      <wu-divider></wu-divider>
      <wu-menu-sub-heading>
        Components
      </wu-menu-sub-heading>
      {
        this.menuItems.map(item => (
          <wu-menu-item>
            <a href="#">
              <i class="material-icons">star_rate</i>
              Primary
            </a>
          </wu-menu-item>)
        )
      }
    </wu-menu-list>
  </wu-drawer-menu>
    );
  }
}