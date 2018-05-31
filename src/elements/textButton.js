import React, { Component } from 'react';
import styled from 'styled-components';

import * as styles from '../styles/consts';

class TextButton extends Component{
    
    render(){
        return(
            <Element {...this.props}>
                { this.props.children }
            </Element>
        );
    }
}

const Element = styled.button`
    border-color: transparent;
    background-color: transparent;
    color: ${styles.mainLight};
`;


export default TextButton;