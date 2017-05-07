import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
      // identical to below _ return state.concat([action.payload.data]); _
      return [ action.payload.data, ...state ]; // < flatten 
  }
  return state;
}
