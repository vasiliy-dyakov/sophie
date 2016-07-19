import { Store, attach } from 'jsunit';
import Application from '../components/application/Application.js';
import Todos from '../reducers/Todos';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            reducers: [Todos],
            state
        });

        attach({
            json: {component: Application},
            store,
            domNode: document.getElementById('application')
        });
    }
}

new ClientApplication(window.__STATE__);
