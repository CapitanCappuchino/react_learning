import axios from 'axios';

import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGOUT
} from '../consts';

export const login = (user, headers) => {
    return(dispatch) => {
        dispatch(loginRequest);
        axios.post(
            `https://mysterious-reef-29460.herokuapp.com/api/v1/validate`,
            user, headers)
            .then(response => {
                if(response.data.status === 'ok'){
                    dispatch(loginSuccess(response.data));
                } else {
                    dispatch(loginFailure(response.data));
                }
            })
    }
};

export const loginRequest = () => {
    return{
        type: LOGIN_REQUEST
    }
}

export const loginSuccess = (payload) => {
    return{
        type: LOGIN_SUCCESS,
        payload
    }
};

export const loginFailure = (payload) => {
    return{
        type: LOGIN_FAILURE,
        payload
    }
};

export const logout = () => {
    return{
        type: LOGOUT
    }
};

