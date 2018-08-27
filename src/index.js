import React from 'react';
import ReactDOM from 'react-dom';
import 'babel-polyfill';
import App from './App';
import ScrollToTop from './showcase/scrolltotop/ScrollToTop';
import { HashRouter } from 'react-router-dom';

ReactDOM.render(
    <HashRouter>
        <ScrollToTop>
            <App></App>
        </ScrollToTop>
    </HashRouter>,
    document.getElementById('root')
);