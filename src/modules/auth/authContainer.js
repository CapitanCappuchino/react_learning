import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../../redux/actions/authAction';

import Auth from './auth';

class AuthContainer extends Component{
    render(){
        return(
            <Auth 
                loginRequest={this.props.loginRequest}
                login={this.props.login}
            />
        );
    }
}

const mapStateToPros = (state) => {
    console.log('STATE', state);
    return{
        loginRequest: state.login
    }
};

const mapDispatchToProps = (dispatch) => {
    return{
        login: (user, headers) => dispatch(login(user, headers))
    }
}

export default connect(mapStateToPros, mapDispatchToProps)(AuthContainer);
