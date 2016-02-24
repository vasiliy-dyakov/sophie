class Component {
    constructor({ props, children, context }) {
        this.context = context;

        this.props = {
            ...props,
            children
        };

        this.state = {};
    }

    setState(changes) {
        Object.assign(this.state, changes);
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

export default Component;
