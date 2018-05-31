import React, { Component } from 'react';
import styled from 'styled-components';

import NewsContainer from '../modules/news/newsContainer';

class NewsPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <NewsContainer />
        );
    }
}

export default NewsPage;