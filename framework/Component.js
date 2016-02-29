class Component {
    constructor(props, children, { context } = {}) {
        this.context = context;

        this.props = Object.assign({}, props, {
            children
        });

        this.state = {};
    }

    setState(changes) {
        Object.assign(this.state, changes);
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

Component.jsonToString = json => {
    if (Array.isArray(json)) {
        return json.map(Component.jsonToString).join('');
    } else if (typeof json === 'string') {
        return json;
    } else if (typeof json === 'object' && json.component) {
        let { component, props, children } = json,
            propsString;

        if (typeof component === 'string') {
            propsString = props && Object.keys(props).reduce((memo, key) => {
                if (typeof props[key] === 'string' || typeof props[key] === 'number') {
                    memo.push(`${key}="${props[key]}"`);
                }

                return memo;
            }, []).join(' ');

            return `<${component}${propsString ? ` ${propsString}` : ''}>${Component.jsonToString(children)}</${component}>`;
        } else if (component.prototype instanceof Component) {
            let instance = new component(props, children);

            return Component.jsonToString(instance.render());
        } else if (typeof component === 'function') {
            return Component.jsonToString(component(props, children));
        }
    }

    return '';
};

export default Component;
