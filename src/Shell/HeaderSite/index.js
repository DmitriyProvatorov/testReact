

import React, { Component } from 'react';
import './index.css';

// import { Select } from 'semantic-ui-react';
import {Header, Rating} from 'semantic-ui-react';
import {
    Icon,
    Image,
    Menu,
    Sidebar,
    Responsive, Dropdown,  Accordion
} from "semantic-ui-react";


import {Link, Redirect} from "react-router-dom";



 import MenuAuth from "./MenuAuth"
import DatePicker from "react-datepicker/es";
import axios from "axios";
axios.defaults.withCredentials = true;

//axios.defaults.headers.post['x-content-range'] = 'value'

//import DatePicker from "react-datepicker";

//import "react-datepicker/dist/react-datepicker.css";



const countryOptions =[{ key: 'af', value: 'af', flag: 'af', text: 'Afghanistan' }];



let COOCIE_NAME = 'test_cookie';









export default class Index extends Component{




    constructor(props) {
        super(props);
        this.state = {

            startDate: new Date(),
            visible: false,
            open: false,
            openGetlast: false,
            openGetRating: false,
            userData: {
                login: null,
                name : null
            },
            actionType: "",
            openType: false,
            openDate: false,
            openComents: false,
            openSort: false,
            error : 0,
            redirect : false



        };



        this.listUrls = ['login', 'registration', 'forget_password'];
        this.pagesUrls =  ['new_problem', 'new_program', 'new_question', 'new_discussion'];
        this.cabinetUrl = 'cabinet';

        this.exit = false;







        // this.handleToggle = this.handleToggle.bind(this);
        // this.handlePusher = this.handlePusher.bind(this);

    }


    componentDidUpdate(prevProps, prevState, snapshot) {

        let that = this;
        if(this.exit) {

            that.setState({redirect: false});
            this.exit = false;
        }




    }


    componentDidMount() {
        // фетч в модуль импортируемый какой будет получать this c модуля , адрес, параметры , а отображение ошибок это его личные методы
        // он же будет и прелоадер контролировать
        // здесь получаем личне данне постом и проверяя куку ставя данные какие будут получать данные с сервера и элементы меню будут отображаться


        let that = this;


        if(this.listUrls.includes(that.props.location.type) && this.props.user.login){

            that.setState({redirect: true})
        }

        if(this.pagesUrls.includes(that.props.location.service)){
            that.setState({redirect: true})
        }



        let appStorage = window.localStorage;




        axios.post("http://chistyj-gorod.in.ua:8090/ajax/login/getAuth",  {},
            { headers: {
            Authorization: appStorage.getItem(COOCIE_NAME)
        }} )
            .then(response => {




                if(response.data.error){
                    that.setState({
                        error: response.data.error
                    });

                    setTimeout(function(){
                        that.setState({
                            error: null
                        });
                    }, 2500);
                }
                else {

                    that.setState({
                        error: 0
                    });

                    if(response.data.login) {

                        that.props.enterUser({data :response.data})


                        setTimeout(function(){




                            if(that.listUrls.includes(that.props.location.type)){

                                that.setState({redirect: true});


                            }

                        }, 2500);
                    }
                    else{

                        console.log('redirect', that.props.location.type)

                        if(that.props.location.type === that.cabinetUrl){

                            that.setState({redirect: true});


                        }


                    }



                }


            })
            .catch(error => {

                that.setState({
                    error: 1

                });
                setTimeout(function(){
                    that.setState({
                        error: null
                    });
                }, 2500);
            });



        this.sendRequestGet();

    }


    componentWillMount(){

        // получить из адреса куку и поставить
    }


sendRequestGet (){

        let that = this;
        let zip = this.props.city.zip_code;

    axios.get(`http://chistyj-gorod.in.ua:8090/ajax/advertising/${zip}/all/` )
        .then(response => {

            // вызов экшена для смены стейта ? или нет здесь
            that.props.removeLoader();



            if(response.data.error){




            }
            else {

                that.props.changeAdvertisingInformation({data :response.data})
                // запись в редюсер
                // редюсер работает с стораджем

            }
        })


}



//<h2 style={this.props.location.pathname ? HeaderSite : ErrorMessage}>ToDo</h2>


    /*

    state = {
        visible: false
    };

     */


    checkPage = (pageName) =>{





        return pageName === this.props.location.typePage;


    };


    checkTypePage = () => {

        return 'none';


      //  return this.props.location.flags.showRatings ?   'block' : 'none';
    };


