import jsonPlaceholder from "../apis/jsonPlaceholder";

/*최초 코드
export const fetchPosts = () => {
  // Bad approach!
  // Error: Actions must be plain objects. Use custom middleware for async actions.
  const promise = await jsonPlaceholder.get("/posts"); 

  return async (dispatch) => {
    const response = await jsonPlaceholder.get("/posts");

    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};*/

// 코드 리팩토링
export const fetchPosts = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "FETCH_POSTS", payload: response });
};
