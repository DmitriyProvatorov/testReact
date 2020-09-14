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
        this.remove= this.remove.bind(this);
        this.update = this.update.bind(this);

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
    remove(index){
        this.setState({showModal:false}, function(){
        this.props.removeItem(index);
        });
    }
    update(index){

        this.setState({showModal:false});

        this.props.setUpdateIndex(index);
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
                              value="Update"
                        onClick={()=>this.update(this.props.index)}/>
                       <input className="button_modal"
                              type="button"
                              value="Delete"
                            onClick={()=>this.remove(this.props.index)}/>

                   </div>
               </div>

           </>

        );
    }
}
