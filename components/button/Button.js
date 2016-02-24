import { template } from '../../framework/Templater';

function Button({
    text = '',
    onClick
} = {}, children) {
    return template `<button onClick=${onClick}>
        ${text}
        ${children}
    </button>`;
}

Button.types = {
    text: 'string',
    onClick: 'function'
};

export default Button;
