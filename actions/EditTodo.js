import Action from '../framework/Action';

class EditTodo extends Action {
    execute({ payload: todo, context }) {
        context.emit('UPDATE_TODO', todo);
    }
}

export default EditTodo;
