import React, { Component } from 'react';
import { connect } from 'react-redux';
import News from './news';

class NewsContainer extends Component{
    render(){
        return(
            <News />
        );
    }
}

export default connect(null, null)(NewsContainer);
