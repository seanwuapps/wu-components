/**
* This is an autogenerated file created by the Stencil compiler.
* It contains typing information for all components that exist in this project.
*/
/* tslint:disable */

import '@stencil/core';




export namespace Components {

  interface CodeBlock {
    'code': string;
    'language': string;
  }
  interface CodeBlockAttributes extends StencilHTMLAttributes {
    'code'?: string;
    'language'?: string;
  }

  interface WuAccordionHeader {}
  interface WuAccordionHeaderAttributes extends StencilHTMLAttributes {}

  interface WuAccordion {}
  interface WuAccordionAttributes extends StencilHTMLAttributes {}

  interface WuBurger {
    'animation': string;
    'target': string;
    'theme': string;
  }
  interface WuBurgerAttributes extends StencilHTMLAttributes {
    'animation'?: string;
    'target'?: string;
    'theme'?: string;
  }

  interface WuButton {
    'disabled': boolean;
    'href': string;
    'theme': string;
    'type': 'submit' | 'reset' | 'button';
  }
  interface WuButtonAttributes extends StencilHTMLAttributes {
    'disabled'?: boolean;
    'href'?: string;
    'theme'?: string;
    'type'?: 'submit' | 'reset' | 'button';
  }

  interface WuCard {
    'alt': string;
    'cardTitle': string;
    'hover': boolean;
    'src': string;
    'thumb': string;
  }
  interface WuCardAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'cardTitle'?: string;
    'hover'?: boolean;
    'src'?: string;
    'thumb'?: string;
  }

  interface WuDivider {}
  interface WuDividerAttributes extends StencilHTMLAttributes {}

  interface WuCol {
    'basis': string;
    'portion': string;
  }
  interface WuColAttributes extends StencilHTMLAttributes {
    'basis'?: string;
    'portion'?: string;
  }

  interface WuContainer {}
  interface WuContainerAttributes extends StencilHTMLAttributes {}

  interface WuRow {
    'autoMobile': boolean;
    'gap': string;
  }
  interface WuRowAttributes extends StencilHTMLAttributes {
    'autoMobile'?: boolean;
    'gap'?: string;
  }

  interface WuHeader {
    'fixed': boolean;
    'theme': string;
  }
  interface WuHeaderAttributes extends StencilHTMLAttributes {
    'fixed'?: boolean;
    'theme'?: string;
  }

  interface WuImg {
    'alt': string;
    'positionX': string;
    'positionY': string;
    'shape': string;
    'src': string;
    'thumb': string;
  }
  interface WuImgAttributes extends StencilHTMLAttributes {
    'alt'?: string;
    'positionX'?: string;
    'positionY'?: string;
    'shape'?: string;
    'src'?: string;
    'thumb'?: string;
  }

  interface WuDrawerMenu {
    'autoClose': boolean;
    'closeMenu': (trigger?: HTMLElement) => void;
    'openMenu': (trigger: HTMLElement) => void;
    'position': 'left' | 'right';
    'theme': string;
  }
  interface WuDrawerMenuAttributes extends StencilHTMLAttributes {
    'autoClose'?: boolean;
    'position'?: 'left' | 'right';
    'theme'?: string;
  }

  interface WuMenuHeader {
    'img': string;
    'imgHref': string;
    'imgShape': 'circle' | 'square';
    'theme': string;
  }
  interface WuMenuHeaderAttributes extends StencilHTMLAttributes {
    'img'?: string;
    'imgHref'?: string;
    'imgShape'?: 'circle' | 'square';
    'theme'?: string;
  }

  interface WuMenuItem {
    'theme': string;
  }
  interface WuMenuItemAttributes extends StencilHTMLAttributes {
    'theme'?: string;
  }

  interface WuPage {
    'reflectFixedHeader': boolean;
  }
  interface WuPageAttributes extends StencilHTMLAttributes {
    'reflectFixedHeader'?: boolean;
  }

  interface WuRating {
    'getVal': () => number;
    'icon': any;
    'iconOutline': any;
    'max': number;
    'reset': () => void;
    'setVal': (val: any) => number;
    'value': number;
  }
  interface WuRatingAttributes extends StencilHTMLAttributes {
    'icon'?: any;
    'iconOutline'?: any;
    'max'?: number;
    'onChange'?: (event: CustomEvent) => void;
    'value'?: number;
  }

  interface WuShadow {
    'depth': number;
    'type': string;
  }
  interface WuShadowAttributes extends StencilHTMLAttributes {
    'depth'?: number;
    'type'?: string;
  }

  interface WuSpinner {
    'color': string;
    'type': string;
  }
  interface WuSpinnerAttributes extends StencilHTMLAttributes {
    'color'?: string;
    'type'?: string;
  }

  interface WuTinderCard {
    'leftBtnText': string;
    'rightBtnText': string;
    'src': string;
    'threshold': number;
    'thumb': string;
  }
  interface WuTinderCardAttributes extends StencilHTMLAttributes {
    'leftBtnText'?: string;
    'onSwipe'?: (event: CustomEvent) => void;
    'rightBtnText'?: string;
    'src'?: string;
    'threshold'?: number;
    'thumb'?: string;
  }
}

