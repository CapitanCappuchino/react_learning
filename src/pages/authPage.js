import React, { Component } from 'react';
import styled from 'styled-components';

import AuthContainer from '../modules/auth/authContainer';

class AuthPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <AuthContainer />
        );
    }
}

export default AuthPage;