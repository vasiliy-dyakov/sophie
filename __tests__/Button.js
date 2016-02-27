jest.dontMock('../components/button/Button.js');

var { Button } = require('../components/button/Button.js');

describe('Button', () => {

    it('should something', () => {

        var button = Button({ text: 'Button' });

        expect(JSON.stringify(button)).toEqual('[{"component":"button","props":{},"children":["Button",null]}]');
    });

});
