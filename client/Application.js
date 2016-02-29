import sophie from '../framework/sophie';
import ApplicationComponent from '../components/application/Application.js';

class Application {
    constructor(/* state */) {
        // var store = this.createStore(state);

        sophie.render(
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
