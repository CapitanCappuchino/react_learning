import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';

import { login }            from '../../redux/actions/authAction';
import Auth                 from './auth';

class AuthContainer extends Component{
    render(){
        return(
            <Auth 
                auth={this.props.auth}
                login={this.props.login}
            />
        );
    }
}

AuthContainer.PropTypes = {
    auth: PropTypes.shape({
        id: PropTypes.string,
        error: PropTypes.string,
        isFetchng: PropTypes.bool,
        isAutintificated: PropTypes.bool
    }),
    login: PropTypes.func
};

const mapStateToPros = (state) => ({
    auth: state.auth
});

const mapDispatchToProps = (dispatch) => ({
    login: (user) => dispatch(login(user))
});

export default connect(mapStateToPros, mapDispatchToProps)(AuthContainer);
