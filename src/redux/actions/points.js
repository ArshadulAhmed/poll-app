import { ADD_POINT_START, ADD_POINT_SUCCESS } from "../utils/types";

export const givePoint = (user_id, poll_id, point) => (dispatch) => {
    console.log({ user_id, poll_id, point });
    dispatch({ type: ADD_POINT_START });
    dispatch({
        type: ADD_POINT_SUCCESS,
        payload: { user_id, poll_id, point },
    });
};
