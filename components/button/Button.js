import { template } from '../../framework/Templater';

export default function Button({ text, onClick } = {}, children) {
    return template `<button onClick=${onClick}>
        ${text}
        ${children}
    </button>`;
}
