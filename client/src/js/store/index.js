import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import combineReducer from '../reducers';
import { composeWithDevTools } from 'redux-devtools-extension'
const initialState = {

}
const store = createStore(combineReducer, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store;
