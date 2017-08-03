import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // Return a new instance of state, not mutate the old one
      // return state.concat([action.payload.data]);
      return [action.payload.data, ...state]; // Same, but with new syntax
    default:
      return state;
  }
}
