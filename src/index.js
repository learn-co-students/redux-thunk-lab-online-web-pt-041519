// 1. set up provider and needed middleware in index.js

import React from 'react';
import ReactDOM from 'react-dom'
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import catsReducer from './reducers/catsReducer'

// inport applyMiddle from redux
import { applyMiddleware } from 'redux'

// import thunk from redux-thunk
import thunk from 'redux-thunk'

// create the store - pass the reducer into it (we haven't written it yet)
// we pass applymiddleware in as second argument to createStore
const store = createStore(catsReducer, applyMiddleware(thunk))

// wrap the app in the provider - pass store as props to provider
ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root')
);
