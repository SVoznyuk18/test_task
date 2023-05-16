import { combineReducers } from "redux";

import positions from "./positions";
import token from "./token";
import users from "./users";

const reducer = combineReducers({
  positions,
  token,
  users,
});

export default reducer;
