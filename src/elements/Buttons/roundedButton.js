import React, { Component } from 'react';
import styled               from 'styled-components';
import PropTypes            from 'prop-types';

import * as styles          from '../../styles/consts';

class RoundedButton extends Component{
    render(){
        return(
            <Element {...this.props}>
                <ButtonText>
                    { this.props.text }
                    { this.props.children }
                </ButtonText>
            </Element>
        );
    }
}

const Element = styled.button`
    background-color: ${props => props.dark
        ? styles.main
        : styles.mainLight};
    border-radius: ${styles.defaultBorderRadius};
    border-color: ${props => props.dark
        ? styles.main
        : styles.mainLight};
    border-style: solid;
    margin: 10px;
`;

const ButtonText = styled.span`
    color: ${props => props.dark
        ? styles.mainLight
        : styles.main};
    font-family:   ${styles.defaultFontFamily};
    font-size:     ${styles.defaultFontSize};
    padding: 5px;
`;

RoundedButton.PropTypes = {
    text: PropTypes.string
};

export default RoundedButton;

