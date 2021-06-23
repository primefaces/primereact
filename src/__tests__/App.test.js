import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';
import { HashRouter } from 'react-router-dom';

// ignore window['gtag']
Object.defineProperty(window, 'gtag', {
    value: () => ({
        getPropertyValue: () => { }
    })
});

it('renders without crashing', () => {
    const root = document.createElement('div');

    ReactDOM.render(
        <HashRouter>
            <React.StrictMode>
                <App />
            </React.StrictMode>
        </HashRouter>,
        root
    );
});
