import React, { Component } from 'react';
import styled               from 'styled-components';
import PropTypes            from 'prop-types';

class SocialList extends Component{
    render(){
        const social = this.props.social;
        const SocialItems = social.map(item => 
            <SocialItem
                key={item.label}>
                
                <a href={item.link} target="blank">
                    <img 
                        src={require('../../styles/assets/socialLogo/' + item.label + '.png')} 
                        height="50px"
                        width="50px"
                        alt=""/>
                </a>
            </SocialItem>)
        return(
            <div>{SocialItems}</div>
        );
    }
}

SocialList.PropTypes = {
    social: PropTypes.array
};

const SocialItem = styled.span`
    margin: 5px;
`;

export default SocialList;