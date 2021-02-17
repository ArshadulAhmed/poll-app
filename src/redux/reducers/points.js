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
            let count = 0;
            if (state.points_given.length <= 0) {
                state.points_given.push(action.payload);
            } else {
                const isPresent = state.points_given.some((item) => {
                    console.log({ item });
                    console.log("dd", action.payload);
                    if (item.user_id === action.payload.user_id) {
                        count++;
                    }
                    if (
                        item.user_id === action.payload.user_id &&
                        item.poll_id === action.payload.poll_id
                    ) {
                        return true;
                    }

                    if (
                        item.user_id === action.payload.user_id &&
                        item.point === action.payload.point
                    ) {
                        return true;
                    } else {
                        return false;
                    }
                });
                console.log({ count });
                if (!isPresent && count < 3) {
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
