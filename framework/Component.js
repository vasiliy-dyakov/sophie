import { isEqual } from 'lodash';

class Component {
    constructor({ props, children, context, parentNode }) {
        this.context = context;
        this._parentNode = parentNode;

        this.props = {
            ...props,
            children
        };

        this.state = {};
        this._saveLast();
    }

    setState(changes) {
        Object.assign(this.state, changes);

        this._planToRerender();
    }

    _saveLast() {
        this._lastProps = { ...this.props };
        this._lastState = { ...this.state };
    }

    _planToRerender() {
        setTimeout(this._beforeRender, 0);
    }

    _beforeRender() {
        let { props, _lastProps, state, _lastState } = this,
            html,
            node;

        if (isEqual(_lastProps, props) && isEqual(_lastState, state)) {
            return;
        }

        this._renderWrapper();
    }

    _renderWrapper() {
        this._saveLast();
        html = this.render();

        node = document.createElement('div');
        node.innerHtml = html;

        if (this._node) {
            this._parentNode.replaceChild(node, this._node);
        } else {
            this._parentNode.appendChild(node);
        }

        this._node = node;
    }

    render() {
        throw new Error('Default render is not implement');
    }
}

export default Component;
