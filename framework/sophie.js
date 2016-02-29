import Component from './Component';

let sophie = {};

sophie.renderToString = (json, context) => {
    if (Array.isArray(json)) {
        return json.map(item => sophie.renderToString(item, context)).join('');
    } else if (typeof json === 'string' || typeof json === 'number') {
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

            return `<${component}${propsString ? ` ${propsString}` : ''}>${sophie.renderToString(children, context)}</${component}>`;
        } else if (component.prototype instanceof Component) {
            let instance = new component(props, children, {
                context,
                watchStores: component.watchStores
            });

            return sophie.renderToString(instance.render(), context);
        } else if (typeof component === 'function') {
            return sophie.renderToString(component(props, children), context);
        }
    }

    return '';
};

export default sophie;
