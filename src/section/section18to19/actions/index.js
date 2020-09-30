import _ from "lodash";
import jsonPlaceholder from "../apis/jsonPlaceholder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  //console.log("About to fetch posts");
  await dispatch(fetchPosts());
  //console.log("fetch posts!");
  const userIds = _.uniq(_.map(getState().posts, "userId"));
  //console.log(userIds);
  userIds.forEach((id) => dispatch(fetchUser(id)));
};

// 리팩토링
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = (id) => async (dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/* Code
export const fetchPosts = async () => {
  // Bad approach! >> Actions must be plain object!
  const response = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: promise,
  };

  //비동기 구문(redux thunk)
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  }
}
*/

/* memoize, lodash 사용 코드
export const fetchUser = (id) => (dispatch) => _fetchUser(id, dispatch);

const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
});*/

/*chain을 활용한 리팩토링
export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  _.chain(getState().posts)
  .map('userId')
  .uniq()
  .forEach(id => dispatch(fetchUser(id)))
  .value();
};*/
