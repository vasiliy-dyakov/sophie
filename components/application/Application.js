import { Component, t7 } from 'jsunit';
import * as pages from '../../pages/pages';

class Application extends Component {
    // componentDidMount() {
    //     window.onpopstate = this.onPopState.bind(this);
    //     history.replaceState({
    //         route: this.props.route
    //     }, '');
    // }
    //
    // onPopState(event) {
    //     this.props.dispatch(changeRoute(event.state.route));
    // }

    render() {
        let PageComponent = pages[this.props.route || 'Index'];

        return t7 `<unit Class=${PageComponent} />`;
    }
}

Application.watch = ['route'];
Application.connect = function({ route }) {
    return {
        route
    };
};

export default Application;
