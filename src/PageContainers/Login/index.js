import { connect } from 'react-redux';
import  Login from "../../Pages/Login";
import {loginUser} from '../../Redux/actions';


function mapStateToProps(state){


    return {

        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loginUser:(data) => dispatch(loginUser(data)),


    };
}
const Index = connect(mapStateToProps, mapDispatchToProps)(Login);


export default Index;