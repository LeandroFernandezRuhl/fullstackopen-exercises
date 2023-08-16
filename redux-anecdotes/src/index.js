import React from 'react'
import ReactDOM from 'react-dom/client'
import {createStore, compose, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import App from './App'
import anecdoteReducer from './reducers/anecdoteReducer'
import filterReducer from "./reducers/filterReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducer = combineReducers({
    anecdotes: anecdoteReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    composeEnhancers()
);


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App/>
    </Provider>
)