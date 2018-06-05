import axios from 'axios';

import{
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE
} from '../consts';
import { BASE_URL } from '../../helpers/API';

export const fetchProfile = () => {
    return(dispatch, getState) => {
        const user_id = getState().auth.id;
        const url = BASE_URL + 'user-info/' + user_id;
        dispatch(profileRequest);
        axios.get(url)
            .then(response => {
                console.log('PROFILE RESPONSE', response);
                if(response.data.status === 'ok'){
                    dispatch(profileSuccess(response.data));
                } else {
                    dispatch(profileFailure(response.data));
                }
            })
    }
}

const profileRequest = () => {
    return{
        type: PROFILE_REQUEST
    }
}

const profileSuccess = (payload) => {
    return{
        type: PROFILE_SUCCESS,
        payload
    }
}

const profileFailure = (payload) => {
    return{
        type: PROFILE_FAILURE,
        payload
    }
}