import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import axios from 'axios';

import store from './store/store';
import App from './App';
import {getTasks} from "./actions/actions";

axios.get('/api/tasks')
    .then(res => res.data)
    .then(tasks => store.dispatch(getTasks(tasks)));

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('app'));
