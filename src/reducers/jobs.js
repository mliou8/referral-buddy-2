import { FETCH_FAVORITED_JOBS } from '../actions';

const initialState =  {
  data: [],
  favorites: [],
};

export default function jobs(state = initialState, action) {
  switch (action.type) {
    case FETCH_FAVORITED_JOBS:
      var arr =[];
      for( var i in action.payload ) {
        if (action.payload.hasOwnProperty(i)){
          arr.push(action.payload[i]);
        }
      }
      return {
        ...state, favorites: arr
      };
    default:
      return state;
  }
}
