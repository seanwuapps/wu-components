/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';




export namespace Components {

  interface WuAccordionHeader {}
  interface WuAccordionHeaderAttributes extends StencilHTMLAttributes {}

  interface WuAccordion {}
  interface WuAccordionAttributes extends StencilHTMLAttributes {}

  interface WuBurger {
    /**
    * animation used to transition from burger icon to close icon
    */
    'animation': 'middle-out' | 'spin-out' | 'rotate';
    /**
    * if specified, burger icon will disappear at the screen size to accomodate "panel layout"
    */
    'panel'?: 'xs' | 'sm' | 'md' | 'lg';
    /**
    * id of the target wu-drawer-menu element
    */
    'target': string;
    /**
    * Change the color of the burger using a theme
    */
    'theme'?: string;
  }
  interface WuBurgerAttributes extends StencilHTMLAttributes {
    /**
    * animation used to transition from burger icon to close icon
    */
    'animation'?: 'middle-out' | 'spin-out' | 'rotate';
    /**
    * if specified, burger icon will disappear at the screen size to accomodate "panel layout"
    */
    'panel'?: 'xs' | 'sm' | 'md' | 'lg';
    /**
    * id of the target wu-drawer-menu element
    */
    'target'?: string;
    /**
    * Change the color of the burger using a theme
    */
    'theme'?: string;
  }

  interface WuButton {
    /**
    * If button will extend to full width
    */
    'block'?: boolean;
    /**
    * If this button is disabled
    */
    'disabled': boolean;
    /**
    * If the button will use flat style
    */
    'flat'?: boolean;
    /**
    * If `href` attribute is specified, the button will be output as an `a` tag
    */
    'href'?: string;
    /**
    * If use outline styles
    */
    'outline'?: boolean;
    /**
    * Shape of the button
    */
    'shape'?: 'circle' | 'round';
    'target'?: string;
    /**
    * Button theme
    */
    'theme'?: string;
    /**
    * Html type of the button
    */
    'type': 'submit' | 'reset' | 'button';
  }
  interface WuButtonAttributes extends StencilHTMLAttributes {
    /**
    * If button will extend to full width
    */
    'block'?: boolean;
    /**
    * If this button is disabled
    */
    'disabled'?: boolean;
    /**
    * If the button will use flat style
    */
    'flat'?: boolean;
    /**
    * If `href` attribute is specified, the button will be output as an `a` tag
    */
    'href'?: string;
    /**
    * If use outline styles
    */
    'outline'?: boolean;
    /**
    * Shape of the button
    */
    'shape'?: 'circle' | 'round';
    'target'?: string;
    /**
    * Button theme
    */
    'theme'?: string;
    /**
    * Html type of the button
    */
    'type'?: 'submit' | 'reset' | 'button';
  }

  interface WuCard {
    /**
    * Subtitle of the card
    */
    'cardSubtitle'?: string;
    /**
    * Title of the card
    */
    'cardTitle'?: string;
    /**
    * If this card has flat (border) style
    */
    'flat'?: boolean;
    /**
    * If this card is hoverable
    */
    'hover'?: boolean;
    /**
    * Position of media in the card
    */
    'mediaAbove': boolean;
    /**
    * Card image alt text
    */
    'mediaAlt'?: string;
    /**
    * Card image source url, if specified, image will display on top of the card.
    */
    'mediaSrc'?: string;
    /**
    * Thumbnail version of the card image, image will be loaded progressively if `media-thumb` is specified
    */
    'mediaThumb'?: string;
    /**
    * Make card themable
    */
    'theme'?: string;
    'thumbnailSrc'?: string;
  }
  interface WuCardAttributes extends StencilHTMLAttributes {
    /**
    * Subtitle of the card
    */
    'cardSubtitle'?: string;
    /**
    * Title of the card
    */
    'cardTitle'?: string;
    /**
    * If this card has flat (border) style
    */
    'flat'?: boolean;
    /**
    * If this card is hoverable
    */
    'hover'?: boolean;
    /**
    * Position of media in the card
    */
    'mediaAbove'?: boolean;
    /**
    * Card image alt text
    */
    'mediaAlt'?: string;
    /**
    * Card image source url, if specified, image will display on top of the card.
    */
    'mediaSrc'?: string;
    /**
    * Thumbnail version of the card image, image will be loaded progressively if `media-thumb` is specified
    */
    'mediaThumb'?: string;
    /**
    * Make card themable
    */
    'theme'?: string;
    'thumbnailSrc'?: string;
  }

  interface WuDivider {}
  interface WuDividerAttributes extends StencilHTMLAttributes {}

  interface WuDropMenu {}
  interface WuDropMenuAttributes extends StencilHTMLAttributes {}

  interface WuFieldHelper {}
  interface WuFieldHelperAttributes extends StencilHTMLAttributes {}

  interface WuFieldStacked {}
  interface WuFieldStackedAttributes extends StencilHTMLAttributes {}

  interface WuForm {}
  interface WuFormAttributes extends StencilHTMLAttributes {}

