import { Component, Prop } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'component-page',
  styleUrl: 'component-page.css'
})
export class ComponentPage {
  
  @Prop() match: MatchResults;

  content: string = 'No demo available';
  
  componentWillLoad() {
    const page = this.match.params.name
    return this.fetchNewContent(page);
  }

  fetchNewContent(page: string) {
    console.log(page)
    if (page.length) {
      const doc = document;
      return fetch(`/demo-pages/${page}.html`)
        .then(response => response.text())
        .then(data => {
          console.log(data)
          this.content = data;
          doc.title = page.toUpperCase() + ' - WU Component';
        })
        .catch(error => {
          console.error(error)
        })
    }
  }

  
  render() {
    return (
      <div innerHTML={this.content}></div>
    );
  }
}