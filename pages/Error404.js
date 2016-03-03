import { Component } from 'jsunit';

class Error404 extends Component {
    render() {
        return [
            {
                component: 'div',
                children: ['404 Error']
            }
        ];
    }
}

export default Error404;
