import { Component } from '@stencil/core';


@Component({
  tag: 'app-menu'
})
export class AppMenu {
  
  render() {
    return [
      <wu-burger theme="primary" target="#menu"></wu-burger>,
      <wu-drawer-menu>
        
      </wu-drawer-menu>
    ];
  }
}