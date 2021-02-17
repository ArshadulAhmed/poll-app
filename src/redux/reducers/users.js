import {
    LOAD_USER_START,
    LOAD_USER_SUCCESS,
    LOAD_USER_FAIL,
    LOGOUT_USER,
} from "../utils/types";

const initialState = {
    users: [
        {
            id: 1,
            username: "Arshad",
            password: "Arshad123",
        },
        {
            id: 2,
            username: "Razeen",
            password: "Razeen123",
        },
    ],
    currentLoggedInUser: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case LOAD_USER_START:
            return {
                ...state,
                isLoading: true,
            };

        case LOAD_USER_SUCCESS:
            return {
                ...state,
                // currentLoggedInUser: state.users.reduce((user) => {
                //     if (
                //         user.username === action.payload.username &&
                //         user.password === action.payload.password
                //     ) {
                //         return { id: user.id, username: user.username };
                //     }
                //     return {};
                // }),
                currentLoggedInUser: state.users.find((user) => {
                    return (
                        user.username === action.payload.username &&
                        user.password === action.payload.password
                    );
                }, {}),
                isLoading: false,
            };

        case LOAD_USER_FAIL:
            return {
                ...state,
                ...action.payload,
                isLoading: false,
            };
        case LOGOUT_USER:
            return {
                ...state,
                currentLoggedInUser: {},
                isLoading: false,
            };
        default:
            return state;
    }
}
