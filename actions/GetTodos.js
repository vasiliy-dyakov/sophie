import { Action } from 'jsunit';
import initialState from '../configs/initialState';

class GetTodos extends Action {
    execute({ store, resolve }) {
        store.emit('TODOS_LOADED', initialState.todos.todos);
        resolve();
    }
}

export default GetTodos;
