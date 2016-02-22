import Action from '../framework/Action';

class AddTodo extends Action {
    execute({ payload: todo, context }) {
        context.emit('UPDATE_TODO', todo);
    }
}
