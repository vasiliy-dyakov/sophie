import { Reducer } from 'jsunit';

class Todos extends Reducer {

    groupTodosById(todos) {
        return todos.reduce((memo, value, index) => {
            memo[value.id] = value;

            return memo;
        }, {});
    }

    addTodo(state, newTodo) {
        let { todos: prevTodos } = state,
            todos = [...prevTodos, newTodo];

        return {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    todosLoaded(state, newTodos) {
        let { todos: prevTodos } = state,
            todos = [...prevTodos, ...newTodos];

        return {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    updateTodo(state, todo) {
        let { todos: prevTodos } = state,
            todos = prevTodos.map(item => item.id === todo.id ? todo : item);

        return {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    removeTodo(state, id) {
        let { todos: prevTodos } = state,
            todos = prevTodos.reduce((memo, item) => {
                if (item.id !== id) {
                    memo.push(value);
                }

                return memo;
            }, []);

        return {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }

    dehydrate(state = {}) {
        let {
            todos = []
        } = state;

        return {
            todos
        };
    }

    rehydrate(state = {}) {
        let {
            todos = []
        } = state;

        return {
            todos,
            todosById: this.groupTodosById(todos)
        };
    }
}

Todos.path = 'todos';
Todos.handlers = {
    ADD_TODO: 'addTodo',
    TODOS_LOADED: 'todosLoaded',
    UPDATE_TODO: 'updateTodo',
    REMOVE_TODO: 'removeTodo'
};

export default Todos;
