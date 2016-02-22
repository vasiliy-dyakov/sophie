import { template } from '../../framework/Templater';

export default function Input({
    placeholer,
    value,
    onClick,
    onChange
} = {}, children) {
    return template `<input
        placeholer="${placeholder}"
        value="${value}"
        onChange=${onChange}
        onClick=${onClick}
    />`;
}
