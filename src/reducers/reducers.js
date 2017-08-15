import {combineReducers} from 'redux';

import {default as filterReducer} from './filter';
import {default as taskReducer} from './tasks';

const reducer = combineReducers({
    tasks: taskReducer,
    filter: filterReducer
});

export default reducer;