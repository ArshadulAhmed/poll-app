import { SVAE_DISH_START, SVAE_DISH } from "../utils/types";

const initialState = {
    all_dishes: [],
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SVAE_DISH_START:
            return {
                ...state,
                isLoading: true,
            };

        case SVAE_DISH:
            let count = 0;
            if (state.all_dishes.length > 0) {
                state.all_dishes.map((item) => {
                    if (item.dish_upload_by === action.payload.dish_upload_by) {
                        count = count + 1;
                    }
                    return count;
                });
            }
            if (count < 2) {
                state.all_dishes.push(action.payload);
            }
            return {
                ...state,
                isLoading: false,
            };

        default:
            return state;
    }
}
