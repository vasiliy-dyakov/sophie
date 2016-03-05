import { Context, renderDOM } from 'jsunit';
import Application from '../components/application/Application.js';
import Todos from '../stores/Todos';

class ClientApplication {
    constructor(state) {
        let context = new Context({
            stores: [Todos],
            state
        });

        renderDOM(
            {component: Application},
            context,
            document.getElementById('application')
        );
    }
}

new ClientApplication(window.__STATE__);
