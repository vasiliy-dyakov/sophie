import { Action } from 'jsunit';
import initialState from '../configs/initialState';

class GetTodos extends Action {
    execute({ context }) {
        context.emit('TODOS_LOADED', initialState.todos.todos);
    }
}

export default GetTodos;
