import React, { Component } from 'react';
import { connect }          from 'react-redux';
import PropTypes            from 'prop-types';

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

NewsContainer.PropTypes = {
    news: PropTypes.shape({
        data: PropTypes.array,
        error: PropTypes.string,
        isFetching: PropTypes.bool
    }),
    fetchNews: PropTypes.func
}

const mapStateToProps = (state) => ({
    news: state.news
})

const mapDispatchToProps = (dispatch) => ({
    fetchNews: () => dispatch(fetchNews())
})

export default connect(mapStateToProps, mapDispatchToProps)(NewsContainer);
