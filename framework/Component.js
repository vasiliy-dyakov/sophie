class Component {
    constructor(props, children) {
        super();

        this.props = {
            ...props,
            children
        };

        return this.render();
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

export default Component;
