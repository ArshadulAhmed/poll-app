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
            state.all_dishes.push(action.payload);
            return {
                ...state,
                all_dishes: state.all_dishes,
                isLoading: false,
            };

        default:
            return state;
    }
}
