import { connect } from 'react-redux';
import  Registration from "../../Pages/Registration";
import {registrationUser} from '../../Redux/actions';


function mapStateToProps(state){


    return {

        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {

        registrationUser:(data) => dispatch(registrationUser(data)),


    };
}
const Index = connect(mapStateToProps, mapDispatchToProps)(Registration);


export default Index;