import jsonPlaceholder from "../apis/jsonPlaceholder";

/* Code
export const fetchPosts = async () => {
  // Bad approach! >> Actions must be plain object!
  const response = await jsonPlaceholder.get("/posts");
  return {
    type: "FETCH_POSTS",
    payload: promise,
  };

  // 비동기 구문(redux thunk)
  return async function (dispatch, getState) {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};*/

// 리팩토링
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
