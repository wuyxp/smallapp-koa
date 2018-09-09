import {createStore, compose, combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'

const reducer = combineReducers({
  routing: routerReducer
});
const win = window;
const storeEnhancers = compose(
  win.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
const initialState = {};
export default createStore(reducer, initialState, storeEnhancers);