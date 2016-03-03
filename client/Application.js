import { renderDOM } from 'jsunit';
import ApplicationComponent from '../components/application/Application.js';

class Application {
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
                        // component: ApplicationComponent
                    // }
                    component: ApplicationComponent
                }
            ],
            document.getElementById('application')
        );
    }

    // createStore(initialState) {
    //     return createStore(combineReducers(reducers), initialState);
    // }
}

new Application(window.__STATE__);
