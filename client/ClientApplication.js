import { Store, attach, t7 } from 'jsunit';
import Application from '../components/application/Application.js';
import addTodo from '../actions/AddTodo';
import Todos from '../reducers/Todos';
import Routes from '../reducers/Routes';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            reducers: [Todos, Routes],
            state
        });

        setInterval(() => addTodo({ payload: { text: 'new todo' }, store }), 5000);

        attach(t7 `<unit Class=${Application} />`, document.getElementById('application'), { store });
    }
}

new ClientApplication(window.__STATE__);
