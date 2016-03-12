import Button from '../../../components/button/Button';
import { renderToString } from 'jsunit';

describe('Button', () => {
    let button;

    beforeEach(() => {
        button = new Button({ text: 'Button' }, ['1 + 2 = ', 3]);
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(button)).toEqual('{"component":"button","props":{},"children":["Button",["1 + 2 = ",3]]}');
    });

    it('should return expected string', () => {
        expect(renderToString(button, { disableIds: true })).toEqual('<button>Button1 + 2 = 3</button>');
    });
});
