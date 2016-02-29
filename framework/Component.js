class Component {
    constructor(props, children, {
        context = {},
        watchStores = []
    } = {}) {
        this.props = Object.assign({}, props, {
            children
        });

        this.state = {};

        if (watchStores.length && this.handleStoresChange) {
            this.handleStoresChange(context.state);
            watchStores.forEach(storeName => context.on(storeName, this.handleStoresChange));
        }
    }

    setState(changes) {
        Object.assign(this.state, changes);
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

export default Component;
