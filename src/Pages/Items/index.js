import React, { Component } from 'react';
import './index.css'
import Message from "../../Shell/Message";
import Item from "../../Shell/Item"

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return(
            <div>
            <div className='items_container'>
                <h2>Items list</h2>
                <div className="field_checkbox">
                    <input className="item_checkbox" type="checkbox"/><label >Select All</label>
                </div>
                 //Итератор сюда
                <Item/>
                <div className="field">
                    <input className="items_button"
                           type="button"
                           value="Add New Item"/>
                    <input className="items_button"
                           type="button"
                           value="Delete selected items"/>
                </div>
            </div>

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

            </div>

        );
    }
}