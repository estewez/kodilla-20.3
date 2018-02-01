import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import DevTools from './store/DevTools';

const DT = () => {
    return (
        <div className="App">
            <DevTools />
        </div>
    );
};

render(
    <Provider store={store}>
        <div>
            <h1>Inicjalizacja projektu</h1>
            <DT />
        </div>
    </Provider>,
    document.getElementById('root')
);