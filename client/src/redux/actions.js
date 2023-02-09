import axios from "axios";

export const GET_USERS = "GET_USERS";

export function getUsers() {
    return async function (dispatch) {
        try {
            let allUsers = await axios.get("http://localhost:4000/api/users")
            console.log(allUsers.data)
            return dispatch({
                type: GET_USERS,
                payload: allUsers.data
            })
        } catch (error) {
            console.log(error)
        }
    }
}