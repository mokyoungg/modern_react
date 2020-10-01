import _ from "lodash";
import {
  FETCH_STREAM,
  FETCH_STREAMS,
  CREATE_STREAM,
  EDIT_STREAM,
  DELETE_STREAM,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STREAMS:
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STREAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STREAM:
      return _.omit(state, action.payload);
    default:
      return state;
  }
};

/* Sample Code (Array-based approach)
const streamReducer = (state = [], action) => {
  switch (action.type) {
    case EDIT_STREAM:
      return state.map((stream) => {
        if (stream.id === action.payload.id) {
          return action.payload;
        } else {
          return stream;
        }
      });
    default:
      return state;
  }
};

//Object-based approach
const streamReducer = (state = {}, action) => {
  switch (action.type) {
    case EDIT_STREAM:
      //const newState = { ...state };
      //newState[action.payload.id] = action.payload;
      //return newState;

      return { ...state, [action.payload.id]: action.payload };
    default:
      return state;
  }
};

// 새로운 구문, []는 배열이 아니라 '키(key)' 이다.
const animalSounds = { cat: 'meow', dog: 'bark' }
const animal = 'lion'
const sound = 'roar'
{ ...animalSounds, [animal]: sound} // animalSounds = {cat:'meow',dog:'bark',lion:'roar}


const colors = [{ hue: "green" }, { hue: "yellow" }, { hue: "blue" }];
_.mapKeys(colors, "hue"); // {"green":{"hue":green"}, "yellow":{ "hue": "yellow" }, "blue":{ "hue": "blue" }}
*/
