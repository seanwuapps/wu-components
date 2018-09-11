import { Component } from '@stencil/core';
import 'wu-components';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css'
})
export class AppRoot {

  render() {
    return (
      <div>
        <header>
          <h1>Wu Components Docs</h1>
        </header>

        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url='/' component='app-home' exact={true} />
              <stencil-route url='/component/:name' component='component-page' />
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
