import { find, pick } from 'lodash';
import Store from '../framework/Store';

class Todos extends Store {
    static name = 'todos';

    static eventHandlers = {
        ADD_TODO: 'addTodo',
        UPDATE_TODO: 'updateTodo',
        REMOVE_TODO: 'removeTodo'
    };

    initialize() {
        this.state = {
            todos: [],
            todosById: {}
        };
    }

    addTodo(newTodo) {
        let { todos, todosById } = this.state;

        this.state = {
            todos: [...todos, newTodo],
            todosById: {
                ...todosById,
                [newTodo.id]: newTodo
            }
        };
    }

    updateTodo(todo) {
        let { todos, todosById } = this.state,
            oldTodo = find(todos, {
                id: todo.id
            }),
            index = todos.indexOf(oldTodo);

        this.state = {
            todos: [...todos].splice(index, 1, todo),
            todosById: {
                ...todosById,
                [todo.id]: todo
            }
        };
    }

    removeTodo(id) {
        let { todos, todosById } = this.state,
            oldTodo = find(todos, { id }),
            index = todos.indexOf(oldTodo);

        this.state = {
            todos: [...todos].splice(index, 1),
            todosById: pick(todosById, (value, key) => key !== id)
        };
    }
}

export default Todos;
