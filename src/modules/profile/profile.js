import React, { Component } from 'react';
import styled               from 'styled-components';
import PropTypes            from 'prop-types';

import LoadingPage          from '../../pages/loadingPage';
import LanguageList         from './languageList';
import SocialList           from './socialList';
import Error                from '../../elements/resultDivs/error';

class Profile extends Component{
    componentDidMount = () => {
        this.props.fetchProfile();
    }

    render(){
        const { profile } = this.props;
        if(profile.error){
            return(
                <Error error={profile.error} />
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

Profile.PropTypes = {
    profile: PropTypes.shape({
        data: PropTypes.object,
        error: PropTypes.string,
        isFetching: PropTypes.bool,
        isFound: PropTypes.bool
    }),
    fetchProfile: PropTypes.func
};

const Element = styled.div`
    margin: 10px;
`;

export default Profile;