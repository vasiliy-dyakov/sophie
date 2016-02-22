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
        throw new Error('render method is not implement');
    }
}

export default Component;
