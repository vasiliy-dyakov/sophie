import Component from './Component';

let sophie = {};

sophie.renderToString = json => {
    if (Array.isArray(json)) {
        return json.map(sophie.renderToString).join('');
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

            return `<${component}${propsString ? ` ${propsString}` : ''}>${sophie.renderToString(children)}</${component}>`;
        } else if (component.prototype instanceof Component) {
            let instance = new component(props, children);

            return sophie.renderToString(instance.render());
        } else if (typeof component === 'function') {
            return sophie.renderToString(component(props, children));
        }
    }

    return '';
};

export default sophie;
