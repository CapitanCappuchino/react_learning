import React, { Component } from 'react';
import styled               from 'styled-components';

import LoadingPage          from '../../pages/loadingPage';
import LanguageList         from './languageList';
import SocialList           from './socialList';

class Profile extends Component{
    constructor(props){
        super(props);

        this.state = {
            isFetching: this.props.profile.isFetching,
            //if user was found
            isFetched: false,
            //if user wasn`t found
            isErrored: false
        }
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.profile.data && !prevState.isFetched){
            return{
                isFetched: true
            }  
        } else if(nextProps.profile.error && !prevState.isErrored){
            return{
                isErrored: true
            }
        } else {
            return null;
        }
    }

    componentDidMount = () => {
        this.props.fetchProfile();
    }

    render(){
        if(this.state.isErrored){
            return(
                <Element>
                    Sorry, but user not found
                </Element>
            );
        } else if (this.state.isFetched){
            const data = this.props.profile.data.data;
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