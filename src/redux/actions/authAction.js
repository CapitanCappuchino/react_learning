import axios from 'axios';

import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST
} from '../consts';

export function login(user, headers){
    return(dispatch) => {
        dispatch(login_request);
        axios.post(
            `https://mysterious-reef-29460.herokuapp.com/api/v1/validate`,
            user, headers)
            .then(response => {
                if(response.data.status === 'ok'){
                    dispatch(login_success(response.data));
                } else {
                    dispatch(login_failure(response.data));
                }
            })
    }
};

export function login_request(){
    return{
        type: LOGIN_REQUEST
    }
}

export function login_success(payload){
    return{
        type: LOGIN_SUCCESS,
        payload
    }
};

export function login_failure(payload){
    return{
        type: LOGIN_FAILURE,
        payload
    }
};

