import Component from '../../framework/Component';

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

describe('Component.jsonToString', () => {

    it('should return expected string', () => {
        expect(Component.jsonToString([{
            component: Block
        }])).toEqual('<div class="block">Text of block</div>');
    });

});
