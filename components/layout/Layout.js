import Component from '../../framework/Component';

class Layout extends Component {
    static types = {
        headerText: 'string'
    };

    static defaults = {
        headerText: 'Header text here'
    };

    render() {
        // return this.template `<div class="layout">
        //     <div class="layout__header">
        //         ${this.props.headerText}
        //     </div>
        //     ${this.props.children}
        // </div>`;

        return [
            {
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
            }
        ];
    }
}

export default Layout;
