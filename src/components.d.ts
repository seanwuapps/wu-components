/**
 * This is an autogenerated file created by the Stencil build process.
 * It contains typing information for all components that exist in this project
 * and imports for stencil collections that might be configured in your stencil.config.js file
 */
declare global {
  namespace JSX {
    interface Element {}
    export interface IntrinsicElements {}
  }
  namespace JSXElements {}

  interface HTMLStencilElement extends HTMLElement {
    componentOnReady(): Promise<this>;
    componentOnReady(done: (ele?: this) => void): void;
  }

  interface HTMLAttributes {}
}


import {
  WuAccodionContent as WuAccordionContent
} from './components/wu-accordion/wu-accordion-content/wu-accordion-content';

declare global {
  interface HTMLWuAccordionContentElement extends WuAccordionContent, HTMLStencilElement {
  }
  var HTMLWuAccordionContentElement: {
    prototype: HTMLWuAccordionContentElement;
    new (): HTMLWuAccordionContentElement;
  };
  interface HTMLElementTagNameMap {
    "wu-accordion-content": HTMLWuAccordionContentElement;
  }
  interface ElementTagNameMap {
    "wu-accordion-content": HTMLWuAccordionContentElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-accordion-content": JSXElements.WuAccordionContentAttributes;
    }
  }
  namespace JSXElements {
    export interface WuAccordionContentAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WuAccordionHeader as WuAccordionHeader
} from './components/wu-accordion/wu-accordion-header/wu-accordion-header';

declare global {
  interface HTMLWuAccordionHeaderElement extends WuAccordionHeader, HTMLStencilElement {
  }
  var HTMLWuAccordionHeaderElement: {
    prototype: HTMLWuAccordionHeaderElement;
    new (): HTMLWuAccordionHeaderElement;
  };
  interface HTMLElementTagNameMap {
    "wu-accordion-header": HTMLWuAccordionHeaderElement;
  }
  interface ElementTagNameMap {
    "wu-accordion-header": HTMLWuAccordionHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-accordion-header": JSXElements.WuAccordionHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface WuAccordionHeaderAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WuAccordion as WuAccordion
} from './components/wu-accordion/wu-accordion';

declare global {
  interface HTMLWuAccordionElement extends WuAccordion, HTMLStencilElement {
  }
  var HTMLWuAccordionElement: {
    prototype: HTMLWuAccordionElement;
    new (): HTMLWuAccordionElement;
  };
  interface HTMLElementTagNameMap {
    "wu-accordion": HTMLWuAccordionElement;
  }
  interface ElementTagNameMap {
    "wu-accordion": HTMLWuAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-accordion": JSXElements.WuAccordionAttributes;
    }
  }
  namespace JSXElements {
    export interface WuAccordionAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WuButton as WuButton
} from './components/wu-button/wu-button';

declare global {
  interface HTMLWuButtonElement extends WuButton, HTMLStencilElement {
  }
  var HTMLWuButtonElement: {
    prototype: HTMLWuButtonElement;
    new (): HTMLWuButtonElement;
  };
  interface HTMLElementTagNameMap {
    "wu-button": HTMLWuButtonElement;
  }
  interface ElementTagNameMap {
    "wu-button": HTMLWuButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-button": JSXElements.WuButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface WuButtonAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WuFloatAside as WuFloatAside
} from './components/wu-float-aside/wu-float-aside';

declare global {
  interface HTMLWuFloatAsideElement extends WuFloatAside, HTMLStencilElement {
  }
  var HTMLWuFloatAsideElement: {
    prototype: HTMLWuFloatAsideElement;
    new (): HTMLWuFloatAsideElement;
  };
  interface HTMLElementTagNameMap {
    "wu-float-aside": HTMLWuFloatAsideElement;
  }
  interface ElementTagNameMap {
    "wu-float-aside": HTMLWuFloatAsideElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-float-aside": JSXElements.WuFloatAsideAttributes;
    }
  }
  namespace JSXElements {
    export interface WuFloatAsideAttributes extends HTMLAttributes {
      trigger?: string;
    }
  }
}


import {
  WuCol as WuCol
} from './components/wu-grid/wu-col/wu-col';

declare global {
  interface HTMLWuColElement extends WuCol, HTMLStencilElement {
  }
  var HTMLWuColElement: {
    prototype: HTMLWuColElement;
    new (): HTMLWuColElement;
  };
  interface HTMLElementTagNameMap {
    "wu-col": HTMLWuColElement;
  }
  interface ElementTagNameMap {
    "wu-col": HTMLWuColElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-col": JSXElements.WuColAttributes;
    }
  }
  namespace JSXElements {
    export interface WuColAttributes extends HTMLAttributes {
      basis?: string;
    }
  }
}


import {
  WuRow as WuRow
} from './components/wu-grid/wu-row/wu-row';

declare global {
  interface HTMLWuRowElement extends WuRow, HTMLStencilElement {
  }
  var HTMLWuRowElement: {
    prototype: HTMLWuRowElement;
    new (): HTMLWuRowElement;
  };
  interface HTMLElementTagNameMap {
    "wu-row": HTMLWuRowElement;
  }
  interface ElementTagNameMap {
    "wu-row": HTMLWuRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-row": JSXElements.WuRowAttributes;
    }
  }
  namespace JSXElements {
    export interface WuRowAttributes extends HTMLAttributes {
      maxCols?: number;
    }
  }
}


import {
  WuImg as WuImg
} from './components/wu-img/wu-img';

declare global {
  interface HTMLWuImgElement extends WuImg, HTMLStencilElement {
  }
  var HTMLWuImgElement: {
    prototype: HTMLWuImgElement;
    new (): HTMLWuImgElement;
  };
  interface HTMLElementTagNameMap {
    "wu-img": HTMLWuImgElement;
  }
  interface ElementTagNameMap {
    "wu-img": HTMLWuImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-img": JSXElements.WuImgAttributes;
    }
  }
  namespace JSXElements {
    export interface WuImgAttributes extends HTMLAttributes {
      alt?: string;
      src?: string;
      thumb?: string;
    }
  }
}


import {
  WuBurger as WuBurger
} from './components/wu-menu/wu-burger/wu-burger';

declare global {
  interface HTMLWuBurgerElement extends WuBurger, HTMLStencilElement {
  }
  var HTMLWuBurgerElement: {
    prototype: HTMLWuBurgerElement;
    new (): HTMLWuBurgerElement;
  };
  interface HTMLElementTagNameMap {
    "wu-burger": HTMLWuBurgerElement;
  }
  interface ElementTagNameMap {
    "wu-burger": HTMLWuBurgerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-burger": JSXElements.WuBurgerAttributes;
    }
  }
  namespace JSXElements {
    export interface WuBurgerAttributes extends HTMLAttributes {
      
    }
  }
}


import {
  WuSpinner as WuSpinner
} from './components/wu-spinner/wu-spinner';

declare global {
  interface HTMLWuSpinnerElement extends WuSpinner, HTMLStencilElement {
  }
  var HTMLWuSpinnerElement: {
    prototype: HTMLWuSpinnerElement;
    new (): HTMLWuSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    "wu-spinner": HTMLWuSpinnerElement;
  }
  interface ElementTagNameMap {
    "wu-spinner": HTMLWuSpinnerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      "wu-spinner": JSXElements.WuSpinnerAttributes;
    }
  }
  namespace JSXElements {
    export interface WuSpinnerAttributes extends HTMLAttributes {
      color?: string;
      type?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }
