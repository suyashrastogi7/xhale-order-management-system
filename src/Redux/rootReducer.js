//combines all the reducers into one
import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

const reducers = combineReducers({
    user : userReducer
});


export default reducers

