import { createStore } from 'redux';
import docReducer from './reducers/docReducer';

const store = createStore(docReducer);

export default store;