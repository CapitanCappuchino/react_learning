import React, { Component } from 'react';
import styled from 'styled-components';

import HomeContainer from '../modules/home/homeContainer';

class HomePage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <HomeContainer />
        );
    }
}

export default HomePage;