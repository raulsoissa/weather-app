import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers/';

const initialState = {
    city: 'Buenos Aires,ar'
};

//ComposeEnhancer es para la utilización de REDUX DEVTOOLS
const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducers, initialState, ComposeEnhancer(applyMiddleware(thunk)));
