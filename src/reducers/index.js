import { combineReducers } from "redux";
import postsReducer from "./postReducer";
import usersReducer from "./usersReducer";

export default combineReducers({
  //dummy사용 dummy: () => "Hi there",
  posts: postsReducer,
  users: usersReducer,
});
