import React, { Component } from 'react';
import Message from '../../Shell/Message';
import './index.css';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div className="containerPage">
            <div className="auth_windows">
                <h2>Login</h2>
                <div className="field">
                    <input id="id1"/><label >Email</label>
                </div>
                <div className="field">
                    <Message/>
                </div>
                <div className="field">
                    <input id="id2"/><label >Password</label>
                </div>
                <div className="field">
                    <Message/>
                </div>
                <div className="field checkbox">
                    <input id="id3" type="checkbox"/><label >Remember Me</label>
                </div>
                <div className="field button">
                    <div>
                        <input className=""
                               type="button"
                               value="Login"/>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}