declare global {
  interface StencilElementInterfaces {
    'CodeBlock': Components.CodeBlock;
    'WuAccordionHeader': Components.WuAccordionHeader;
    'WuAccordion': Components.WuAccordion;
    'WuBurger': Components.WuBurger;
    'WuButton': Components.WuButton;
    'WuCard': Components.WuCard;
    'WuDivider': Components.WuDivider;
    'WuCol': Components.WuCol;
    'WuContainer': Components.WuContainer;
    'WuRow': Components.WuRow;
    'WuHeader': Components.WuHeader;
    'WuImg': Components.WuImg;
    'WuDrawerMenu': Components.WuDrawerMenu;
    'WuMenuHeader': Components.WuMenuHeader;
    'WuMenuItem': Components.WuMenuItem;
    'WuPage': Components.WuPage;
    'WuRating': Components.WuRating;
    'WuShadow': Components.WuShadow;
    'WuSpinner': Components.WuSpinner;
    'WuTinderCard': Components.WuTinderCard;
  }

  interface StencilIntrinsicElements {
    'code-block': Components.CodeBlockAttributes;
    'wu-accordion-header': Components.WuAccordionHeaderAttributes;
    'wu-accordion': Components.WuAccordionAttributes;
    'wu-burger': Components.WuBurgerAttributes;
    'wu-button': Components.WuButtonAttributes;
    'wu-card': Components.WuCardAttributes;
    'wu-divider': Components.WuDividerAttributes;
    'wu-col': Components.WuColAttributes;
    'wu-container': Components.WuContainerAttributes;
    'wu-row': Components.WuRowAttributes;
    'wu-header': Components.WuHeaderAttributes;
    'wu-img': Components.WuImgAttributes;
    'wu-drawer-menu': Components.WuDrawerMenuAttributes;
    'wu-menu-header': Components.WuMenuHeaderAttributes;
    'wu-menu-item': Components.WuMenuItemAttributes;
    'wu-page': Components.WuPageAttributes;
    'wu-rating': Components.WuRatingAttributes;
    'wu-shadow': Components.WuShadowAttributes;
    'wu-spinner': Components.WuSpinnerAttributes;
    'wu-tinder-card': Components.WuTinderCardAttributes;
  }


  interface HTMLCodeBlockElement extends Components.CodeBlock, HTMLStencilElement {}
  var HTMLCodeBlockElement: {
    prototype: HTMLCodeBlockElement;
    new (): HTMLCodeBlockElement;
  };

  interface HTMLWuAccordionHeaderElement extends Components.WuAccordionHeader, HTMLStencilElement {}
  var HTMLWuAccordionHeaderElement: {
    prototype: HTMLWuAccordionHeaderElement;
    new (): HTMLWuAccordionHeaderElement;
  };

  interface HTMLWuAccordionElement extends Components.WuAccordion, HTMLStencilElement {}
  var HTMLWuAccordionElement: {
    prototype: HTMLWuAccordionElement;
    new (): HTMLWuAccordionElement;
  };

  interface HTMLWuBurgerElement extends Components.WuBurger, HTMLStencilElement {}
  var HTMLWuBurgerElement: {
    prototype: HTMLWuBurgerElement;
    new (): HTMLWuBurgerElement;
  };

  interface HTMLWuButtonElement extends Components.WuButton, HTMLStencilElement {}
  var HTMLWuButtonElement: {
    prototype: HTMLWuButtonElement;
    new (): HTMLWuButtonElement;
  };

  interface HTMLWuCardElement extends Components.WuCard, HTMLStencilElement {}
  var HTMLWuCardElement: {
    prototype: HTMLWuCardElement;
    new (): HTMLWuCardElement;
  };

  interface HTMLWuDividerElement extends Components.WuDivider, HTMLStencilElement {}
  var HTMLWuDividerElement: {
    prototype: HTMLWuDividerElement;
    new (): HTMLWuDividerElement;
  };

  interface HTMLWuColElement extends Components.WuCol, HTMLStencilElement {}
  var HTMLWuColElement: {
    prototype: HTMLWuColElement;
    new (): HTMLWuColElement;
  };

  interface HTMLWuContainerElement extends Components.WuContainer, HTMLStencilElement {}
  var HTMLWuContainerElement: {
    prototype: HTMLWuContainerElement;
    new (): HTMLWuContainerElement;
  };

  interface HTMLWuRowElement extends Components.WuRow, HTMLStencilElement {}
  var HTMLWuRowElement: {
    prototype: HTMLWuRowElement;
    new (): HTMLWuRowElement;
  };

  interface HTMLWuHeaderElement extends Components.WuHeader, HTMLStencilElement {}
  var HTMLWuHeaderElement: {
    prototype: HTMLWuHeaderElement;
    new (): HTMLWuHeaderElement;
  };

  interface HTMLWuImgElement extends Components.WuImg, HTMLStencilElement {}
  var HTMLWuImgElement: {
    prototype: HTMLWuImgElement;
    new (): HTMLWuImgElement;
  };

  interface HTMLWuDrawerMenuElement extends Components.WuDrawerMenu, HTMLStencilElement {}
  var HTMLWuDrawerMenuElement: {
    prototype: HTMLWuDrawerMenuElement;
    new (): HTMLWuDrawerMenuElement;
  };

  interface HTMLWuMenuHeaderElement extends Components.WuMenuHeader, HTMLStencilElement {}
  var HTMLWuMenuHeaderElement: {
    prototype: HTMLWuMenuHeaderElement;
    new (): HTMLWuMenuHeaderElement;
  };

  interface HTMLWuMenuItemElement extends Components.WuMenuItem, HTMLStencilElement {}
  var HTMLWuMenuItemElement: {
    prototype: HTMLWuMenuItemElement;
    new (): HTMLWuMenuItemElement;
  };

  interface HTMLWuPageElement extends Components.WuPage, HTMLStencilElement {}
  var HTMLWuPageElement: {
    prototype: HTMLWuPageElement;
    new (): HTMLWuPageElement;
  };

  interface HTMLWuRatingElement extends Components.WuRating, HTMLStencilElement {}
  var HTMLWuRatingElement: {
    prototype: HTMLWuRatingElement;
    new (): HTMLWuRatingElement;
  };

  interface HTMLWuShadowElement extends Components.WuShadow, HTMLStencilElement {}
  var HTMLWuShadowElement: {
    prototype: HTMLWuShadowElement;
    new (): HTMLWuShadowElement;
  };

  interface HTMLWuSpinnerElement extends Components.WuSpinner, HTMLStencilElement {}
  var HTMLWuSpinnerElement: {
    prototype: HTMLWuSpinnerElement;
    new (): HTMLWuSpinnerElement;
  };

  interface HTMLWuTinderCardElement extends Components.WuTinderCard, HTMLStencilElement {}
  var HTMLWuTinderCardElement: {
    prototype: HTMLWuTinderCardElement;
    new (): HTMLWuTinderCardElement;
  };

  interface HTMLElementTagNameMap {
    'code-block': HTMLCodeBlockElement
    'wu-accordion-header': HTMLWuAccordionHeaderElement
    'wu-accordion': HTMLWuAccordionElement
    'wu-burger': HTMLWuBurgerElement
    'wu-button': HTMLWuButtonElement
    'wu-card': HTMLWuCardElement
    'wu-divider': HTMLWuDividerElement
    'wu-col': HTMLWuColElement
    'wu-container': HTMLWuContainerElement
    'wu-row': HTMLWuRowElement
    'wu-header': HTMLWuHeaderElement
    'wu-img': HTMLWuImgElement
    'wu-drawer-menu': HTMLWuDrawerMenuElement
    'wu-menu-header': HTMLWuMenuHeaderElement
    'wu-menu-item': HTMLWuMenuItemElement
    'wu-page': HTMLWuPageElement
    'wu-rating': HTMLWuRatingElement
    'wu-shadow': HTMLWuShadowElement
    'wu-spinner': HTMLWuSpinnerElement
    'wu-tinder-card': HTMLWuTinderCardElement
  }

  interface ElementTagNameMap {
    'code-block': HTMLCodeBlockElement;
    'wu-accordion-header': HTMLWuAccordionHeaderElement;
    'wu-accordion': HTMLWuAccordionElement;
    'wu-burger': HTMLWuBurgerElement;
    'wu-button': HTMLWuButtonElement;
    'wu-card': HTMLWuCardElement;
    'wu-divider': HTMLWuDividerElement;
    'wu-col': HTMLWuColElement;
    'wu-container': HTMLWuContainerElement;
    'wu-row': HTMLWuRowElement;
    'wu-header': HTMLWuHeaderElement;
    'wu-img': HTMLWuImgElement;
    'wu-drawer-menu': HTMLWuDrawerMenuElement;
    'wu-menu-header': HTMLWuMenuHeaderElement;
    'wu-menu-item': HTMLWuMenuItemElement;
    'wu-page': HTMLWuPageElement;
    'wu-rating': HTMLWuRatingElement;
    'wu-shadow': HTMLWuShadowElement;
    'wu-spinner': HTMLWuSpinnerElement;
    'wu-tinder-card': HTMLWuTinderCardElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
