import {GET_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../actions/actions';

function taskReducer(state = {}, action) {
    switch (action.type) {
        case TOGGLE_TASK:
            if (state.id !== action.task.id) {
                return state;
            }
            return action.task;
        case EDIT_TASK:
            if (state.id !== action.task.id) {
                return state;
            }
            return action.task;
        default :
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_TASKS:
            return action.tasks;
        case ADD_TASK:
            return [...state, action.task];
        case DELETE_TASK:
            const index = state.findIndex(task => task.id === action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        case EDIT_TASK:
            return state.map(task => taskReducer(task, action));
        case TOGGLE_TASK:
            return state.map(task => taskReducer(task, action));
        default :
            return state;
    }
}

export function getFilteredTasks(state, filter) {                         //selector function
    switch (filter) {
        case 'ALL':
            return state;
        case 'COMPLETED':
            return state.filter(task => task.completed);
        case 'UNCOMPLETED':
            return state.filter(task => !task.completed)
    }
}