import { SVAE_DISH } from "../utils/types";

export const submitDish = (
    dish_name,
    dish_description,
    dish_upload_by,
    dish_upload_by_user
) => (dispatch) => {
    dispatch({
        type: SVAE_DISH,
        payload: {
            dish_name,
            dish_description,
            dish_upload_by,
            dish_upload_by_user,
        },
    });
};

// export const removeTableItems = (id) => (dispatch, getState) => {
//     console.log(id)
//     dispatch({ type: REMOVE_PRODUCTS_START });

//     dispatch({ type: REMOVE_PRODUCTS_SUCCESS, payload: id });
// };
