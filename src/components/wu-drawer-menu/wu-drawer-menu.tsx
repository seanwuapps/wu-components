import { Component, Prop } from '@stencil/core'
@Component({
  tag: 'wu-drawer-menu',
  styleUrls: ['vars.css','wu-drawer-menu.scss']
})
export class WuDrawerMenu {
  @Prop() items: Object|String = {"home" : {
    "label" : 'Home'
  }};

  componentDidLoad(){
    console.log(this.items);
    if(typeof this.items === 'string'){
      console.log('string items')
      this.items = JSON.parse(this.items)
    }
    console.log(this.items)
  }
  render() {
    console.log(this.items);
    return (
      <nav class="side-menu">
        <slot />
        {Object.keys(this.items).map( key => {
          let item = this.items[key];
          return <div>{item.label}</div>
        } )}
      </nav>
    )
  }
}
