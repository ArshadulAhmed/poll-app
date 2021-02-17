import { combineReducers } from "redux";
import users from "./users";
import allDishes from "./allDishes";
import points from "./points";

export default combineReducers({
    users,
    allDishes,
    points,
});
