import {
    LOAD_USER_START,
    LOAD_USER_SUCCESS,
    LOGOUT_USER,
} from "../utils/types";

export const authLogin = (username, password) => (dispatch) => {
    console.log({ username, password });
    dispatch({ type: LOAD_USER_START });
    dispatch({
        type: LOAD_USER_SUCCESS,
        payload: { username, password },
    });
};

export const logOut = () => (dispatch) => {
    dispatch({ type: LOGOUT_USER });
};
// export const removeTableItems = (id) => (dispatch, getState) => {
//     console.log(id)
//     dispatch({ type: REMOVE_PRODUCTS_START });

//     dispatch({ type: REMOVE_PRODUCTS_SUCCESS, payload: id });
// };
