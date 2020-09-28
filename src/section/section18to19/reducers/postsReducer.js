export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }

  /*if (action.type === 'FETCH_POSTS'){
    return action.payload
  }

  return state;*/
};

/* good!
export default (state, action) => {
  return state + action
});

Bad!
export default ({
  return document.querySelector('input')

  return axios.get('/post')

  state[0] = 0
  state.pop()
  state.name = 'Sam'
})*/
