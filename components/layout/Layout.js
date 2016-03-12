import { Component } from 'jsunit';

class Layout extends Component {
    render() {
        // return this.template `<div class="layout">
        //     <div class="layout__header">
        //         ${this.props.headerText}
        //     </div>
        //     ${this.props.children}
        // </div>`;

        return {
            component: 'div',
            props: {
                'class': 'layout'
            },
            children: [
                {
                    component: 'div',
                    props: {
                        'class': 'layout__header'
                    },
                    children: [this.props.headerText]
                },
                this.props.children
            ]
        };
    }
}

Layout.types = {
    headerText: 'string'
};

Layout.defaults = {
    headerText: 'Header text here'
};

export default Layout;
