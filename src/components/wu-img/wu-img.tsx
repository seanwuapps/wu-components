import { Component, Prop, Element, State } from '@stencil/core'

@Component({
  tag: 'wu-img',
  styleUrl: 'wu-img.scss'
})
export class WuImg {
  @Element() el: HTMLElement

  @Prop() thumb: string
  @Prop() src: string
  @Prop() alt: string

  @State() loaded: boolean = false

  componentWillLoad = () => {}

  componentDidLoad = () => {}

  initImage = () => {}

  render() {
    return (
      <div>
        <img src={this.thumb} alt={this.alt} />
        <img src={this.src} alt={this.alt} class="enhanced" />
      </div>
    )
  }
}
