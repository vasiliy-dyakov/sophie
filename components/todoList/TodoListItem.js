import { Component, t7 } from 'jsunit';
import Button from '../button/Button';
import EditTodo from '../../actions/EditTodo';
import RemoveTodo from '../../actions/RemoveTodo';

class TodoListItem extends Component {
    handleSave() {
        this.props.actions.EditTodo({});
    }

    handleRemove() {
        this.props.actions.RemoveTodo({ id: this.props.todo.id });
    }

    render() {
        let { children, todo } = this.props;
        return t7 `<li class="todo-list__item">
            ${todo.text}
            ${children}
            <unit Class=${Button} class="todo-list__edit" onClick=${this.handleEdit}>edit</unit>
            <unit Class=${Button} class="todo-list__remove" onClick=${this.handleRemove}>remove</unit>
        </li>`;
    }
}

TodoListItem.actions = [EditTodo, RemoveTodo];
TodoListItem.autoBind = ['handleSave', 'handleRemove'];

export default TodoListItem;
