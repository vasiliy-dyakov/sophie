import Button from '../../../components/button/Button';
import sophie from '../../../framework/sophie';

describe('Button', () => {
    let button;

    beforeEach(() => {
        button = new Button({ text: 'Button' });
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(button)).toEqual('[{"component":"button","props":{},"children":["Button",null]}]');
    });

    it('should return expected string', () => {
        expect(sophie.renderToString(button)).toEqual('<button>Button</button>');
    });
});
