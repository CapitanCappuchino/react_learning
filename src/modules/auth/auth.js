import React, { Component } from 'react';

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

export default Auth;