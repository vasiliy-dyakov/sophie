import Input from '../../../components/input/Input';
import Component from '../../../framework/Component';

describe('Input', () => {
    let input;

    beforeEach(() => {
        input = new Input({ placeholder: 'Input text here', value: '' });
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(input.render())).toEqual('[{"component":"input","props":{"placeholder":"Input text here","value":""}}]');
    });

    it('should return expected string', () => {
        expect(Component.jsonToString(input.render())).toEqual('<input placeholder="Input text here" value=""></input>');
    });
});
