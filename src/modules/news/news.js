import React, { Component } from 'react';
import styled               from 'styled-components';

import LoadingPage          from '../../pages/loadingPage';
import ItemList             from './ItemList';

class News extends Component{
    componentDidMount = () => {
        this.props.fetchNews();
    }

    render(){
        const { news } = this.props;
        if(news.data){
            const data = news.data.data;
            return(
                <Element>
                    <ItemList items={data} />
                </Element>
            );  
        } else if(news.error){
            return(
                <Element>
                    Somesthing goes wrong
                </Element>
            );
        } else {
            return(
                <LoadingPage />
            );
        }
    }
}                  

const Element = styled.div`
    margin: 10px;
`;


export default News;