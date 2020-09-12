import React, { Component } from 'react';
import './index.css';
import {NavLink, Redirect} from "react-router-dom";
export default class Index extends Component {


    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }

    render() {

        if (this.state.redirect) {


            return (
                <>
                <Redirect to='/'/>



                </>)
        } else {


            return (


                <header>
                    <nav className="flex-container">
                        <div><NavLink  activeStyle={{ color: 'red' }} to="/login">Login</NavLink></div>
                        <div><NavLink  activeStyle={{ color: 'red' }} to="/registration">Registration</NavLink></div>
                        <div className='active'><NavLink  activeStyle={{ color: 'red' }} to="/items">Items</NavLink></div>
                    </nav>


                </header>
            );
        }
    }


}
