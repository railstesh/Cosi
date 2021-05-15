import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import MainPage from './MainPage';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <React.StrictMode>
        <MainPage />
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
