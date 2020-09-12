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



            return (

                <div  style={{backgroundColor: this.props.message ? ' darksalmon': 'green'}} className="error_message">{this.props.message ? this.props.message : "valid"}</div>
                    );

        }



}
