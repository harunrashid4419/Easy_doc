import { combineReducers } from "redux";
import { docReducer } from "./docReducer";

const rootReducer = combineReducers({
    docs: docReducer
})
export default rootReducer;