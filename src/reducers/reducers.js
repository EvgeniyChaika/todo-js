import {combineReducers} from 'redux';

import {default as filterReducer} from './filter';
import tasks, * as fromTasks from './tasks';
import fetching from './fetching';

const reducer = combineReducers({
    tasks,
    filter: filterReducer,
    fetching
});

export default reducer;

export function getFilteredTasks(state) {
    return fromTasks.getFilteredTasks(state.tasks, state.filter);
}