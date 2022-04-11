import { combineReducers } from "redux";
import CountReduser from "./countReduser";
const rootReduser = combineReducers({AllCount:CountReduser});

export default rootReduser;