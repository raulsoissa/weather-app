import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { city } from '../reducers/city';

const initialState = {
    city: 'Buenos Aires,ar'
};

//ComposeEnhancer es para la utilización de REDUX DEVTOOLS
const ComposeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(city, initialState, ComposeEnhancer(applyMiddleware(thunk)));
