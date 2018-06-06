import {
    NEWS_REQUEST,
    NEWS_SUCCESS,
    NEWS_FAILURE
} from '../consts';

const initialState = {
    data: null,
    error: '',
    isFetching: false
}

export default function news(state = initialState, action){
    switch(action.type){
        case NEWS_REQUEST:
            return{...state,
                isFetching: true
            }
        case NEWS_SUCCESS:
            return{...state,
                data: action.payload,
                isFetching: false
            }
        case NEWS_FAILURE:
            return{...state,
                error: action.payload.message,
                isFetching: false
            }
        default:
            return state;
    }
}