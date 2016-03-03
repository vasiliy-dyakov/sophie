import { Action } from 'jsunit';

class AddTodo extends Action {
    execute({ payload: newTodo, context }) {
        let { todosById } = context.state.todos,
            ids = Object.keys(todosById).sort((a, b) => a > b ? 1 : -1),
            length = ids.length,
            id = length > 0
                ? ids[length - 1] + 1
                : 0;

        context.emit('ADD_TODO', { ...newTodo, id });
    }
}

export default AddTodo;
