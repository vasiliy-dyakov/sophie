import Events from './Events';

class Context extends Events {
    constructor({ stores = [], state = {} }) {
        super();

        this.state = state;

        stores.forEach(Store => this.initStore(Store));
    }

    initStore(Store) {
        let { storeName, eventHandlers } = Store,
            store = new Store({
                context: this,
                storeName,
                eventHandlers,
                state: this.state[storeName]
            });

        this.state[storeName] = store.getState();

        store.on('CHANGE', state => this.setStoreState(storeName, state));
    }

    setStoreState(storeName, state) {
        this.state[storeName] = state;
        this.emit(storeName, this.state);
    }
}

export default Context;
