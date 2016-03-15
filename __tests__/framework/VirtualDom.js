import { VirtualDom, Component } from 'jsunit';

describe('VirtualDom', () => {
    let virtualDom;

    class Block extends Component {
        render() {
            return {
                component: 'p',
                props: {
                    'class': 'p'
                },
                children: ['Text']
            };
        }
    }

    beforeEach(() => {
        virtualDom = new VirtualDom();
    });

    it('method create should support chaining', () => {
        expect(virtualDom.create()).toBe(virtualDom);
    });

    it('method create should', () => {
        virtualDom.create({
            component: Block
        }, null);

        expect(virtualDom.getTree()).toEqual({
            component: 'p',
            props: {
                'class': 'p'
            },
            children: ['Text']
        });
    });

    it('method update should support chaining', () => {
        expect(virtualDom.update()).toBe(virtualDom);
    });

    it('method getTree should not support chaining', () => {
        expect(virtualDom.getTree()).not.toBe(virtualDom);
    });

    it('method getString should return string', () => {
        expect(typeof virtualDom.getString()).toBe('string');
    });
});
