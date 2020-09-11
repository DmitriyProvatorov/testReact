import React, { Component } from 'react';


import './index.css';
import  LoginContainer from '../PageContainers/Login';
import  RegistrationContainer from '../PageContainers/Registration';
import ItemsCOntainer from '../PageContainers/Items';
import {Switch  , Route , Redirect} from 'react-router-dom';














export default class Index extends Component {


    constructor(props) {
        super(props);
        this.state = {



        };



    };







    render() {
        return (
            <main>
                <div>
                    <Switch>
                        <Route path='/registration' component={RegistrationContainer}/>
                        <Route path='/login' component={LoginContainer}/>
                        <Route path='/items' component={ItemsCOntainer}/>
                        <Route path='/' component={ItemsCOntainer}/>
                    </Switch>
                </div>
            </main>
        )
    }

}
