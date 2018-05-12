import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

import Home from './Home.js';
import About from './About.js';
import Contact from './Contact.js'

ReactDOM.render(
<BrowserRouter>
    <div>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    </div>
</BrowserRouter>,
    document.getElementById('root')
);
