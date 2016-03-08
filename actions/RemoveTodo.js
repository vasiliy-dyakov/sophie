import { Action } from 'jsunit';

class RemoveTodo extends Action {
    execute({ payload: id, store }) {
        store.emit('REMOVE_TODO', id);
    }
}

export default RemoveTodo;
