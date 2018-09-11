/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */

import '@stencil/core';

declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLElement {
    componentOnReady?: () => Promise<this | null>;
  }

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;

    forceUpdate(): void;
  }

  interface HTMLAttributes {}
}

import 'wu-components';
import '@stencil/router';
import '@stencil/state-tunnel';

import {
  MatchResults,
} from '@stencil/router';

declare global {

  namespace StencilComponents {
    interface AppHome {

    }
  }

  interface HTMLAppHomeElement extends StencilComponents.AppHome, HTMLStencilElement {}

  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };
  interface HTMLElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  interface ElementTagNameMap {
    'app-home': HTMLAppHomeElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-home': JSXElements.AppHomeAttributes;
    }
  }
  namespace JSXElements {
    export interface AppHomeAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppMenu {

    }
  }

  interface HTMLAppMenuElement extends StencilComponents.AppMenu, HTMLStencilElement {}

  var HTMLAppMenuElement: {
    prototype: HTMLAppMenuElement;
    new (): HTMLAppMenuElement;
  };
  interface HTMLElementTagNameMap {
    'app-menu': HTMLAppMenuElement;
  }
  interface ElementTagNameMap {
    'app-menu': HTMLAppMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-menu': JSXElements.AppMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface AppMenuAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppProfile {
      'match': MatchResults;
    }
  }

  interface HTMLAppProfileElement extends StencilComponents.AppProfile, HTMLStencilElement {}

  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };
  interface HTMLElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  interface ElementTagNameMap {
    'app-profile': HTMLAppProfileElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-profile': JSXElements.AppProfileAttributes;
    }
  }
  namespace JSXElements {
    export interface AppProfileAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface AppRoot {

    }
  }

  interface HTMLAppRootElement extends StencilComponents.AppRoot, HTMLStencilElement {}

  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };
  interface HTMLElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  interface ElementTagNameMap {
    'app-root': HTMLAppRootElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'app-root': JSXElements.AppRootAttributes;
    }
  }
  namespace JSXElements {
    export interface AppRootAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface ComponentPage {
      'match': MatchResults;
    }
  }

  interface HTMLComponentPageElement extends StencilComponents.ComponentPage, HTMLStencilElement {}

  var HTMLComponentPageElement: {
    prototype: HTMLComponentPageElement;
    new (): HTMLComponentPageElement;
  };
  interface HTMLElementTagNameMap {
    'component-page': HTMLComponentPageElement;
  }
  interface ElementTagNameMap {
    'component-page': HTMLComponentPageElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'component-page': JSXElements.ComponentPageAttributes;
    }
  }
  namespace JSXElements {
    export interface ComponentPageAttributes extends HTMLAttributes {
      'match'?: MatchResults;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
