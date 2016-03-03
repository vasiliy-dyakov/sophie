import { Component/*, template*/ } from 'jsunit';

class Input extends Component {
    render() {
        var {
            placeholder,
            value,
            onClick,
            onChange
        } = this.props;

        // return template `<input
        //     placeholer="${placeholder}"
        //     value="${value}"
        //     onChange=${onChange}
        //     onClick=${onClick}
        // />`;

        return [
            {
                component: 'input',
                props: {
                    placeholder,
                    value,
                    onChange,
                    onClick
                }
            }
        ];
    }
}

export default Input;
