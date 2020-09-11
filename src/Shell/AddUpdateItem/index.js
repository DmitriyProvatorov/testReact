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

            <div className="add_item_modal_window">
                <h2>Add/Update Item</h2>
                <div className="field">
                    <input id="id1"/><label >Name</label>
                </div>
                <div className="field">
                    <Message/>
                </div>

                <div className="field">

                    <input className=""
                           type="button"
                           value="Add/Update"/>

                </div>
            </div>
        );
    }
}
