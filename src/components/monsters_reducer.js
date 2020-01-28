import { GET_NAMES } from "../redux/types";

export default function(state = {}, action) {
  switch (action.type) {
    case GET_NAMES:
      return { ...state, monstersData: action.payload };
    default:
      return state;
  }
}
