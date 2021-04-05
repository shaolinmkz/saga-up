import { combineReducers } from "redux";
import userReducer from "./users";

const reducers = combineReducers({
	users: userReducer,
});

export default reducers;
