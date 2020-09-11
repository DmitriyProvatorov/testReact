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
           <>
               <div className="item_field">
                   <input className='item_checkbox' type="checkbox"/><label >id</label>
                   <input className="button_item"
                          type="button"
                          value="v"/>
                   <div className="item_modal_window">
                       <input className="button_modal"
                              type="button"
                              value="Update"/>
                       <input className="button_modal"
                              type="button"
                              value="Delete"/>

                   </div>
               </div>
               <div className="item_field">
                   <input className='item_checkbox' type="checkbox"/><label >id</label>
                   <input className="button_item"
                          type="button"
                          value="v"/>
               </div>
               <div className="item_field">
                   <input className='item_checkbox' type="checkbox"/><label >id</label>
                   <input className="button_item"
                          type="button"
                          value="v"/>
               </div>
           </>

        );
    }
}
