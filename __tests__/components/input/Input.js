import Input from '../../../components/input/Input';
import { renderToString } from 'jsunit';

describe('Input', () => {
    let input;

    beforeEach(() => {
        input = new Input({ placeholder: 'Input text here', value: '' });
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(input.render())).toEqual('[{"component":"input","props":{"placeholder":"Input text here","value":""}}]');
    });

    it('should return expected string', () => {
        expect(renderToString(input.render())).toEqual('<input placeholder="Input text here" value=""></input>');
    });
});
