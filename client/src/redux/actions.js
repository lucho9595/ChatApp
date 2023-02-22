import axios from "axios";

export const GET_USERS = "GET_USERS";
export const GET_USER = "GET_USER";
export const POST_USER = "POST_USER";
export const POST_LOGIN = "POST_LOGIN";
export const LOG_OUT = "LOG_OUT";
export const EDIT_PROFILE = "EDIT_PROFILE";
export const DELETE_USER = "DELETE_USER";

//traer todos los usuarios
export function getUsers() {
    return async function (dispatch) {
        try {
            let allUsers = await axios.get("http://localhost:4000/api/users")
            return dispatch({
                type: GET_USERS,
                payload: allUsers.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

//traer de un usuario para la edicion
export function getUser(id) {
    return async function (dispatch) {
        try {
            let user = await axios.get(`http://localhost:4000/api/users/${id}`);
            return dispatch({
                type: GET_USER,
                payload: user.data
            })
        } catch (error) {
            console.log(error)
        }
    }
};

//crear un usuario, es el register
export function createdUser(body) {
    return async function (dispatch) {
        try {
            const created = await axios.post(`http://localhost:4000/api/users`, body)
            return dispatch({
                type: POST_USER,
                payload: created,
            });
        } catch (error) {
            console.log(error)
        }
    }
};

//que se logue el usuario, es el login
export function loginAuth(body) {
    return async function (dispatch) {
        try {
            let login = await axios.post(`http://localhost:4000/api/login`, body);
            return dispatch({
                type: POST_LOGIN,
                payload: login.data
            });
        } catch (error) {
            console.log(error);
        }
    }
};

//cerramos seccion:
export function userSignOut(datos) {
    return {
        type: LOG_OUT,
        payload: datos,
    };
}

//editar el perfil:
export function editProfile(id, payload) {
    return async function (dispatch) {
        try {
            let edit = await axios.put(`http://localhost:4000/api/users/${id}`, payload);
            console.log(edit.data)
            return dispatch({
                type: EDIT_PROFILE,
                payload: edit.data
            })
        } catch (error) {
            console.log(error);
        }
    }
}

//eliminar el usuario:
export function deleteUser(id) {
    return async function (dispatch) {
        try {
            const deleteUser = await axios.delete(`http://localhost:4000/api/delete/${id}`);
            return dispatch({
                type: DELETE_USER,
                payload: deleteUser
            });
        } catch (error) {
            console.log(error)
        }
    }
};