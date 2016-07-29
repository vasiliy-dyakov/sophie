import { t7 } from 'jsunit';

function Button({
    text = '',
    onClick
} = {}, children) {
    return t7 `<button onclick=${onClick}>
        ${text}
        ${children}
    </button>`;
}

Button.types = {
    text: 'string',
    onClick: 'function'
};

export default Button;
