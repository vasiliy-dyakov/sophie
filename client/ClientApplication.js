import { renderDOM } from 'jsunit';
import Application from '../components/application/Application.js';

class ClientApplication {
    constructor(/* state */) {
        // var store = this.createStore(state);

        renderDOM(
            [
                {
                    // component: Provider,
                    // props: {
                    //     store
                    // },
                    // children: {
                        // component: Application
                    // }
                    component: Application
                }
            ],
            document.getElementById('application')
        );
    }

    // createStore(initialState) {
    //     return createStore(combineReducers(reducers), initialState);
    // }
}

new ClientApplication(window.__STATE__);
