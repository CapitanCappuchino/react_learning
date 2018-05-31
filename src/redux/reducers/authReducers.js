import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST
} from '../consts';

const initialState = {
    id: '',
    error: '',
    isFetching: true
};

export function login(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return{...state,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return{...state,
                isFetching: false,
                id: action.payload.data.id
            }
        case LOGIN_FAILURE:
            return{...state,
                isFetching: false,
                error: action.payload.message
            }
        default:
            return state;
    }
}
