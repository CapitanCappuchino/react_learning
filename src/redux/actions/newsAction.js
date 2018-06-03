import axios from 'axios';

import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAILURE
} from '../consts';

export const fetchNews = () => {
    return(dispatch) => {
        dispatch(newsRequest);
        axios.get(`https://mysterious-reef-29460.herokuapp.com/api/v1/news`)
        .then(response => {
            console.log('NEWS RESPONSE', response);
            if(response.data.status === 'ok'){
                dispatch(newsSuccess(response.data));
            } else {
                dispatch(newsFailure(response.data));
            }
        })
    }
}

const newsRequest = () => {
    return{
        type: NEWS_REQUEST
    }
}

const newsSuccess = (payload) => {
    return{
        type: NEWS_SUCCESS,
        payload
    }
}

const newsFailure = (payload) => {
    return{
        type: NEWS_FAILURE,
        payload
    }
}