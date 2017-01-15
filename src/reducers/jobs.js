import { FETCH_FAVORITED_JOBS, SELECT_JOB } from '../actions';

const initialState =  {
  data: [],
  favorites: [],
  selectedJob: null,
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
    case SELECT_JOB:
      return {
        ...state,
        selectedJob: action.job.selectedJob
      }
      
    default:
      return state;
  }
}
