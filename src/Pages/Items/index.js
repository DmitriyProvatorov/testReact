import React, { Component } from 'react';
import './index.css'
import Message from "../../Shell/Message";
import Item from "../../Shell/Item";
import AddUpdateItem from "../../Shell/AddUpdateItem";

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
                <div className="field_buttons">
                    <input className="items_button"
                           type="button"
                           value="Add New Item"/>
                    <input className="items_button"
                           type="button"
                           value="Delete selected items"/>
                </div>
            </div>

            <AddUpdateItem />

            </div>

        );
    }
}