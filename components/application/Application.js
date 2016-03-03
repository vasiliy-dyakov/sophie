import { Component } from 'jsunit';
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

    handleStoresChange(stores) {
        let { route } = stores;

        this.setState({
            route
        });
    }

    render() {
        let PageComponent = pages[this.state.route || 'Index'];

        return [
            {
                component: PageComponent
            }
        ];
    }
}

Application.watchStores = ['route'];

export default Application;
