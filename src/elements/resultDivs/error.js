import React, { Component } from 'react';
import styled               from 'styled-components';
import PropTypes            from 'prop-types';

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

Error.PropTypes = {
    error: PropTypes.string
};

export default Error;