import { Component } from 'jsunit';
import Input from '../input/Input';
import Button from '../button/Button';
import Item from './TodoListItem';
import GetTodos from '../../actions/GetTodos';
import AddTodo from '../../actions/AddTodo';
import EditTodo from '../../actions/EditTodo';
import RemoveTodo from '../../actions/RemoveTodo';

class TodoList extends Component {

    render() {
        let { todos = [] } = this.props;

        // return this.template `<div class="todo-list">
        //     <ul class="todo-list__list">
        //         ${todos.map(todo => this.template `<${Item} todo=${todo} />`)}
        //     </ul>
        //     <div class="todo-list__add">
        //         <${Input} placeholder="New todo" />
        //         <${Button}>${this.props.buttonText}</${Button}>
        //     </div>
        //     ${this.props.children}
        // </div>`;

        return [
            {
                component: 'div',
                props: {
                    'class': 'todo-list'
                },
                children: [
                    {
                        component: 'ul',
                        props: {
                            'class': 'todo-list__list'
                        },
                        children: todos.map(todo => [{
                            component: Item,
                            props: {
                                todo
                            }
                        }])
                    },
                    {
                        component: 'div',
                        props: {
                            'class': 'todo-list__add'
                        },
                        children: [
                            {
                                component: Input,
                                props: {
                                    placeholder: 'New todo'
                                }
                            },
                            {
                                component: Button,
                                children: [this.props.buttonText]
                            }
                        ]
                    },
                    this.props.children
                ]
            }
        ];
    }
}

TodoList.types = {
    todos: 'array',
    todosById: 'object'
};
TodoList.defaults = {
    todos: [],
    todosById: {}
};

TodoList.initActions = [GetTodos];
TodoList.actions = [AddTodo, EditTodo, RemoveTodo];

TodoList.watch = ['todos'];
TodoList.connect = function({
    todos: {
        todos = [],
        todosById = {}
    } = {}
} = {}) {
    return {
        todos,
        todosById
    };
};

export default TodoList;
