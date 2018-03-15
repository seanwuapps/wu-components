import { flush, render } from '@stencil/core/testing';
import { WuCol } from './wu-col';

describe('wu-col', () => {
  it('should build', () => {
    expect(new WuCol()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [WuCol],
        html: '<wu-col></wu-col>'
      });
    });

    

    // it('should work with both a first and a list name', async () => {
    //   element.first = 'Peter'
    //   element.last = 'Parker';
    //   await flush(element);
    //   expect(element.textContent).toEqual('Hello, my name is Peter Parker');
    // });
  });
});