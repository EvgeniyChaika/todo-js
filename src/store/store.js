import {createStore} from 'redux';
import state from '../../api/state';
import reducer from '../reducers/reducers';

const store = createStore(reducer, state);

export default store;