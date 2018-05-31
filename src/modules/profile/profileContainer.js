import React, { Component } from 'react';
import { connect } from 'react-redux';
import Profile from './profile';

class ProfileContainer extends Component{
    render(){
        return(
            <Profile />
        );
    }
}

export default  connect(null, null)(ProfileContainer);
