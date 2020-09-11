import { connect } from 'react-redux';
import  Items from "../../Pages/Items";
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
const Index = connect(mapStateToProps, mapDispatchToProps)(Items);


export default Index;