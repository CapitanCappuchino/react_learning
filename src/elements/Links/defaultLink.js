import React, { Component } from 'react';
import styled               from 'styled-components';
import { Link }             from 'react-router-dom';

import * as styles          from '../../styles/consts';

class DefaultLink extends Component{
    render(){
        return(
            <Element {...this.props}>
                {this.props.children}
            </Element>
        );
    }
}

const Element = styled(Link)`
    text-decoration: none;
    color: ${props => props.inverted 
        ? styles.main
        : styles.mainLight};
`;

export default DefaultLink;