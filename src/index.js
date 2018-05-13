import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';
import { Switch } from 'react-router-dom';
import NotFound from './components/NotFound.js'
import Home from './routers/Home.js';
import About from './routers/About.js';
import Contact from './routers/Contact.js';
import Users from './components/users.js';

ReactDOM.render(
<BrowserRouter>
        <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/contact" component={Contact} />
    <Route path="/users/:id" component={Users}/>
            <Route component={NotFound} />
        </Switch>
</BrowserRouter>,
    document.getElementById('root')
);
