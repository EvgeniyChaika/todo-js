import {GET_TASKS, ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../actions/actions';

function taskReducer(state = {}, action) {
    switch (action.type) {
        case ADD_TASK:
            return {
                id: action.id,
                title: action.title,
                completed: false
            };
        case TOGGLE_TASK:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                completed: !state.completed
            });

        case EDIT_TASK:
            if (state.id !== action.id) {
                return state;
            }
            return Object.assign({}, state, {
                title: action.title
            });
        default :
            return state;
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
        case GET_TASKS:
            return action.tasks;
        case ADD_TASK:
            return [...state, taskReducer(undefined, action)];
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