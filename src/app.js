import React from 'react';
import ReactDOM from 'react-dom';

import Header from './containers/header/Header'

import 'normalize.css';

ReactDOM.render(
    <div>
        <Header menu="carlos"/>
    </div>,
    document.getElementById('app')
)