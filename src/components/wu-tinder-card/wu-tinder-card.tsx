import { Component, Prop, Element, Event, EventEmitter } from '@stencil/core'
@Component({
  tag: 'wu-tinder-card',
  styleUrl: 'wu-tinder-card.scss'
})
export class WuTinderCard {
  @Element() el: HTMLElement
  @Prop() src: string
  @Prop() thumb: string
  @Prop() threshold: number = 150
  @Prop() leftBtnText: string
  @Prop() rightBtnText: string

  @Event() swipe: EventEmitter

  startX: number
  startY: number

  currentX: number
  currentY: number

  componentDidLoad() {
    this.el.addEventListener(
      'touchstart',
      (e: TouchEvent) => {
        this.startX = e.touches[0].clientX
        this.startY = e.touches[0].clientY
        
        this.currentX = e.touches[0].clientX
        this.currentY = e.touches[0].clientY

      },
      false
    )

    this.el.addEventListener(
      'touchmove',
      (e: TouchEvent) => {
        this.currentX = e.touches[0].clientX
        this.currentY = e.touches[0].clientY
        let diffX = this.currentX - this.startX
        let diffY = this.currentY - this.startY
        this.el.style.transform = `translate(${diffX}px, ${diffY}px)`
      },
      false
    )

    this.el.addEventListener(
      'touchend',
      () => {
        this.el.style.transform = 'translate(0,0)'
        let diffX = this.currentX - this.startX

        let direction = this.getSwipeDirection(diffX)
        if (direction) {
          // trigger swipe event
          this.swipe.emit({ direction })
        }
      },
      false
    )
  }

  getSwipeDirection(diffX: number) {
    if (diffX < 0 - this.threshold) {
      return 'left'
    }
    if (diffX > this.threshold) {
      return 'right'
    }

    return false
  }

  triggerSwipe(direction: string){
    this.swipe.emit({direction})
  }

  render() {
    return (
      <div class="tinder-card">

        {this.src ? <wu-img thumb={this.thumb} src={this.src} /> : <slot />}

        <div class="tinder-card-controls">
          <button class="negative" onClick={ () => { this.triggerSwipe('left')} }>
            {this.leftBtnText ? this.leftBtnText : 'Left'}
          </button>
          <button class="positive" onClick={ () => { this.triggerSwipe('right')} }>
            {this.rightBtnText ? this.rightBtnText : 'Right'}
          </button>
        </div>
      </div>
    )
  }
}
