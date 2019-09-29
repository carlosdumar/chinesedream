import React from 'react';
import ReactDOM from 'react-dom';

// import Header from './containers/header/Header'
import Home from './containers/home/home';

import 'normalize.css';

ReactDOM.render(
    <div>
        <Home menu="carlos"/>
    </div>,
    document.getElementById('app')
)