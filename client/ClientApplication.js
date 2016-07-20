import { Store, attach, t7 } from 'jsunit';
import Application from '../components/application/Application.js';
import Todos from '../reducers/Todos';
import Routes from '../reducers/Routes';

class ClientApplication {
    constructor(state) {
        let store = new Store({
            reducers: [Todos, Routes],
            state
        });

        attach(t7 `<unit Class=${Application} />`, document.getElementById('application'), { store });
    }
}

new ClientApplication(window.__STATE__);
