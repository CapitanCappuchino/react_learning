import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import { connect }          from 'react-redux';

import * as styles          from '../../../styles/consts';
import TextButton           from '../../../elements/Buttons/textButton';
import RoundedButton        from '../../../elements/Buttons/roundedButton';
import { logout }           from '../../../redux/actions/authAction';

class DefaultHeader extends Component{
    constructor(props){
        super(props);

        this.state = {
            isAutintificated: this.props.auth.isAutintificated
        }

        this.handleLogoutButton = this.handleLogoutButton.bind(this);
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.auth.isAutintificated
            && !prevState.isAutintificated){
                return{
                    isAutintificated: true
                }
        } else {
            return null;
        }
    }

    handleLogoutButton = (e) => {
        if(localStorage.getItem('isAutintificated') === 'true'){
            localStorage.clear();
            this.setState({
                isAutintificated: false
            });
            this.props.logout();
        }
    }

    render(){
        const isAutintificated = this.state.isAutintificated;
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
                    text={isAutintificated
                        ? <StyledLink inverted to='/'>LOGOUT</StyledLink>
                        : <StyledLink inverted to='/login'>LOGIN</StyledLink>
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

const mapStateToProps = (state) => {
    return{
        auth: state.auth
    }
}

const mapDispatchToProps = (dispath) => {
    return{
        logout: () => dispath(logout())
    }
}

const Header = withRouter(DefaultHeader);
export default connect(mapStateToProps, mapDispatchToProps)(Header);
