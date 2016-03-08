import { Component } from 'jsunit';
import Button from '../button/Button';
import EditTodo from '../../actions/EditTodo';
import RemoveTodo from '../../actions/RemoveTodo';

class TodoListItem extends Component {
    handleSave(event) {
        this.props.actions.EditTodo({});
    }

    handleRemove(event) {
        this.props.actions.RemoveTodo({ id: this.props.todo.id });
    }

    render() {
        let { children } = this;
        // return template `<li class="todo-list__item">
        //     ${todo.text}
        //     ${children}
        //     <${Button} class="todo-list__edit" onClick=${this.handleEdit}>edit</${Button}>
        //     <${Button} class="todo-list__remove" onClick=${this.handleRemove}>remove</${Button}>
        // </li>`;

        return [
            {
                component: 'li',
                props: {
                    'class': 'todo-list__item'
                    owner: this
                },
                children: [
                    todo.text,
                    children,
                    {
                        component: Button,
                        props: {
                            'class': 'todo-list__edit',
                            onClick: this.handleSave
                        },
                        children: ['edit']
                    },
                    {
                        component: Button,
                        props: {
                            'class': 'todo-list__remove',
                            onClick: this.handleRemove
                        },
                        children: ['remove']
                    }
                ]
            }
        ];
    }
}

TodoListItem.actions = [EditTodo, RemoveTodo];
TodoListItem.autoBind = ['handleSave', 'handleRemove'];

export default TodoListItem;
