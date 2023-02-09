/* eslint-disable default-case */
import {
    GET_USERS
} from "./actions";

const initialState = {
    users: [],
    backUpUsers: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USERS: return {
            ...state,
            users: action.payload,
            backUpUsers: action.payload
        }
        default: return state
    }
};

export default rootReducer;