import React, { Component } from 'react';

export default class PageThree extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <h1>Page Two</h1>
                <p> This is page 2 {localStorage.getItem('user_name')} </p>
            </div>
        );
    }
}
