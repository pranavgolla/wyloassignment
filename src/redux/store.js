import { createStore } from 'redux';
import wylosReducer from './reducers';

const store = createStore(
    wylosReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // Enable Redux DevTools Extension
);

export default store;
