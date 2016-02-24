import Events from './Events';

class Store extends Events {
    constructor({ context, storeName, state, eventHandlers = {} }) {
        super();

        this.context = context;
        this.storeName = storeName;

        for (let eventName in eventHandlers) {
            if (eventHandlers.hasOwnProperty(eventName)) {
                this.bindEventHandler(eventName, eventHandlers[eventName]);
            }
        }

        if (state) {
            this.state = state;
        } else {
            this.initialize();
        }
    }

    initialize() {
        this.state = this.state || {};
    }

    getState() {
        return this.state;
    }

    bindEventHandler(eventName, handlerName) {
        let { context } = this;

        context.on(eventName, payload => {
            let state = this.getState(),
                newState;

            this[handlerName](payload);
            newState = this.getState();

            if (state !== newState) {
                this.emit('CHANGE', newState);
            }
        });
    }
}

export default Store;
