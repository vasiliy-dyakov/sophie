import { Component, renderToString } from 'jsunit';

class Block extends Component {
    render() {
        return [
            {
                component: 'div',
                props: {
                    'class': 'block'
                },
                children: [
                    'Text of block'
                ]
            }
        ];
    }
}

describe('renderToString', () => {

    it('should return expected string', () => {
        expect(renderToString([{
            component: Block
        }], { disableIds: true })).toEqual('<div class="block">Text of block</div>');
    });

});
