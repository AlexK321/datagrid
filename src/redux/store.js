import { createStore } from 'redux';
import elementsRootReducer from './reducers'

const store = createStore(elementsRootReducer);

export default store;
