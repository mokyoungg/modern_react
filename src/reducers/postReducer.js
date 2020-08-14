export default (state = [], actoin) => {
  /*if (actoin.type === "FETCH_POSTS") {
    return actoin.payload;
  }
  return state;*/

  // switch 문 사용(모든 경우(아마 액션의 종류?) 고려)
  switch (actoin.type) {
    case "FETCH_POSTS":
      return actoin.payload;
    default:
      return state;
    //case 'case1'
    //case 'case2'
  }
};
