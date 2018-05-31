import React, { Component } from 'react';
import styled from 'styled-components';

import ProfileContainer from '../modules/profile/profileContainer';

class ProfilePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <ProfileContainer />
        );
    }
}

export default ProfilePage;