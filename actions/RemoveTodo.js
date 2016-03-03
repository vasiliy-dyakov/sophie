import { Action } from 'jsunit';

class RemoveTodo extends Action {
    execute({ payload: id, context }) {
        context.emit('REMOVE_TODO', id);
    }
}

export default RemoveTodo;
