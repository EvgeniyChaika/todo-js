import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import tasks from '../api/tasks';

import App from './App';
import reducer from './reducers/reducers';

const store = createStore(reducer, tasks);

class Provider extends React.Component {
    getChildContext() {
        return {store: this.props.store};
    }

    render() {
        return this.props.children;
    }
}

Provider.childContextTypes = {
    store: PropTypes.object
};

ReactDOM.render(
    <Provider  store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
