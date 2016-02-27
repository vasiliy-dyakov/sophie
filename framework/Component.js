class Component {
    constructor(props, children, context) {
        this.context = context;

        this.props = Object.assign({}, props, {
            children
        });

        this.state = {};

        return this.render();
    }

    setState(changes) {
        Object.assign(this.state, changes);
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

export default Component;
