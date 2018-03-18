import { Component, Element } from '@stencil/core'

@Component({
  tag: 'wu-accordion-header',
  styleUrl: 'wu-accordion-header.scss'
})
export class WuAccordionHeader {
  @Element() header: HTMLElement
  toggleOpen = () => {
    const accordion = this.header.closest('wu-accordion')
    if (accordion.classList.contains('open')) {
      accordion.classList.remove('open')
    } else {
      accordion.classList.add('open')
    }
  }
  render() {
    return (
      <div
        onClick={() => {
          this.toggleOpen()
        }}
      >
        <slot />
      </div>
    )
  }
}
