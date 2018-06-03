import React, { Component } from 'react';
import styled               from 'styled-components';

import LoadingPage          from '../../pages/loadingPage';
import ItemList             from './ItemList';

class News extends Component{
    constructor(props){
        super(props);

        this.state = {
            data: this.props.news.data,
            isFetching: this.props.news.isFetching,
            isErrored: false
        }
    }

    componentDidMount = () => {
        this.props.fetchNews();
    }

    static getDerivedStateFromProps = (nextProps, prevState) => {
        if(nextProps.news.isFetching !== prevState.isFetching){
            return{
                isFetching: nextProps.news.isFetching
            }
        } else if(nextProps.news.data && !prevState.data){
            return{
                data: nextProps.news.data,
                isFetching: false
            }
        } else if(nextProps.news.error && !prevState.isErrored){
            return{
                isErrored: true,
                isFetching: false
            }
        } else {
            return null;
        }
    }

    render(){
        if(this.state.data){
            const data = this.props.news.data.data;
            return(
                <Element>
                    <ItemList items={data} />
                </Element>
            );  
        } else if(this.state.isErrored){
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