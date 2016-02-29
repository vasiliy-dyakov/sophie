export default {
    route: 'Index',
    todos: {
        todos: [{
            id: 1,
            text: 'First todo'
        }],
        // TODO dehydrate <-> rehydrate
        todosById: {
            1: {
                id: 1,
                text: 'First todo'
            }
        }
    }
};
