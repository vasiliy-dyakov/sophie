import { template } from '../../framework/Templater';
import Button from '../button/Button';

// Stateless and actionless component
export default function TodoListItem({
    todo = {},
    onEditClick,
    onRemoveClick
} = {}, children) {
    return template `<li class="todo-list__item">
        ${todo.text}
        ${children}
        <${Button} class="todo-list__edit" onClick=${onEditClick}>edit</${Button}>
        <${Button} class="todo-list__remove" onClick=${onRemoveClick}>remove</${Button}>
    </li>`;
}
