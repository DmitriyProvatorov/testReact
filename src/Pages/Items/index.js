import React, { Component } from 'react';
import './index.css'

import Item from "../../Shell/Item";
import AddUpdateItem from "../../Shell/AddUpdateItem";

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [{id: 1, name: "Name"}, {id: 2, name: "Name"}, {id: 3, name: "Name"}]

        };
        console.log(this.props);
        this.selectAll = this.selectAll.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
    }

    changeSelect(index, checked){
        let items= this.state.items;
        if(checked){
            items[index ].selected = true;
        }
        else {
            delete items[index].selected;
        }
        this.setState({items});
    }
    selectAll(event){
        let items= this.state.items;
      if(event.target.checked){
        items.forEach(function(item){
            item.selected = true;
        });
      }
      else{
          items.forEach(function(item){
             delete item.selected;
          });
      }
      this.setState({items});
    }
    render() {
        return(
            <div>
            <div className='items_container'>
                <h2>Items list</h2>
                <div className="field_checkbox">
                    <input className="item_checkbox" type="checkbox" onChange={this.selectAll}/><label >Select All</label>
                </div>

                {this.state.items.map((item, index) =>
                <Item item={item} key={index + '_item'} index={index} change={this.changeSelect}/>
                )};
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