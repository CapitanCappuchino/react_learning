import React, { Component } from 'react';
import styled from 'styled-components';

class LoadingPage extends Component{
    render(){
        return(
            <Element {...this.props}>
                Loading
                {this.props.children}
            </Element>
        );
    }
}

const Element = styled.div`

`;

export default LoadingPage;