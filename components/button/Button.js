// import { template } from 'jsunit';

function Button({
    text = '',
    onClick
} = {}, children) {
    // return template `<button onClick=${onClick}>
    //     ${text}
    //     ${children}
    // </button>`;

    return {
        component: 'button',
        props: {
            onClick: onClick
        },
        children: [
            text,
            children
        ]
    };
}

Button.types = {
    text: 'string',
    onClick: 'function'
};

export default Button;
