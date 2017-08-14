import {ADD_TASK, DELETE_TASK, EDIT_TASK, TOGGLE_TASK} from '../actions/index';

export default function reducer(state = [], action) {
    switch (action.type) {
        case ADD_TASK:
            const task = {
                id: action.id,
                title: action.title,
                completed: false
            };
            return [...state, task];
        case DELETE_TASK:
            const index = state.findIndex(task => task.id === action.id);
            return [...state.slice(0, index), ...state.slice(index + 1)];
        case EDIT_TASK:
            return state.map(task => {
                if (task.id !== action.id) {
                    return task;
                }
                return Object.assign({}, task, {
                    completed: !task.completed
                })
            });
            return [];
        case TOGGLE_TASK:
            return state.map(task => {
                if (task.id !== action.id) {
                    return task;
                }
                return Object.assign({}, task, {
                    title: action.title
                })
            });
        default :
            return [];
    }
}