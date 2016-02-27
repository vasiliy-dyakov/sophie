import Button from '../components/button/Button';

describe('Button', () => {

    it('should return expected JSON', () => {

        var button = Button({ text: 'Button' });

        expect(JSON.stringify(button)).toEqual('[{"component":"button","props":{},"children":["Button",null]}]');
    });

});
