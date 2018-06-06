import React, { Component } from 'react';
import styled               from 'styled-components';

import { errors }           from '../../helpers/API';

class Error extends Component{
    render(){
        const { error } = this.props;
        return(
            <Element {...this.props}>
                { error ? errors[error] : '' }
            </Element>
        );
    }
}

const Element = styled.div`
    margin-bottom: 10px;
`;

export default Error;