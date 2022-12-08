import React from 'react';
import "./signup.css";

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        username: '',
        password: '',
        };
    }
    
    render() {
        return (
        <div className="signup">
            <h1>Signup</h1>
            <form>
            <label htmlFor="username">Username</label>
            <input
                type="text"
                name="username"
                className="username"
                value={this.state.username}
                onChange={this.handleUsernameChange}
            />
            <label htmlFor="password">Password</label>
            <input
                type="password"
                name="password"
                className="username"
                value={this.state.password}
                onChange={this.handlePasswordChange}
            />
            <button className="signupButton" type="submit" onClick={this.handleSignup}>Signup</button>
            </form>
        </div>
        );
    }
    }
