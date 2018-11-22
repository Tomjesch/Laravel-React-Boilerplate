import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Header from './structure/Header';
import HomePage from './pages/HomePage';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';

export default class App extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <div class="container">
                        <Route exact path="/" component={HomePage} />
                        <Route path="/page-1" component={PageOne} />
                        <Route path="/page-2" component={PageTwo} />
                        <Route path="/page-3" component={PageThree} />
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}
