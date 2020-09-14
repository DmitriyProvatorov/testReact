import React, { Component } from 'react';
import './index.css'

import Item from "../../Shell/Item";
import AddUpdateItem from "../../Shell/AddUpdateItem";


export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            items: [{id: 1, name: "Name"}, {id: 2, name: "Name"}, {id: 3, name: "Name"}],
            updateItemIndex: false

        };
        console.log(this.props);
        this.selectAll = this.selectAll.bind(this);
        this.changeSelect = this.changeSelect.bind(this);
        this.removeItems = this.removeItems.bind(this);
        this.removeItem = this.removeItem.bind(this);
        this.addItem =this.addItem.bind(this);
        this.workWithItem = this.workWithItem.bind(this);
        this.setUpdateItemIndex = this.setUpdateItemIndex.bind(this);
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

    workWithItem( name){
        let items= this.state.items;

        if(this.state.updateItemIndex !== false){
            items[this.state.updateItemIndex].name= name;
        }
        else{
           items.push({id:items.length, name})
        }
        this.setState({items,addItem: false, updateItem: false, updateItemIndex: false});
    }

    removeItem(index){
        let items= this.state.items;
        items.splice(index,1);
        this.setState({items});
    }
    removeItems(){
        let items= this.state.items;
        let _items = [];

        items.forEach(function(item){
            if(!item.selected ){
                _items.push(item);
            }
        });

        this.setState({items: _items});

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
    addItem(){
        this.setState({addItem: true})
    }
    setUpdateItemIndex(index){
        this.setState({updateItemIndex: index, updateItem: true})
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
                <Item item={item} key={index + '_item'} index={index} change={this.changeSelect}
                removeItem={this.removeItem} setUpdateIndex={this.setUpdateItemIndex}/>
                )}
                <div className="field_buttons">
                    <input className="items_button"
                           type="button"
                           value="Add New Item"
                            onClick={this.addItem}/>
                    <input className="items_button"
                           type="button"
                           value="Delete selected items"
                           onClick={this.removeItems}
                    />
                </div>
            </div>

            <AddUpdateItem  show={this.state.addItem || this.state.updateItem } callback={this.workWithItem}/>

            </div>

        );
    }
}