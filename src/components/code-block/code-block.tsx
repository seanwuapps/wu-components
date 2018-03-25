import { Component, Prop } from '@stencil/core'

@Component({
  tag: 'code-block',
  styleUrl: 'code-block.scss'
})
export class CodeBlock {
  @Prop() language: string = 'markup'
  @Prop() code: string = ''

  htmlEntities(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
  }

  componentDidLoad() {}

  render() {
    return (
      <pre>
        <code>{this.code}</code>
      </pre>
    )
  }
}
