import { Component, Prop, Element } from '@stencil/core'

@Component({
  tag: 'wu-card',
  styleUrl: 'wu-card.scss'
})
export class WuCard {
  @Prop() cardTitle:string = '';
  @Prop() hover:boolean = false;
  @Element() el: HTMLElement;

  @Prop() thumb: string = '';
  @Prop() src: string = '';
  @Prop() alt: string = '';
  componentDidLoad(){

  }
  render() {
    return <div class="card">
      { this.src ? 
        <wu-img class="card-media" src={this.src} thumb={this.thumb} alt={this.alt}></wu-img> : null
      }
      <div class="card-content">
        <div class="card-title">{this.cardTitle}</div>
        <slot />
      </div>
    </div>
  }
}
