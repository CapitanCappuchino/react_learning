import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import LoginForm            from './loginForm';

class Auth extends Component{
    constructor(props){
        super(props);

        this.submitForm = this.submitForm.bind(this);
    }

    submitForm = (user) => {
        if(!user.email || !user.password){
            alert('Please input items');
        } else {
            this.props.login(user)
        }
    };

    render(){
        return(
            <div>
                <LoginForm 
                    auth={this.props.auth}
                    submitForm={this.submitForm}
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