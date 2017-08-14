import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../actions/index';

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
            return [];
    }
}

export default function reducer(state = [], action) {
    switch (action.type) {
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
            return [];
    }
}