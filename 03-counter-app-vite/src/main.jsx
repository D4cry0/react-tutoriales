import React from 'react';
import ReactDOM from 'react-dom/client';

import { App } from './HelloWorkApp';
import { FirstApp } from './FirstApp';
import { CounterApp } from './CounterApp';

import './styles.css';

// title={ true } igual a title 

ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <FirstApp title="Desde el padre D:" numero={ 123 } /> */}
        <CounterApp value={ 10 } />
    </React.StrictMode>
);