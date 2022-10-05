import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';

import App from './App'
import { searchReducer } from './reducers';

import './styles/index.css';

const store = createStore(searchReducer);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>,
    </Provider>,
    document.getElementById("root"));