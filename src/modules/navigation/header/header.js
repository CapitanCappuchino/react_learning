import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';

import * as styles from '../../../styles/consts';
import TextButton from '../../../elements/textButton';
import RoundedButton from '../../../elements/roundedButton';

class DefaultHeader extends Component{
    constructor(props){
        super(props);

        this.state = {
            isAutintificated: localStorage.getItem('isAutintificated')
        }

        this.handleLogoutButton = this.handleLogoutButton.bind(this);
    }

    handleLogoutButton = (e) => {
        if(localStorage.getItem('isAutintificated') === 'true'){
            localStorage.clear();
            this.setState({
                isAutintificated: 'false'
            });
        }
    }

    render(){
        const isAutintificated = localStorage.getItem('isAutintificated');
        return(
            <Element>
                <TextButton>
                    <StyledLink to='/'>
                        HOME
                    </StyledLink>
                </TextButton>
                <TextButton>
                    <StyledLink to='/profile'>
                        PROFILE
                    </StyledLink>
                </TextButton>
                <TextButton>
                    <StyledLink to='/news'>
                        NEWS
                    </StyledLink>
                </TextButton>
                <RoundedButton
                    onClick={this.handleLogoutButton}
                    text={isAutintificated === 'true'
                        ? <StyledLink inverted to='/'>LOG OUT</StyledLink>
                        : <StyledLink inverted to='/login'>LOG IN</StyledLink>
                    }>
                </RoundedButton>
            </Element>
        );
    }
}

const Element = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: ${styles.main};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.inverted 
        ? styles.main
        : styles.mainLight};
`;

export default withRouter(DefaultHeader);
