import {createStore} from 'redux';
import reducer from '../reducers/reducers';

const store = createStore(reducer);

function addPromiseSupport(store) {
    const dispatch = store.dispatch;

    return action => {
        if (typeof action.then === 'function') {
            return action.then(dispatch);
        }
        return dispatch(action);
    };
}


store.dispatch = addPromiseSupport(store);

const dispatch = store.dispatch;

store.dispatch = action => {
    if (typeof action === 'function') {
        return action(dispatch);
    }

    return dispatch(action);
};

export default store;