import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './structure/Header';
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Login from './pages/Login';
import Register from './pages/Register';
import Account from './pages/Account';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false,
            user: {}
        };
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div className="container">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/page-1" component={PageOne} />
                        <Route path="/page-2" component={PageTwo} />
                        <Route path="/page-3" component={PageThree} />
                        <Route path="/account" component={Account} />
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
