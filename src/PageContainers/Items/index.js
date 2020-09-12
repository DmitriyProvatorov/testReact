import { connect } from 'react-redux';
import  Items from "../../Pages/Items";



function mapStateToProps(state){

    console.log(state.user)

    return {
        user: state.user
    };
}

function mapDispatchToProps(dispatch) {
    return {};
}
const Index = connect(mapStateToProps, mapDispatchToProps)(Items);


export default Index;