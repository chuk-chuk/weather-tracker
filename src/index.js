import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import Application from './components/Application';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
const store = configureStore();

render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);