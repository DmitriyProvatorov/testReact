import React, { Component } from 'react';
import './index.css';
import {Link, Redirect} from "react-router-dom";
export default class Index extends Component{




    constructor(props) {
        super(props);
        this.state = {





        };















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
                        <div><Link to="/login">Login</Link></div>
                        <div><Link to="/registration">Registration</Link></div>
                        <div className='active'><Link to="/items">Items</Link></div>
                    </nav>


                </header>
            );
        }
    }


}
