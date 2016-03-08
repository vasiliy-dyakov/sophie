import { Action } from 'jsunit';

class EditTodo extends Action {
    execute({ payload: todo, store }) {
        store.emit('UPDATE_TODO', todo);
    }
}

export default EditTodo;
