import React, { Component } from 'react';
import styled               from 'styled-components';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            isAuthed: false,
            isFetching: false,
            isFetched: false
        }
    }

    render(){
        if(this.state.isFetching){
            return(
                <Element>
                    ...Loading...
                </Element>
            );
        } else 
        return(
            <Element>
                Profile
            </Element>
        );
    }
}

const Element = styled.div``;

export default Profile;