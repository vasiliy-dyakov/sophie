import { template } from '../../framework/Templater';
import Button from '../button/Button';

// Stateless and actionless component
export default function TodoListItem({
    todo = {},
    onEditClick,
    onRemoveClick
}, children) {
    return template `<li class="todos__item">
        ${todo.text}
        <${Button} class="todos__edit" onClick=${onEditClick}>edit</${Button}>
        <${Button} class="todos__remove" onClick=${onRemoveClick}>remove</${Button}>
    </li>`;
}
