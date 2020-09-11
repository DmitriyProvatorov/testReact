import { connect } from 'react-redux';
import  Registration from "../../Pages/Registration";
import {changePage, enterUser, removeLoader, setLoader} from '../../Redux/actions';


function mapStateToProps(state){


    return {

        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {


        changePage: location => dispatch(changePage(location)),
        enterUser:(data) => dispatch(enterUser(data)),
        setLoader: () => dispatch(setLoader()),
        removeLoader: () => dispatch(removeLoader())

    };
}
const Index = connect(mapStateToProps, mapDispatchToProps)(Registration);


export default Index;