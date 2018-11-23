import React, { Component } from 'react';

export default class PageOne extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Page One</h1>
                <p> This is page 1 {localStorage.getItem('user_name')} </p>
            </div>
        );
    }
}
