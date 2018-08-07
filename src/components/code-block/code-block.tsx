import { Component, Prop, Element } from '@stencil/core'
import hljs from 'highlight.js/lib/index.js'
@Component({
  tag: 'code-block',
  styleUrls: ['code-block.scss','../../../node_modules/highlight.js/styles/dracula.css']
})
export class CodeBlock {
  @Prop() language: string = 'html'
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
              <code class={this.language}>{this.code ? this.code : <slot/> }</code>
            </pre>
          </div>
        </wu-accordion>
      </div>
    )
  }
}