  interface WuToggle {
    'checked'?: boolean;
    'label': string;
    'name'?: string;
    'required'?: boolean;
    'theme'?: string;
    'value'?: any;
  }
  interface WuToggleAttributes extends StencilHTMLAttributes {
    'checked'?: boolean;
    'label'?: string;
    'name'?: string;
    'onChange'?: (event: CustomEvent) => void;
    'required'?: boolean;
    'theme'?: string;
    'value'?: any;
  }

  interface WuCol {
    'basis': string;
    'portion': string;
  }
  interface WuColAttributes extends StencilHTMLAttributes {
    'basis'?: string;
    'portion'?: string;
  }

  interface WuContainer {
    'fillHeight': boolean;
    'fluid': boolean;
  }
  interface WuContainerAttributes extends StencilHTMLAttributes {
    'fillHeight'?: boolean;
    'fluid'?: boolean;
  }

  interface WuRow {
    'equalHeight': string;
    'gap': string;
  }
  interface WuRowAttributes extends StencilHTMLAttributes {
    'equalHeight'?: string;
    'gap'?: string;
  }

  interface WuHeader {
    'fixed'?: boolean;
    'theme'?: string;
  }
  interface WuHeaderAttributes extends StencilHTMLAttributes {
    'fixed'?: boolean;
    'theme'?: string;
  }

  interface WuImg {
    'alt': string;
    'positionX'?: string;
    'positionY'?: string;
    'shape'?: string;
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
    'autoClose'?: boolean;
    'closeMenu': (trigger?: HTMLElement) => void;
    'openMenu': (trigger: HTMLElement) => void;
    'panel'?: 'xs' | 'sm' | 'md' | 'lg';
    'position'?: 'left' | 'right';
    'theme'?: string;
  }
  interface WuDrawerMenuAttributes extends StencilHTMLAttributes {
    'autoClose'?: boolean;
    'panel'?: 'xs' | 'sm' | 'md' | 'lg';
    'position'?: 'left' | 'right';
    'theme'?: string;
  }

  interface WuMenuHeader {
    'img'?: string;
    'imgHref'?: string;
    'imgShape'?: 'circle' | 'square';
    'theme'?: string;
  }
  interface WuMenuHeaderAttributes extends StencilHTMLAttributes {
    'img'?: string;
    'imgHref'?: string;
    'imgShape'?: 'circle' | 'square';
    'theme'?: string;
  }

  interface WuMenuItem {
    'theme'?: string;
  }
  interface WuMenuItemAttributes extends StencilHTMLAttributes {
    'theme'?: string;
  }

  interface WuPage {
    'reflectFixedHeader'?: boolean;
  }
  interface WuPageAttributes extends StencilHTMLAttributes {
    'reflectFixedHeader'?: boolean;
  }

  interface WuParallax {
    'center': boolean;
    'imgSrc': string;
    'imgThumb': string;
    'speed': number;
  }
  interface WuParallaxAttributes extends StencilHTMLAttributes {
    'center'?: boolean;
    'imgSrc'?: string;
    'imgThumb'?: string;
    'speed'?: number;
  }

  interface WuRating {
    'getVal': () => Promise<number>;
    'icon': any;
    'iconOutline': any;
    'max': number;
    'reset': () => Promise<void>;
    'setVal': (val: any) => Promise<number>;
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
    'WuAccordionHeader': Components.WuAccordionHeader;
    'WuAccordion': Components.WuAccordion;
    'WuBurger': Components.WuBurger;
    'WuButton': Components.WuButton;
    'WuCard': Components.WuCard;
    'WuDivider': Components.WuDivider;
    'WuDropMenu': Components.WuDropMenu;
    'WuFieldHelper': Components.WuFieldHelper;
    'WuFieldStacked': Components.WuFieldStacked;
    'WuForm': Components.WuForm;
    'WuToggle': Components.WuToggle;
    'WuCol': Components.WuCol;
    'WuContainer': Components.WuContainer;
    'WuRow': Components.WuRow;
    'WuHeader': Components.WuHeader;
    'WuImg': Components.WuImg;
    'WuDrawerMenu': Components.WuDrawerMenu;
    'WuMenuHeader': Components.WuMenuHeader;
    'WuMenuItem': Components.WuMenuItem;
    'WuPage': Components.WuPage;
    'WuParallax': Components.WuParallax;
    'WuRating': Components.WuRating;
    'WuShadow': Components.WuShadow;
    'WuSpinner': Components.WuSpinner;
    'WuTinderCard': Components.WuTinderCard;
  }

