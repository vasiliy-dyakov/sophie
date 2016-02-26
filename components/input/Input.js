// import { template } from '../../framework/Templater';

export default function Input({
    placeholder,
    value,
    onClick,
    onChange
} = {}) {
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
