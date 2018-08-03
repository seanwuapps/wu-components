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


declare global {

  namespace StencilComponents {
    interface CodeBlock {
      'code': string;
      'language': string;
    }
  }

  interface HTMLCodeBlockElement extends StencilComponents.CodeBlock, HTMLStencilElement {}

  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };
  interface HTMLElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  interface ElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'code-block': JSXElements.CodeBlockAttributes;
    }
  }
  namespace JSXElements {
    export interface CodeBlockAttributes extends HTMLAttributes {
      'code'?: string;
      'language'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuAccordionHeader {

    }
  }

  interface HTMLWuAccordionHeaderElement extends StencilComponents.WuAccordionHeader, HTMLStencilElement {}

  var HTMLWuAccordionHeaderElement: {
    prototype: HTMLWuAccordionHeaderElement;
    new (): HTMLWuAccordionHeaderElement;
  };
  interface HTMLElementTagNameMap {
    'wu-accordion-header': HTMLWuAccordionHeaderElement;
  }
  interface ElementTagNameMap {
    'wu-accordion-header': HTMLWuAccordionHeaderElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-accordion-header': JSXElements.WuAccordionHeaderAttributes;
    }
  }
  namespace JSXElements {
    export interface WuAccordionHeaderAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuAccordion {

    }
  }

  interface HTMLWuAccordionElement extends StencilComponents.WuAccordion, HTMLStencilElement {}

  var HTMLWuAccordionElement: {
    prototype: HTMLWuAccordionElement;
    new (): HTMLWuAccordionElement;
  };
  interface HTMLElementTagNameMap {
    'wu-accordion': HTMLWuAccordionElement;
  }
  interface ElementTagNameMap {
    'wu-accordion': HTMLWuAccordionElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-accordion': JSXElements.WuAccordionAttributes;
    }
  }
  namespace JSXElements {
    export interface WuAccordionAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuButton {

    }
  }

  interface HTMLWuButtonElement extends StencilComponents.WuButton, HTMLStencilElement {}

  var HTMLWuButtonElement: {
    prototype: HTMLWuButtonElement;
    new (): HTMLWuButtonElement;
  };
  interface HTMLElementTagNameMap {
    'wu-button': HTMLWuButtonElement;
  }
  interface ElementTagNameMap {
    'wu-button': HTMLWuButtonElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-button': JSXElements.WuButtonAttributes;
    }
  }
  namespace JSXElements {
    export interface WuButtonAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuCard {
      'title': string;
    }
  }

  interface HTMLWuCardElement extends StencilComponents.WuCard, HTMLStencilElement {}

  var HTMLWuCardElement: {
    prototype: HTMLWuCardElement;
    new (): HTMLWuCardElement;
  };
  interface HTMLElementTagNameMap {
    'wu-card': HTMLWuCardElement;
  }
  interface ElementTagNameMap {
    'wu-card': HTMLWuCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-card': JSXElements.WuCardAttributes;
    }
  }
  namespace JSXElements {
    export interface WuCardAttributes extends HTMLAttributes {
      'title'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuCol {
      'basis': string;
    }
  }

  interface HTMLWuColElement extends StencilComponents.WuCol, HTMLStencilElement {}

  var HTMLWuColElement: {
    prototype: HTMLWuColElement;
    new (): HTMLWuColElement;
  };
  interface HTMLElementTagNameMap {
    'wu-col': HTMLWuColElement;
  }
  interface ElementTagNameMap {
    'wu-col': HTMLWuColElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-col': JSXElements.WuColAttributes;
    }
  }
  namespace JSXElements {
    export interface WuColAttributes extends HTMLAttributes {
      'basis'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuRow {
      'maxCols': number;
    }
  }

  interface HTMLWuRowElement extends StencilComponents.WuRow, HTMLStencilElement {}

  var HTMLWuRowElement: {
    prototype: HTMLWuRowElement;
    new (): HTMLWuRowElement;
  };
  interface HTMLElementTagNameMap {
    'wu-row': HTMLWuRowElement;
  }
  interface ElementTagNameMap {
    'wu-row': HTMLWuRowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-row': JSXElements.WuRowAttributes;
    }
  }
  namespace JSXElements {
    export interface WuRowAttributes extends HTMLAttributes {
      'maxCols'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuImg {
      'alt': string;
      'src': string;
      'thumb': string;
    }
  }

  interface HTMLWuImgElement extends StencilComponents.WuImg, HTMLStencilElement {}

  var HTMLWuImgElement: {
    prototype: HTMLWuImgElement;
    new (): HTMLWuImgElement;
  };
  interface HTMLElementTagNameMap {
    'wu-img': HTMLWuImgElement;
  }
  interface ElementTagNameMap {
    'wu-img': HTMLWuImgElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-img': JSXElements.WuImgAttributes;
    }
  }
  namespace JSXElements {
    export interface WuImgAttributes extends HTMLAttributes {
      'alt'?: string;
      'src'?: string;
      'thumb'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuBurger {

    }
  }

  interface HTMLWuBurgerElement extends StencilComponents.WuBurger, HTMLStencilElement {}

  var HTMLWuBurgerElement: {
    prototype: HTMLWuBurgerElement;
    new (): HTMLWuBurgerElement;
  };
  interface HTMLElementTagNameMap {
    'wu-burger': HTMLWuBurgerElement;
  }
  interface ElementTagNameMap {
    'wu-burger': HTMLWuBurgerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-burger': JSXElements.WuBurgerAttributes;
    }
  }
  namespace JSXElements {
    export interface WuBurgerAttributes extends HTMLAttributes {

    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuMenu {
      'menuItems': Object;
    }
  }

  interface HTMLWuMenuElement extends StencilComponents.WuMenu, HTMLStencilElement {}

  var HTMLWuMenuElement: {
    prototype: HTMLWuMenuElement;
    new (): HTMLWuMenuElement;
  };
  interface HTMLElementTagNameMap {
    'wu-menu': HTMLWuMenuElement;
  }
  interface ElementTagNameMap {
    'wu-menu': HTMLWuMenuElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-menu': JSXElements.WuMenuAttributes;
    }
  }
  namespace JSXElements {
    export interface WuMenuAttributes extends HTMLAttributes {
      'menuItems'?: Object;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuRating {
      'getVal': () => number;
      'icon': any;
      'iconOutline': any;
      'max': number;
      'setVal': (val: any) => number;
      'value': number;
    }
  }

  interface HTMLWuRatingElement extends StencilComponents.WuRating, HTMLStencilElement {}

  var HTMLWuRatingElement: {
    prototype: HTMLWuRatingElement;
    new (): HTMLWuRatingElement;
  };
  interface HTMLElementTagNameMap {
    'wu-rating': HTMLWuRatingElement;
  }
  interface ElementTagNameMap {
    'wu-rating': HTMLWuRatingElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-rating': JSXElements.WuRatingAttributes;
    }
  }
  namespace JSXElements {
    export interface WuRatingAttributes extends HTMLAttributes {
      'icon'?: any;
      'iconOutline'?: any;
      'max'?: number;
      'onChange'?: (event: CustomEvent) => void;
      'value'?: number;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuShadow {
      'depth': number;
      'type': string;
    }
  }

  interface HTMLWuShadowElement extends StencilComponents.WuShadow, HTMLStencilElement {}

  var HTMLWuShadowElement: {
    prototype: HTMLWuShadowElement;
    new (): HTMLWuShadowElement;
  };
  interface HTMLElementTagNameMap {
    'wu-shadow': HTMLWuShadowElement;
  }
  interface ElementTagNameMap {
    'wu-shadow': HTMLWuShadowElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-shadow': JSXElements.WuShadowAttributes;
    }
  }
  namespace JSXElements {
    export interface WuShadowAttributes extends HTMLAttributes {
      'depth'?: number;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuSpinner {
      'color': string;
      'type': string;
    }
  }

  interface HTMLWuSpinnerElement extends StencilComponents.WuSpinner, HTMLStencilElement {}

  var HTMLWuSpinnerElement: {
    prototype: HTMLWuSpinnerElement;
    new (): HTMLWuSpinnerElement;
  };
  interface HTMLElementTagNameMap {
    'wu-spinner': HTMLWuSpinnerElement;
  }
  interface ElementTagNameMap {
    'wu-spinner': HTMLWuSpinnerElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-spinner': JSXElements.WuSpinnerAttributes;
    }
  }
  namespace JSXElements {
    export interface WuSpinnerAttributes extends HTMLAttributes {
      'color'?: string;
      'type'?: string;
    }
  }
}


declare global {

  namespace StencilComponents {
    interface WuTinderCard {
      'leftBtnText': string;
      'rightBtnText': string;
      'src': string;
      'threshold': number;
      'thumb': string;
    }
  }

  interface HTMLWuTinderCardElement extends StencilComponents.WuTinderCard, HTMLStencilElement {}

  var HTMLWuTinderCardElement: {
    prototype: HTMLWuTinderCardElement;
    new (): HTMLWuTinderCardElement;
  };
  interface HTMLElementTagNameMap {
    'wu-tinder-card': HTMLWuTinderCardElement;
  }
  interface ElementTagNameMap {
    'wu-tinder-card': HTMLWuTinderCardElement;
  }
  namespace JSX {
    interface IntrinsicElements {
      'wu-tinder-card': JSXElements.WuTinderCardAttributes;
    }
  }
  namespace JSXElements {
    export interface WuTinderCardAttributes extends HTMLAttributes {
      'leftBtnText'?: string;
      'onSwipe'?: (event: CustomEvent) => void;
      'rightBtnText'?: string;
      'src'?: string;
      'threshold'?: number;
      'thumb'?: string;
    }
  }
}

declare global { namespace JSX { interface StencilJSX {} } }

export declare function defineCustomElements(window: any): void;