import { Component, t7 } from 'jsunit';

class Layout extends Component {
    render() {
        return t7 `<div class="layout">
            <div class="layout__header">
                ${this.props.headerText}
            </div>
            ${this.props.children}
        </div>`;
    }
}

Layout.types = {
    headerText: 'string'
};

Layout.defaults = {
    headerText: 'Header text here'
};

export default Layout;
