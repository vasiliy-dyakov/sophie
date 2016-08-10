import { createAction } from 'jsunit';

const AddTodo = createAction(({ payload: newTodo, store }) => {
    let { todosById } = store.state.todos,
        ids = Object.keys(todosById).sort((a, b) => a > b ? 1 : -1),
        length = ids.length,
        id = length > 0
            ? ids[length - 1] + 1
            : 0;

    store.emit('ADD_TODO', Object.assign(newTodo, {id}));
});

export default AddTodo;
