import React, { Component } from 'react';
import Message from '../../Shell/Message';
import './index.css';


export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isValidEmail: false,
            isValidPassword: false,
            email: "",
            password: "",
            isRemember: false};
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onChangeDataCheckBox = this.onChangeDataCheckBox.bind(this);

    }
    onChangePassword(event, data){
        //TODO методы валидации общие с клиентом у сервера - вынести их в одну подключаемую возвращающую тру или фолс
        let password = event.target.value;

        this.setState({
            isValidPassword: password.length >= 6,
            password
        });
    }
    onLogin(){
        if(this.state.isValidEmail && this.state.isValidPassword){
            this.props.loginUser({isRemember: this.state.isRemember, email: this.state.email,password: this.state.password})

        }
    }
    onChangeEmail(event, data){
        //TODO методы валидации общие с клиентом у сервера - вынести их в одну подключаемую возвращающую тру или фолс
        let email = event.target.value;
        const EMAIL_REG = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
        this.setState({
            isValidEmail: EMAIL_REG.test(email),
            email
        });
    }
    onChangeDataCheckBox(event){
       this.setState({isRemember: event.target.checked})
    }
    render() {
        return(
            <div className="containerPage">
            <div className="auth_windows">

                <h2>Login</h2>

                <div className="field">
                    <input id="" onChange={this.onChangeEmail}/><label >Email</label>
                </div>
                <div className="field">
                    <Message  message={this.state.isValidEmail? "": "error email" } />
                </div>
                <div className="field">
                    <input id="" onChange={this.onChangePassword}/><label >Password</label>
                </div>
                <div className="field">
                    <Message message={this.state.isValidPassword ? "": ">=6 символов"} />
                </div>
                <div className="field checkbox">
                    <input id="" type="checkbox" onChange={this.onChangeDataCheckBox}/><label >Remember Me</label>
                </div>
                <div className="field_button">
                    <div>
                        <input className=""
                               type="button"
                               value="Login"
                               disabled={!(this.state.isValidEmail && this.state.isValidPassword)}
                               onClick={this.onLogin}/>
                    </div>
                </div>
            </div>
            </div>

        );
    }
}
