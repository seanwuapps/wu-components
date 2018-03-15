import { flush, render } from '@stencil/core/testing';
import { WuRow } from './wu-row';

describe('wu-row', () => {
  it('should build', () => {
    expect(new WuRow()).toBeTruthy();
  });

  describe('rendering', () => {
    let element;
    beforeEach(async () => {
      element = await render({
        components: [WuRow],
        html: '<wu-row></wu-row>'
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