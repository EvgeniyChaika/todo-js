import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';

import store from './store/store';
import App from './App';
import {requestTasks, getTasks} from "./actions/actions";

store.dispatch(requestTasks());
store.dispatch(getTasks());

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
