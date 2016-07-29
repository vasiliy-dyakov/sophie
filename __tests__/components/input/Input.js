import Input from '../../../components/input/Input';
import { renderToString, t7 } from 'jsunit';

describe('Input', () => {
    it('should return expected string', () => {
        expect(renderToString(t7 `<unit Class=${Input} placeholder="Input text here" value="" />`))
            .toEqual('<input placeholder="Input text here"></input>');
    });
});
