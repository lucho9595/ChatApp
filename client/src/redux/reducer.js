import {
    GET_USERS,
    GET_USER,
    POST_USER,
    POST_LOGIN,
    LOG_OUT,
    EDIT_PROFILE,
    DELETE_USER
} from "./actions";

const initialState = {
    user: {},
    users: [],
    backUpUsers: [],
    detail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            users: action.payload,
            backUpUsers: action.payload
        }
        case GET_USER: return {
            ...state,
            detail: action.payload
        }
        case POST_LOGIN:
            return {
                ...state,
                user: action.payload,
            };
        case POST_USER:
            return {
                ...state,
                users: action.payload,
                backUpUsers: action.payload
            }
        case LOG_OUT:
            return {
                ...state,
                user: null,
            };
        case EDIT_PROFILE:
            return {
                ...state,
                user: action.payload
            }
        case DELETE_USER:
            const deleteUser = state.backUpUsers.find((pj) => pj.id === action.payload);
            return {
                ...state,
                users: deleteUser
            };
        default: return state
    }
};

export default rootReducer;