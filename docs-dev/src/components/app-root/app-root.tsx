import { Component, Element } from '@stencil/core';
import 'wu-components';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {
  @Element() el: HTMLElement;
  
  render() {
    return (
      <div>
        <header>
          <wu-burger theme="primary" animation="middle-out" target="#menu"></wu-burger>
          <h1>Stencil App Starter</h1>
        </header>
        <app-menu menu-id="menu"></app-menu>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/profile/:name' component='app-profile'>
              </stencil-route>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
