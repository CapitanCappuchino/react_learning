import React, { Component } from 'react';
import styled from 'styled-components';

import LoginForm from './loginForm';

class Auth extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Element>
                <LoginForm 
                    auth={this.props.auth}
                    login={this.props.login}
                />   
            </Element>
        );
    }
}

const Element = styled.div``;

export default Auth;