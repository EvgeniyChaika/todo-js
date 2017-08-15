import {default as filterReducer} from './filter';
import {default as taskReducer} from './tasks';

function reducer(state = {}, action) {
    return {
        tasks: taskReducer(state.tasks, action),
        filter: filterReducer(state.filter, action)
    }
}