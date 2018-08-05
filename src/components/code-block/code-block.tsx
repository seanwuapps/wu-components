import { Component, Prop, Element } from '@stencil/core'
@Component({
  tag: 'code-block',
  styleUrl: 'code-block.scss'
})
export class CodeBlock {
  @Prop() language: string = 'markup'
  @Prop() code: string = ''
  @Element() el: HTMLElement

  componentDidLoad() {
    hljs.highlightBlock(this.el.querySelector('pre'));
  }

  render() {
    return (
      <div>
        <wu-accordion>
          <wu-accordion-header>View code</wu-accordion-header>
          <div class="accordion-content">
            <pre>
              <code class="xml">{this.code ? this.code : <slot/> }</code>
            </pre>
          </div>
        </wu-accordion>
      </div>
    )
  }
}
