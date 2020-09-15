import React, { Component } from 'react';
import Message from '../../Shell/Message';
import './index.css';
import { CSSTransition } from 'react-transition-group';

export default class Index extends Component{
    constructor(props) {
        super(props);
        this.state = {
            name: "",
            isValidName: false
        };

        this.onChangeName = this.onChangeName.bind(this);
        this.send = this.send.bind(this);
    }
    componentWillMount() {
        this.state.name="";
    }
    componentDidMount() {
        /*
        костылил когда примеры из доки не работали и ответы на стеке
        let _block = document.querySelector(".add_item_modal_window");

        setTimeout(function(){
            _block.style.opacity = 1;
        }, 3000)

         */
    }

    onChangeName(event, data) {
        //TODO методы валидации общие с клиентом у сервера - вынести их в одну подключаемую возвращающую тру или фолс
        let name = event.target.value;
        const Name_REG = /(^[a-z]+$)/;
        this.setState({
            isValidName: Name_REG.test(name),
            name
        })
    }

    send(){
        this.props.callback(this.state.name);
        this.setState({
            name: "",
            isValidName: false
        });
    }

    render() {
        return(

            <div className={'background'} style={{display: this.props.show ? 'flex' : 'none'}}>
                <CSSTransition in={this.props.show} timeout={2000} classNames="my-node">
                    <div className={"add_item_modal_window"}   >
                        <h2>Add/Update Item</h2>
                        <div className="field">
                            <input id=""  onChange={this.onChangeName} value={this.state.name}/><label >Name</label>
                        </div>
                        <div className="field">
                            <Message message={this.state.isValidName ? "": "a-z"}/>
                        </div>

                        <div className="field">

                            <input className=""
                                   type="button"
                                   value="Add/Update"
                                   disabled={!this.state.isValidName}
                                onClick={this.send}/>

                        </div>
                    </div>
                </CSSTransition>


            </div>

        );
    }
}
