import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import tasks from '../api/tasks';

import App from './App';
import reducer from './reducers';
import {addTask, editTask, deleteTask, toggleTask} from "./actions/index";

const store = createStore(reducer, tasks);

console.log(store.getState());

store.subscribe(() => console.log(store.getState()));
store.dispatch(addTask("Check store"));
store.dispatch(toggleTask(4));
store.dispatch(editTask(4, "New task"));
store.dispatch(deleteTask(2));

console.log(store.getState());

ReactDOM.render(<App initialData={store.getState()}/>, document.getElementById('app'));
