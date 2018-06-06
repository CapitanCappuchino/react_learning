import axios from 'axios';

import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAILURE
} from '../consts';
import { BASE_URL } from '../../helpers/API';

export const fetchNews = () => {
    return(dispatch) => {
        dispatch(newsRequest);
        axios.get(BASE_URL + `news`)
        .then(response => {
            console.log('NEWS RESPONSE', response);
            if(response.data.status === 'ok'){
                dispatch(newsSuccess(response.data));
            } else {
                dispatch(newsFailure(response.data));
            }
        })
        .catch(response => {
            dispatch(newsFailure(response.data));
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