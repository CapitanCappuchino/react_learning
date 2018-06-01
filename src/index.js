import React             from 'react';
import ReactDOM          from 'react-dom';
import { Provider }      from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { injectGlobal }  from 'styled-components';

import configureStore    from './store/configureStore';
import App               from './App';
import * as styles       from './styles/consts';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
,document.getElementById('root'));

injectGlobal`
    html{
        font-size: ${styles.defaultFontSize};
        font-family: ${styles.defaultFontFamily};
        box-sizing: border-box;
    }
`;