    checkTypePageFilters = () => {


        return 'none';

        return this.props.location.flags.showFilters ?   'block' : 'none';
    };

    handleType = (e, titleProps) => {

        this.setState({ openType: !this.state.openType })
    };

    handleDate = (e, titleProps) => {

        this.setState({ openDate: !this.state.openDate })
    };
    handleComents = (e, titleProps) => {

        this.setState({ openComents: !this.state.openComents })
    };

    handleSort = (e, titleProps) => {

        this.setState({ openSort: !this.state.openSort })
    };


    handlePusher = () => {


        const { visible } = this.state;

        if (visible) this.setState({ visible: false });
    };

    handleToggleOpened = (e) =>{



        if(this.state.open){
            this.setState({visible: false});
            this.setState({open: false});
        }
    };

    handleToggle = (e) =>{




        if(!this.state.visible){

            this.setState({visible: true});
            this.setState({open: true});
        }
        else{

            this.setState({open: false});
            this.setState({visible: false});
        }
    };

    handleClick = (e, titleProps) => {

        this.setState({ openGetlast: !this.state.openGetlast })
    };

    handleClickRating = (e, titleProps) => {

        console.log('open rating')

        this.setState({ openGetRating: !this.state.openGetRating })
    };



    handleExit= () => {

        let that = this;
        this.props.setLoader();

        let appStorage = window.localStorage;


        axios.post("http://chistyj-gorod.in.ua:8090/ajax/login/exit",  {},
            { headers: {
                Authorization: appStorage.getItem(COOCIE_NAME)
            }} )
            .then(response => {

                this.props.removeLoader();


                if(response.data.error){
                    that.setState({
                        error: response.data.error
                    });

                    setTimeout(function(){
                        that.setState({
                            error: null
                        });
                    }, 2500);
                }
                else {


                    that.setState({
                        error: 0
                    });


                    that.props.exitUser();


                    that.exit = true;

                    setTimeout(function(){

                        if(that.cabinetUrl === that.props.location.service) {

                            that.setState({redirect: true});



                        }

                    }, 100);
                }


            })
            .catch(error => {
                this.props.removeLoader();

                that.setState({
                    error: 1

                });
                setTimeout(function(){
                    that.setState({
                        error: null
                    });
                }, 2500);
            });

    };






