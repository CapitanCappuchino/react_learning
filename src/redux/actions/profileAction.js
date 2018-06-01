import axios from 'axios';

import{
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE
} from '../consts';

export const fetchProfile = () => {
    return(dispatch, getState) => {
        const user_id = getState().auth.id;
        const url = 'https://mysterious-reef-29460.herokuapp.com/api/v1/user-info/' + user_id;
        dispatch(profileRequest);
        axios.get(url)
            .then(response => {
                console.log('RESPONSE', response);
                if(response.data.status === 'ok'){
                    dispatch(profileSuccess(response.data));
                } else {
                    dispatch(profileFailure(response.data));
                }
            })
    }
}

export const profileRequest = () => {
    return{
        type: PROFILE_REQUEST
    }
}

export const profileSuccess = (payload) => {
    return{
        type: PROFILE_SUCCESS,
        payload
    }
}

export const profileFailure = (payload) => {
    return{
        type: PROFILE_FAILURE,
        payload
    }
}