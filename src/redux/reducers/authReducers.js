import { 
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGOUT
} from '../consts';

const initialState = {
    id: '',
    error: '',
    isFetching: true,
    isAutintificated: false
};

export default function auth(state = initialState, action){
    switch(action.type){
        case LOGIN_REQUEST:
            return{...state,
                isFetching: true
            }
        case LOGIN_SUCCESS:
            return{...state,
                isFetching: false,
                isAutintificated: true,
                id: action.payload.data.id
            }
        case LOGIN_FAILURE:
            return{...state,
                isFetching: false,
                error: action.payload.message
            }
        case LOGOUT:
            return{...state,
                id: '',
                error: '',
                isFetching: true,
                isAutintificated: false
            }
        default:
            return state;
    }
}
