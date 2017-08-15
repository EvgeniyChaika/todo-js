import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import state from '../api/state';

import App from './App';
import reducer from './reducers/reducers';

const store = createStore(reducer, state.tasks);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
