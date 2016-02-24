import { template } from '../../framework/Templater';

export default function Input({
    placeholder,
    value,
    onClick,
    onChange
} = {}) {
    return template `<input
        placeholer="${placeholder}"
        value="${value}"
        onChange=${onChange}
        onClick=${onClick}
    />`;
}
