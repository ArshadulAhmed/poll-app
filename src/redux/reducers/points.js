import { ADD_POINT_START, ADD_POINT_SUCCESS } from "../utils/types";

const initialState = {
    points_given: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ADD_POINT_START:
            return {
                ...state,
                isLoading: true,
            };

        case ADD_POINT_SUCCESS:
            if (state.points_given.length <= 0) {
                state.points_given.push(action.payload);
            } else {
                const isPresent = state.points_given.some((item) => {
                    if (
                        item.user_id === action.payload.user_id &&
                        item.poll_id === action.payload.poll_id
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
                if (!isPresent) {
                    state.points_given.push(action.payload);
                }
            }
            return {
                ...state,
            };
        default:
            return state;
    }
}
