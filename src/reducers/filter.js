import {SET_FILTER} from '../actions/actions';

export default function reducer(state = 'ALL', action) {
    switch (action.type) {
        case SET_FILTER:
            return action.filter;
        default:
            return state;
    }
}