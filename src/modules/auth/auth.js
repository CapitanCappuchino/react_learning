import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import LoginForm            from './loginForm';

class Auth extends Component{
    render(){
        return(
            <div>
                <LoginForm 
                    auth={this.props.auth}
                    login={this.props.login}
                />   
            </div>
        );
    }
}

Auth.PropTypes = {
    auth: PropTypes.shape({
        id: PropTypes.string,
        error: PropTypes.string,
        isFetchng: PropTypes.bool,
        isAutintificated: PropTypes.bool
    }),
    login: PropTypes.func
};

export default Auth;