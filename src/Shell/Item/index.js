import React, { Component } from 'react';
import Message from '../../Shell/Message';
import './index.css';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showModal : false
        };
        this.selectItem = this.selectItem.bind(this);
        this.showModal = this.showModal.bind(this);

    }
    componentWillReceiveProps(nextProps, nextState) {

    }
    selectItem(event){

        this.props.change(this.props.index, event.target.checked);

    }
    showModal(){
        let showModal = !this.state.showModal;
        this.setState({showModal});
    }

    render() {
        return(
           <>

               <div className="item_field">
                   <input className='item_checkbox' type="checkbox"  name={this.props.item.id +'_name'} checked={this.props.item.selected} onChange={this.selectItem}/><label >{this.props.item.id}</label>
                   <div className="item_name">{this.props.item.name}</div>
                   <input className="button_item"
                          type="button"
                          value="v"
                        onClick={this.showModal}/>
                   <div className="item_modal_window" style={{display: this.state.showModal ? '' : 'none'}}>
                       <input className="button_modal"
                              type="button"
                              value="Update"/>
                       <input className="button_modal"
                              type="button"
                              value="Delete"/>

                   </div>
               </div>

           </>

        );
    }
}
