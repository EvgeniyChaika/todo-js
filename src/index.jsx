import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import tasks from '../api/tasks';

import App from './App';
import reducer from './reducers/reducers';

const store = createStore(reducer, tasks);

ReactDOM.render(<App store={store}/>, document.getElementById('app'));
