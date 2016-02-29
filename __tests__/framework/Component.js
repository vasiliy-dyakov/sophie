import Component from '../../framework/Component';
import sophie from '../../framework/sophie';

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

describe('sophie.renderToString', () => {

    it('should return expected string', () => {
        expect(sophie.renderToString([{
            component: Block
        }])).toEqual('<div class="block">Text of block</div>');
    });

});
