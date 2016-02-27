import Button from '../components/button/Button';

describe('Button', () => {
    let button;

    beforeEach(() => {
        button = new Button({ text: 'Button' });
    });

    it('should return expected JSON', () => {
        expect(JSON.stringify(button)).toEqual('[{"component":"button","props":{},"children":["Button",null]}]');
    });

});
