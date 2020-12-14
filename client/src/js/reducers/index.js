import { combineReducers } from "redux";
import userReducer from "./userReducer";
import profileReducer from "./profileReducer";
import toggleReducer from "./toggleReducer";
export default combineReducers({
  userReducer,
  profileReducer,
  toggleReducer
});
