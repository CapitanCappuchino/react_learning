import{
    PROFILE_REQUEST,
    PROFILE_SUCCESS,
    PROFILE_FAILURE
} from '../consts';

const initialState = {
    data: null,
    error: '',
    isFetching: false,
    isFound: false
}

export default function profile(state = initialState, action){
    switch(action.type){
        case PROFILE_REQUEST:
            return{...state,
                isFetching: true
            }
        case PROFILE_SUCCESS:
            return{...state,
                data: action.payload,
                isFetching: false,
                isFound: true
            }
        case PROFILE_FAILURE:
            return{...state,
                error: action.payload.message,
                isFetching: false,
                isFound: false
            }
        default:
            return state;
    }
}