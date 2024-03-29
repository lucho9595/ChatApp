import { persisLocalStorage, removeLocalStorage } from "../utils/LocalStorage";
import {
    GET_USERS,
    GET_USER,
    POST_USER,
    POST_LOGIN,
    LOG_OUT,
    EDIT_PROFILE,
    DELETE_USER,
    GET_MESSAGE,
    POST_MESSAGE,
    GET_CONVERSATION,
    POST_CONVERSATION
} from "./actions";

const initialState = {
    user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
    users: [],
    backUpUsers: [],
    message: [],
    backUpMessage: [],
    conversation: [],
    backUpConversation: [],
    detail: {}
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        //----------------------------------------------- USUARIOS ----------------------------------------------------//

        case GET_USERS: return {
            ...state,
            users: action.payload,
            backUpUsers: action.payload
        };
        case GET_USER: return {
            ...state,
            detail: action.payload
        };
        case POST_LOGIN:
            persisLocalStorage("user", action.payload);
            return {
                ...state,
                user: action.payload,
            };
        case POST_USER:
            return {
                ...state,
                users: action.payload,
                backUpUsers: action.payload
            };
        case LOG_OUT:
            removeLocalStorage(action.payload);
            localStorage.clear();
            return {
                ...state,
                user: null,
            };
        case EDIT_PROFILE:
            persisLocalStorage("user", action.payload);
            return {
                ...state,
                user: action.payload,
                users: action.payload
            };
        case DELETE_USER:
            const deleteUser = state.backUpUsers.find((pj) => pj.id === action.payload);
            return {
                ...state,
                users: deleteUser
            };
        //----------------------------------------------- MENSAJES ----------------------------------------------------//
        case GET_MESSAGE: return {
            ...state,
            message: action.payload,
            backUpMessage: action.payload
        };
        case POST_MESSAGE: return {
            ...state,
            message: action.payload,
            backUpMessage: action.payload
        };
        //----------------------------------------------- CONVERSACIONES ----------------------------------------------------//
        case GET_CONVERSATION: return {
            ...state,
            conversation: action.payload,
            backUpConversation: action.payload
        };
        case POST_CONVERSATION: return {
            ...state,
            conversation: action.payload,
            backUpConversation: action.payload
        };

        default: return state
    }
};

export default rootReducer;