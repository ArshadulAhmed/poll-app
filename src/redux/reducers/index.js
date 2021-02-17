import { combineReducers } from "redux";
import users from "./users";
import allDishes from "./allDishes";

export default combineReducers({
    users,
    allDishes,
});
