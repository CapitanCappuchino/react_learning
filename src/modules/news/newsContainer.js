import React, { Component } from 'react';
import { connect }          from 'react-redux';

import News                 from './news';
import { fetchNews }        from '../../redux/actions/newsAction';

class NewsContainer extends Component{
    render(){
        return(
            <News 
                news={this.props.news}
                fetchNews={this.props.fetchNews}
            />
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news
})

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
