
import { connect } from 'react-redux';


import HeaderSite from '../../Shell/HeaderSite';
import {enterUser, exitUser, removeLoader, setLoader, changePage, changeAdvertisingInformation} from '../../Redux/actions';

function mapStateToProps(state){



    return {
        location: state.location,
        user: state.user,
        city: state.city,
        advertising: state.advertising

    };
}

function mapDispatchToProps(dispatch) {
    return {

        enterUser:(data) => dispatch(enterUser(data)),
        exitUser: () => dispatch(exitUser()),
        setLoader: () => dispatch(setLoader()),
        removeLoader: () => dispatch(removeLoader()),
        changeAdvertisingInformation: (data) => dispatch( changeAdvertisingInformation(data))



    };
}
const Index = connect(mapStateToProps, mapDispatchToProps)(HeaderSite);


export default Index;
