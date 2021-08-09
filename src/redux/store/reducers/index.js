import { combineReducers } from "redux";

import search from "./search";
import start from "./video-start";

const rootReducer = combineReducers({
  search,
  start,
});

export default rootReducer;