  interface StencilIntrinsicElements {
    'wu-accordion-header': Components.WuAccordionHeaderAttributes;
    'wu-accordion': Components.WuAccordionAttributes;
    'wu-burger': Components.WuBurgerAttributes;
    'wu-button': Components.WuButtonAttributes;
    'wu-card': Components.WuCardAttributes;
    'wu-divider': Components.WuDividerAttributes;
    'wu-drop-menu': Components.WuDropMenuAttributes;
    'wu-field-helper': Components.WuFieldHelperAttributes;
    'wu-field-stacked': Components.WuFieldStackedAttributes;
    'wu-form': Components.WuFormAttributes;
    'wu-toggle': Components.WuToggleAttributes;
    'wu-col': Components.WuColAttributes;
    'wu-container': Components.WuContainerAttributes;
    'wu-row': Components.WuRowAttributes;
    'wu-header': Components.WuHeaderAttributes;
    'wu-img': Components.WuImgAttributes;
    'wu-drawer-menu': Components.WuDrawerMenuAttributes;
    'wu-menu-header': Components.WuMenuHeaderAttributes;
    'wu-menu-item': Components.WuMenuItemAttributes;
    'wu-page': Components.WuPageAttributes;
    'wu-parallax': Components.WuParallaxAttributes;
    'wu-rating': Components.WuRatingAttributes;
    'wu-shadow': Components.WuShadowAttributes;
    'wu-spinner': Components.WuSpinnerAttributes;
    'wu-tinder-card': Components.WuTinderCardAttributes;
  }


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

  interface HTMLWuDropMenuElement extends Components.WuDropMenu, HTMLStencilElement {}
  var HTMLWuDropMenuElement: {
    prototype: HTMLWuDropMenuElement;
    new (): HTMLWuDropMenuElement;
  };

  interface HTMLWuFieldHelperElement extends Components.WuFieldHelper, HTMLStencilElement {}
  var HTMLWuFieldHelperElement: {
    prototype: HTMLWuFieldHelperElement;
    new (): HTMLWuFieldHelperElement;
  };

  interface HTMLWuFieldStackedElement extends Components.WuFieldStacked, HTMLStencilElement {}
  var HTMLWuFieldStackedElement: {
    prototype: HTMLWuFieldStackedElement;
    new (): HTMLWuFieldStackedElement;
  };

  interface HTMLWuFormElement extends Components.WuForm, HTMLStencilElement {}
  var HTMLWuFormElement: {
    prototype: HTMLWuFormElement;
    new (): HTMLWuFormElement;
  };

  interface HTMLWuToggleElement extends Components.WuToggle, HTMLStencilElement {}
  var HTMLWuToggleElement: {
    prototype: HTMLWuToggleElement;
    new (): HTMLWuToggleElement;
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

  interface HTMLWuParallaxElement extends Components.WuParallax, HTMLStencilElement {}
  var HTMLWuParallaxElement: {
    prototype: HTMLWuParallaxElement;
    new (): HTMLWuParallaxElement;
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
    'wu-accordion-header': HTMLWuAccordionHeaderElement
    'wu-accordion': HTMLWuAccordionElement
    'wu-burger': HTMLWuBurgerElement
    'wu-button': HTMLWuButtonElement
    'wu-card': HTMLWuCardElement
    'wu-divider': HTMLWuDividerElement
    'wu-drop-menu': HTMLWuDropMenuElement
    'wu-field-helper': HTMLWuFieldHelperElement
    'wu-field-stacked': HTMLWuFieldStackedElement
    'wu-form': HTMLWuFormElement
    'wu-toggle': HTMLWuToggleElement
    'wu-col': HTMLWuColElement
    'wu-container': HTMLWuContainerElement
    'wu-row': HTMLWuRowElement
    'wu-header': HTMLWuHeaderElement
    'wu-img': HTMLWuImgElement
    'wu-drawer-menu': HTMLWuDrawerMenuElement
    'wu-menu-header': HTMLWuMenuHeaderElement
    'wu-menu-item': HTMLWuMenuItemElement
    'wu-page': HTMLWuPageElement
    'wu-parallax': HTMLWuParallaxElement
    'wu-rating': HTMLWuRatingElement
    'wu-shadow': HTMLWuShadowElement
    'wu-spinner': HTMLWuSpinnerElement
    'wu-tinder-card': HTMLWuTinderCardElement
  }

  interface ElementTagNameMap {
    'wu-accordion-header': HTMLWuAccordionHeaderElement;
    'wu-accordion': HTMLWuAccordionElement;
    'wu-burger': HTMLWuBurgerElement;
    'wu-button': HTMLWuButtonElement;
    'wu-card': HTMLWuCardElement;
    'wu-divider': HTMLWuDividerElement;
    'wu-drop-menu': HTMLWuDropMenuElement;
    'wu-field-helper': HTMLWuFieldHelperElement;
    'wu-field-stacked': HTMLWuFieldStackedElement;
    'wu-form': HTMLWuFormElement;
    'wu-toggle': HTMLWuToggleElement;
    'wu-col': HTMLWuColElement;
    'wu-container': HTMLWuContainerElement;
    'wu-row': HTMLWuRowElement;
    'wu-header': HTMLWuHeaderElement;
    'wu-img': HTMLWuImgElement;
    'wu-drawer-menu': HTMLWuDrawerMenuElement;
    'wu-menu-header': HTMLWuMenuHeaderElement;
    'wu-menu-item': HTMLWuMenuItemElement;
    'wu-page': HTMLWuPageElement;
    'wu-parallax': HTMLWuParallaxElement;
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
