import { Component, Prop, Element } from '@stencil/core'
@Component({
  tag: 'wu-drawer-menu',
  styleUrls: ['vars.css','wu-drawer-menu.scss']
})
export class WuDrawerMenu {
  @Prop() items: Object|String = {"home" : {
    "label" : 'Home'
  }};
  @Element() el: HTMLElement;

  constructor(){
    this.closeMenu = this.closeMenu.bind(this);
  }
  
  componentDidLoad(){
    if(typeof this.items === 'string'){
      this.items = JSON.parse(this.items)
    }
  }

  closeMenu(){
    this.el.classList.remove('open')
    const triggers = document.querySelectorAll('wu-burger');
    for(let i = 0; i < triggers.length; i++){
      triggers[i].classList.remove('open')
    }
  }

  render() {
    return [
      <nav class="side-menu">
        <slot />
      </nav>, 
      <div class="side-menu-overlay" onClick={() => this.closeMenu()}></div>
    ]
  }
}
