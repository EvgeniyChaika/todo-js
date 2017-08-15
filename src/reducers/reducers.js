import {combineReducers} from 'redux';

import {default as filterReducer} from './filter';
import tasks, * as fromTasks from './tasks';

const reducer = combineReducers({
    tasks,
    filter: filterReducer
});

export default reducer;

export function getFilteredTasks(state) {
    return fromTasks.getFilteredTasks(state.tasks, state.filter);
}