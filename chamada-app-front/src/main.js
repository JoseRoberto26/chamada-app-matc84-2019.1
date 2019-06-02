import React, { Component } from 'react';

//Redux
import { Provider } from 'react-redux';
import store from './Redux/Store'
import Root from './Routes';

class Main extends Component {
    render() {
        return (
            <Provider store={store}>
                <Root />
            </Provider>
        );
    }
}

export default Main;