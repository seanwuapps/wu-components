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

  @State() loadedSrc: string = ''
  img: HTMLImageElement
  imgClasses: string

  componentWillLoad = () => {
    if (!this.thumb) {
      this.loadedSrc = this.src
    }
    this.loadedSrc = this.thumb
  }

  componentDidLoad = () => {
    if (!this.thumb) {
      this.loadedSrc = this.src
      this.imgClasses = this.imgClasses + ' enhanced'
      this.img = this.el.querySelector('img')
      this.img.className = this.imgClasses
    }

    // load first image
    this.initImage()
  }

  initImage = () => {
    if (this.loaded) {
      return
    }
    this.img = this.el.querySelector('img')
    // move class list into img tag
    this.imgClasses = this.el.className
    this.el.className = ''
    this.img.className = this.imgClasses
    this.img.onload = this.onImageLoaded
  }

  onImageLoaded = () => {
    if (this.img.src === this.src) {
      this.imgClasses = this.imgClasses + ' enhanced'
      this.img.className = this.imgClasses
      this.loaded = true
      return
    }

    // load large image
    this.loadedSrc = this.src
  }

  render() {
    return <img src={this.loadedSrc} alt={this.alt} />
  }
}
