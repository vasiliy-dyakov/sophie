import { Component, t7 } from 'jsunit';

class Input extends Component {
    render() {
        var {
            placeholder,
            value,
            onClick,
            onChange
        } = this.props || {};

        return t7 `<input placeholder=${placeholder} value=${value} />`;
    }
}

export default Input;
