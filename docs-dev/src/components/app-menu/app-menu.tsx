import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'app-menu'
})
export class AppMenu {
  @Prop() menuId: string;

  menuItems = [
    {}
  ]

  render() {
    return <wu-drawer-menu id={this.menuId}>
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
          Themes
        </wu-menu-sub-heading>
        <wu-menu-item theme="primary">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Primary
          </a>
        </wu-menu-item>
        <wu-menu-item theme="secondary">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Secondary
          </a>
        </wu-menu-item>
        <wu-menu-item theme="success">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Success
          </a>
        </wu-menu-item>
        <wu-menu-item theme="warning">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Warning
          </a>
        </wu-menu-item>
        <wu-menu-item theme="danger">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Danger
          </a>
        </wu-menu-item>
        <wu-menu-item theme="info">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Info
          </a>
        </wu-menu-item>
        <wu-menu-item theme="dark">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Dark
          </a>
        </wu-menu-item>
        <wu-menu-item theme="grey">
          <a href="#">
            <i class="material-icons">star_rate</i>
            Grey
          </a>
        </wu-menu-item>
      </wu-menu-list>
    </wu-drawer-menu>
  }
}
