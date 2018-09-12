import { Component } from '@stencil/core';


@Component({
  tag: 'component-page',
  styleUrl: 'component-page.css'
})
export class ComponentPage {
  
  render() {
    return (
      <p>My name is Stencil</p>
    );
  }
}