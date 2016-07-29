import { Component, connect, t7 } from 'jsunit';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';
import GetTodos from '../../actions/GetTodos';
import AddTodo from '../../actions/AddTodo';

class TodoList extends Component {
    handleNewTodo() {
        this.props.actions.AddTodo({});
    }

    render() {
        let { todos = [] } = this.props;

        return t7 `<div class="todo-list">
            <ul class="todo-list__list">
                ${todos.map(todo => t7 `<unit Class=${Item} todo=${todo} />`)}
            </ul>
            <div class="todo-list__add">
                <unit Class=${Input} placeholder="New todo" />
                <unit Class=${Button} onClick=${this.handleNewTodo}>${this.props.buttonText}</unit>
            </div>
            ${this.props.children}
        </div>`;
    }
}

TodoList.types = {
    todos: 'array',
    todosById: 'object'
};
TodoList.defaults = {
    todosById: {}
};
TodoList.required = ['todos'];
TodoList.singleton = true;

TodoList.initActions = [GetTodos];
TodoList.actions = [AddTodo];

TodoList.autoBind = ['handleNewTodo'];

export default connect(function({
    todos: {
        todos = [],
        todosById = {}
    } = {}
} = {}) {
    return {
        todos,
        todosById
    };
})(TodoList);
