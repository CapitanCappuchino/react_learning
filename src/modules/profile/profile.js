import React, { Component } from 'react';
import styled               from 'styled-components';

import LoadingPage          from '../../pages/loadingPage';
import LanguageList         from './languageList';
import SocialList           from './socialList';

class Profile extends Component{
    componentDidMount = () => {
        this.props.fetchProfile();
    }

    render(){
        const { profile } = this.props;
        if(profile.error){
            return(
                <Element>
                    Sorry, but user not found
                </Element>
            );
        } else if (profile.isFound){
            const data = profile.data.data;
            return(
                <Element>
                    <div>City: {data.city}</div>
                    <div>
                        Languages: 
                        <LanguageList languages={data.languages} />
                    </div>
                    <div>
                        Links:
                        <SocialList social={data.social} />
                    </div>
                </Element>
            );
        } else {
            return(
                <LoadingPage />
            );
        }
    }
}

const Element = styled.div`
    margin: 10px;
`;

export default Profile;