    render() {

        if (this.state.redirect) {


            return (
                <>
                <Redirect to='/'/>
                    <header>

                        <Responsive {...Responsive.onlyMobile}>
                            <Sidebar.Pushable>
                                <Sidebar
                                    as={Menu}
                                    animation="overlay"
                                    icon="labeled"
                                    inverted
                                    vertical
                                    onClick={this.handleToggle}
                                    visible={this.state.visible}
                                >

                                    <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems`} active={this.checkPage('problems')}>
                                        Проблемы
                                    </Menu.Item>
                                    <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems_map`} active={this.checkPage('problems_map')}>
                                        Карта Проблем
                                    </Menu.Item>






                                    <MenuAuth state={this.props.user} location={this.props.location}
                                              ismobile={Responsive.onlyMobile} handleExit={this.handleExit}/>
                                </Sidebar>


                                <Sidebar.Pusher
                                    dimmed={this.state.visible}
                                    onClick={this.handleToggleOpened}

                                    style={{minHeight: "100vh"}}
                                >
                                    <Menu fixed="top" inverted>
                                        <Menu.Item as={Link} to='/'>
                                            <Image size="mini" src="http://localhost/icons/logo.png"/>
                                        </Menu.Item>
                                        <Menu.Item onClick={this.handleToggle}>
                                            <Icon name="sidebar"/>
                                        </Menu.Item>

                                    </Menu>

                                </Sidebar.Pusher>
                            </Sidebar.Pushable>
                        </Responsive>
                        <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                            <Menu fixed="top" inverted>
                                <Menu.Item as={Link} to='/'>
                                    <Image size="mini" src="http://localhost/icons/logo.png"/>
                                </Menu.Item>

                                <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems`} active={this.checkPage('problems')}>
                                    Проблемы
                                </Menu.Item>
                                <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems`} active={this.checkPage('problems_map')}>
                                    Карта Проблем
                                </Menu.Item>






                                <MenuAuth state={this.props.user} location={this.props.location}
                                          handleExit={this.handleExit}/>
                            </Menu>
                        </Responsive>
                        <div className="last" style={{display: this.checkTypePage()}}>
                            <Accordion>
                                <h1>Донецкая/ Мариуполь</h1>
                                <Accordion.Title active={this.state.openGetlast} index={0} onClick={this.handleClick}>
                                    <Icon name='dropdown'/>
                                    изменить
                                </Accordion.Title>


                                <Accordion.Content active={this.state.openGetlast}>

                                    <Dropdown placeholder='Населенный пункт' fluid search selection
                                              options={countryOptions}/>
                                </Accordion.Content>
                            </Accordion>
                            <div className='rating'>
                                <Rating icon='star' defaultRating={2} maxRating={5}/>
                                не активные пока , но должны видеть что будут
                                <Accordion>
                                    <Accordion.Title index={1} onClick={this.handleClickRating}>
                                        <Icon name='dropdown'/>
                                        Подробнее
                                    </Accordion.Title>
                                    <Accordion.Content active={this.state.openGetRating}>
                                        По разделам показать
                                        скорость реагирования
                                        качество решений
                                    </Accordion.Content>
                                </Accordion>
                            </div>
                        </div>

                        <div className="filters" style={{display: this.checkTypePageFilters()}}>
                            <Accordion>
                                <Accordion.Title active={this.state.openSort} index={0} onClick={this.handleSort}>
                                    <Header as='h4'>Тип: Все | За период: Весь | Количество коментариев: Не важно</Header>

                                    <Icon name='dropdown'/>
                                    Изменить
                                </Accordion.Title>
                                <Accordion.Content active={this.state.openSort}>

                                    <Accordion>
                                        <Accordion.Title active={this.state.openType} index={0} onClick={this.handleType}>
                                            <Icon name='dropdown'/>
                                            Сортировать по типу
                                        </Accordion.Title>
                                        <Accordion.Content active={this.state.openType}>
                                            <div className='sort'>
                                                <Dropdown placeholder='Область' fluid search selection
                                                          options={countryOptions}/>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Title active={this.state.openDate} index={0} onClick={this.handleDate}>
                                            <Icon name='dropdown'/>
                                            Сортировать по датам
                                        </Accordion.Title>
                                        <Accordion.Content active={this.state.openDate}>
                                            C: <Icon name='calendar alternate outline' size='large'/>
                                            <DatePicker disabled
                                                        selected={this.state.date}
                                                        onSelect={this.handleSelect} //when day is clicked
                                                        onChange={this.handleChange} //only when value has changed
                                            />
                                            По: <Icon name='calendar alternate outline' size='large'/>

                                            <DatePicker disabled
                                                        selected={this.state.date}
                                                        onSelect={this.handleSelect} //when day is clicked
                                                        onChange={this.handleChange} //only when value has changed
                                            />
                                        </Accordion.Content>
                                    </Accordion>
                                    <Accordion>
                                        <Accordion.Title active={this.state.openComents} index={0}
                                                         onClick={this.handleComents}>
                                            <Icon name='dropdown'/>
                                            По количеству комментариев
                                        </Accordion.Title>
                                        <Accordion.Content active={this.state.openComents}>
                                            <div className='sort'>
                                                <Dropdown placeholder='Область' fluid search selection
                                                          options={countryOptions}/>
                                            </div>
                                        </Accordion.Content>
                                    </Accordion>
                                </Accordion.Content>
                            </Accordion>
                        </div>

                    </header>
                </>)
        } else {


            return (


                <header>

                    <Responsive {...Responsive.onlyMobile}>
                        <Sidebar.Pushable>
                            <Sidebar
                                as={Menu}
                                animation="overlay"
                                icon="labeled"
                                inverted
                                vertical
                                onClick={this.handleToggle}
                                visible={this.state.visible}
                            >

                                <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems`} active={this.checkPage('problems')}>
                                    Проблемы
                                </Menu.Item>
                                <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems_map`} active={this.checkPage('problems_map')}>
                                    Карта Проблем
                                </Menu.Item>








                                <MenuAuth state={this.props.user} location={this.props.location}
                                          ismobile={Responsive.onlyMobile} handleExit={this.handleExit}/>
                            </Sidebar>


                            <Sidebar.Pusher
                                dimmed={this.state.visible}
                                onClick={this.handleToggleOpened}

                                style={{minHeight: "100vh"}}
                            >
                                <Menu fixed="top" inverted>
                                    <Menu.Item as={Link} to='/'>
                                        <Image size="mini" src="http://localhost/icons/logo.png"/>
                                    </Menu.Item>
                                    <Menu.Item onClick={this.handleToggle}>
                                        <Icon name="sidebar"/>
                                    </Menu.Item>

                                </Menu>

                            </Sidebar.Pusher>
                        </Sidebar.Pushable>
                    </Responsive>
                    <Responsive minWidth={Responsive.onlyTablet.minWidth}>
                        <Menu fixed="top" inverted>
                            <Menu.Item as={Link} to='/'>
                                <Image size="mini" src="http://localhost/icons/logo.png"/>
                            </Menu.Item>

                            <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems`} active={this.checkPage('problems')}>
                                Проблемы
                            </Menu.Item>
                            <Menu.Item as={Link} to={`/${this.props.city.zip_code}/problems_map`} active={this.checkPage('problems_map')}>
                                Карта Проблем
                            </Menu.Item>





                            <MenuAuth state={this.props.user} location={this.props.location}
                                      handleExit={this.handleExit}/>
                        </Menu>
                    </Responsive>
                    <div className="last" style={{display: this.checkTypePage()}}>
                        <Accordion>
                            <h1>Донецкая/ Мариуполь</h1>
                            <Accordion.Title active={this.state.openGetlast} index={0} onClick={this.handleClick}>
                                <Icon name='dropdown'/>
                                изменить
                            </Accordion.Title>


                            <Accordion.Content active={this.state.openGetlast}>

                                <Dropdown placeholder='Населенный пункт' fluid search selection
                                          options={countryOptions}/>
                            </Accordion.Content>
                        </Accordion>
                        <div className='rating'>
                            <Rating icon='star' defaultRating={2} maxRating={5}/>
                            не активные пока , но должны видеть что будут
                            <Accordion>
                                <Accordion.Title index={1} onClick={this.handleClickRating}>
                                    <Icon name='dropdown'/>
                                    Подробнее
                                </Accordion.Title>
                                <Accordion.Content active={this.state.openGetRating}>
                                    По разделам показать
                                    скорость реагирования
                                    качество решений
                                </Accordion.Content>
                            </Accordion>
                        </div>
                    </div>

                    <div className="filters" style={{display: this.checkTypePageFilters()}}>
                        <Accordion>
                            <Accordion.Title active={this.state.openSort} index={0} onClick={this.handleSort}>
                                <Header as='h4'>Тип: Все | За период: Весь | Количество коментариев: Не важно</Header>

                                <Icon name='dropdown'/>
                                Изменить
                            </Accordion.Title>
                            <Accordion.Content active={this.state.openSort}>

                                <Accordion>
                                    <Accordion.Title active={this.state.openType} index={0} onClick={this.handleType}>
                                        <Icon name='dropdown'/>
                                        Сортировать по типу
                                    </Accordion.Title>
                                    <Accordion.Content active={this.state.openType}>
                                        <div className='sort'>
                                            <Dropdown placeholder='Область' fluid search selection
                                                      options={countryOptions}/>
                                        </div>
                                    </Accordion.Content>
                                </Accordion>
                                <Accordion>
                                    <Accordion.Title active={this.state.openDate} index={0} onClick={this.handleDate}>
                                        <Icon name='dropdown'/>
                                        Сортировать по датам
                                    </Accordion.Title>
                                    <Accordion.Content active={this.state.openDate}>
                                        C: <Icon name='calendar alternate outline' size='large'/>
                                        <DatePicker disabled
                                                    selected={this.state.date}
                                                    onSelect={this.handleSelect} //when day is clicked
                                                    onChange={this.handleChange} //only when value has changed
                                        />
                                        По: <Icon name='calendar alternate outline' size='large'/>

                                        <DatePicker disabled
                                                    selected={this.state.date}
                                                    onSelect={this.handleSelect} //when day is clicked
                                                    onChange={this.handleChange} //only when value has changed
                                        />
                                    </Accordion.Content>
                                </Accordion>
                                <Accordion>
                                    <Accordion.Title active={this.state.openComents} index={0}
                                                     onClick={this.handleComents}>
                                        <Icon name='dropdown'/>
                                        По количеству комментариев
                                    </Accordion.Title>
                                    <Accordion.Content active={this.state.openComents}>
                                        <div className='sort'>
                                            <Dropdown placeholder='Область' fluid search selection
                                                      options={countryOptions}/>
                                        </div>
                                    </Accordion.Content>
                                </Accordion>
                            </Accordion.Content>
                        </Accordion>
                    </div>

                </header>
            );
        }
    }


}
