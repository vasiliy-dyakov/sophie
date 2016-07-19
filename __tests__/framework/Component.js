import { Component, renderToString, t7 } from 'jsunit';

class Block extends Component {
    render() {
        return t7 `<div class="block">Text of block</div>`;
    }
}

describe('renderToString', () => {

    it('should return expected string', () => {
        expect(renderToString(t7 `<unit Class=${Block} />`)).toEqual('<div class="block">Text of block</div>');
    });

});
