import { Store } from 'jsunit';

class Todos extends Store {

    initialize() {
        this.state = {
            todos: [],
            todosById: {}
        };
    }

    groupTodosById(todos) {
        return todos.reduce((memo, value, index) => {
            memo[value.id] = value;

            return memo;
        }, {});
    }

    addTodo(newTodo) {
        let { todos: prevTodos } = this.state,
            todos = [...prevTodos, newTodo];

        this.state = {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    updateTodo(todo) {
        let { todos: prevTodos } = this.state,
            todos = prevTodos.map(item => item.id === todo.id ? todo : item);

        this.state = {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    removeTodo(id) {
        let { todos: prevTodos } = this.state;
            todos = prevTodos.reduce((memo, item) => {
                if (item.id !== id) {
                    memo.push(value);
                }

                return memo;
            }, []);

        this.state = {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }
}

Todos.storeName = 'todos';

Todos.eventHandlers = {
    ADD_TODO: 'addTodo',
    UPDATE_TODO: 'updateTodo',
    REMOVE_TODO: 'removeTodo'
};

export default Todos;
