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
        class="accordion-header"
        onClick={() => {
          this.toggleOpen()
        }}
      >
        <svg class="arrow" viewBox="0 0 96 120">
          <path d="M32.59 78.41a2 2 0 0 0 2.83 0l29-29a2 2 0 0 0 0-2.83l-29-29a2 2 0 0 0-2.83 2.83L60.17 48 32.59 75.59a2 2 0 0 0 0 2.82z"/>
        </svg>
        <slot />
      </div>
    )
  }
}
