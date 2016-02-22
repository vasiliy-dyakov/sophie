import Action from '../framework/Action';

class AddTodo extends Action {
    execute({ payload: id, context }) {
        context.emit('REMOVE_TODO', id);
    }
}
