import React, { Component } from 'react';
import { connect }          from 'react-redux';

import Home                 from './home';

class HomeContainer extends Component{
    render(){
        return(
            <Home />
        );
    }
}

export default  connect(null, null)(HomeContainer);