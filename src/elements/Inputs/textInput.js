import React, { Component } from 'react';
import styled               from 'styled-components';

import * as styles          from '../../styles/consts';

class TextInput extends Component{
    render(){
        return(
            <Element  {...this.props}>
                {this.props.children}
            </Element>
        );
    }
}

const Element = styled.input`
    border-radius:    ${styles.defaultBorderRadius};
    border-color:     ${styles.main};
    border-style:     solid;
    font-family:      ${styles.defaultFontFamily};
    font-size:        ${styles.defaultFontSize};
    padding:          5px 8px;
    background-color: ${styles.mainLight};
    color:            ${styles.gray};
`;

export default TextInput;