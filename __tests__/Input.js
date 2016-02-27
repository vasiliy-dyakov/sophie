import Input from '../components/input/Input';

describe('Input', () => {
    let input;

    beforeEach(() => {
        input = new Input({ placeholder: 'Input text here', value: '' });
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(input)).toEqual('[{"component":"input","props":{"placeholder":"Input text here","value":""}}]');
    });

});
