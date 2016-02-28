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

Component.jsonToString = json => {
    if (Array.isArray(json)) {
        return json.map(Component.jsonToString).join('');
    } else if (typeof json === 'string') {
        return json;
    } else if (typeof json === 'object' && json.component) {
        if (typeof json.component === 'string') {
            return `<${json.component}${
                json.props
                    ? ' ' + Object.keys(json.props).reduce((memo, key) => {
                        memo.push(`${key}="${encodeURIComponent(json.props[key])}"`);

                        return memo;
                    }, []).join(' ')
                    : ''
            }>${Component.jsonToString(json.children)}</${json.component}>`;
        } else if (json.component.prototype instanceof Component) {
            return Component.jsonToString(new json.component(json.props, json.children));
        }
    }

    return '';
};

export default Component;
