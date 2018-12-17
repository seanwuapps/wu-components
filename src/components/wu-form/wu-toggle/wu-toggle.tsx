import { Component, Prop, Event, EventEmitter, Element } from '@stencil/core'

@Component({
  tag: 'wu-toggle',
  styleUrl: 'wu-toggle.scss',
  shadow: true
  })
export class WuToggle {
  @Element() el: HTMLElement
  @Prop() label: string
  @Prop({ reflectToAttr: true }) name: string
  @Prop({ reflectToAttr: true }) required: boolean
  @Prop({ reflectToAttr: true }) value: any
  @Prop({ reflectToAttr: true }) theme?: string
  @Event() changed: EventEmitter

  handleChange (e) {
    console.log(e.target.checked)
    this.changed.emit({ value: this.value, checked: e.target.checked })
  }

  componentDidLoad () {
    let input = this.el
    if (input.hasAttribute('tabindex')) {
      input.setAttribute('tabindex', '0')
    }
    if (this.theme) {
      this.el.shadowRoot.querySelector('.toggle').setAttribute('theme', this.theme)
    }
  }

  render () {
    return (
      <span class="toggle">
        <label>
          <input
            type="checkbox"
            name={this.name}
            required={this.required}
            value={this.value}
            onChange={e => this.handleChange(e)}
          />
          <span class="toggle-slider" />
          <span class="toggle-text">
            <slot />
          </span>
        </label>
      </span>
    )
  }
}
