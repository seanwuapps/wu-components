import { Component, Prop, State, Method, Event, EventEmitter, Watch, Element } from '@stencil/core'

@Component({
  tag: 'wu-rating',
  styleUrl: 'wu-rating.scss'
})
export class WuRating {
  resetToValue: number = 0
  @Prop({ mutable: true })
  value: number = 0
  @Prop() max: number = 5
  @Prop() icon: any = ''
  @Prop() iconOutline: any = ''
  @State() currentFillStates: Array<boolean> = []
  @Element() el: HTMLInputElement
  @Event() change: EventEmitter

  @Method()
  setVal(val) {
    this.currentFillStates = this.currentFillStates.map((state, i) => {
      if (state) {
      } // to dismiss tslint complaining about state not read
      if (i < val) {
        return true
      }
      return false
    })

    return this.currentFillStates.filter(v => v).length
  }

  @Method()
  getVal() {
    return this.value
  }

  onHover = hoveredIndex => {
    this.setVal(hoveredIndex + 1)
  }

  @Method()
  reset(){
    this.setVal(this.resetToValue)
  }

  onSelect = index => {
    let newVal = index + 1
    this.setVal(newVal)
    this.value = newVal
    this.resetToValue = newVal
    this.change.emit()
  }

  @Watch('value')
  valueChanged(){
    console.log('prop did change: ', this.value)
    if (this.el.value !== String(this.value)) {
      this.el.value = String(this.value)
      console.log(this.el.value)
    }
  }

  renderStar(i: number, filled: boolean = false) {
    //     <linearGradient id="lg" x1="0" y1="0" x2="1" y2="0">
    //     <stop offset="0%" stop-color="currentColor"/>
    //     <stop offset="75%" stop-color="currentColor"/>
    //     <stop offset="75%" stop-color="#fff"/>
    // </linearGradient>
    let icon = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path
          d="M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61"
          //  fill="url(#lg)"
        />
      </svg>
    )

    let iconOutline = (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <path d="M50 7L39 40H5l28 20-11 33 28-20 28 20-11-33 28-20H61M50 17l8 26h27L64 59l8 26-22-16-22 16 8-26-21-16h27l8-26" />
      </svg>
    )

    return (
      <span class="rating-icon" onClick={() => this.onSelect(i)} onMouseEnter={() => this.onHover(i)}>
        {filled ? icon : iconOutline}
      </span>
    )
  }

  componentWillLoad() {
    let fillStates = []
    for (let i = 0; i < this.max; i++) {
      if (i < this.value) {
        fillStates.push(true)
      } else {
        fillStates.push(false)
      }
    }
    this.resetToValue = this.value
    this.currentFillStates = fillStates
  }

  render() {
    return (
      <div class="stars" onMouseLeave={() => this.reset()}>
        {this.currentFillStates.map((state, i) => this.renderStar(i, state))}
      </div>
    )
  }
}
