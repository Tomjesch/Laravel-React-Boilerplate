import React, { Component } from 'react'

export default class Account extends Component {

    render() {
        return (
            <div>
                <h1>Hey { localStorage.getItem('user_name') }, You are logged in !</h1>
            </div>
        )
    }
}