import { createStore } from 'redux';

//shorthand for import ./reducers/index.js
import reducer from './reducers';

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const store = createStore(reducer, enhancer)

export default store
