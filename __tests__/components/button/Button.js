import Button from '../../../components/button/Button';
import { renderToString, t7 } from 'jsunit';

describe('Button', () => {
    it('should return expected string', () => {
        let json = t7 `<unit Class=${Button} text="Button">${'1 + 2 = '}${1 + 2}</unit>`;

        expect(renderToString(json)).toEqual('<button>Button1 + 2 = 3</button>');
    });
});
