import {REQUEST_TASKS, GET_TASKS} from '../actions/actions';

export default function reducer(state = false, action) {
    switch (action.type) {
        case REQUEST_TASKS:
            return true;
        case GET_TASKS:
            return false;
        default:
            return state;
    }
}