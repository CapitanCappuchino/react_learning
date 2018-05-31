import React, { Component } from 'react';
import styled from 'styled-components';

import * as styles from '../styles/consts';

class RoundedButton extends Component{
    render(){
        return(
            <Element {...this.props}>
                { this.props.text }
                {this.props.children}
            </Element>
        );
    }
}

export default RoundedButton;

const Element = styled.button`
    background-color: ${props => props.dark
        ? styles.main
        : styles.mainLight};
    border-radius: ${styles.defaultBorderRadius};
    border-color: ${props => props.dark
        ? styles.main
        : styles.mainLight};
    border-style: solid;
    color: ${props => props.dark
        ? styles.mainLight
        : styles.main};

    margin: 5px;
`;