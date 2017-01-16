import { OPEN_MODAL, CLOSE_MODAL } from '../actions';

const initialState =  {
  selectedJob: null,
  modalIsOpen: false
};

export default function modal(state = initialState, action) {
  switch(action.type) {
    case OPEN_MODAL:
      return {
        ...state,
        modalIsOpen: true,
        selectedJob: action.job.selectedJob
      };
    case CLOSE_MODAL:
      return {
        ...state,
        modalIsOpen: false,
        selectedJob: null
      };
    default:
      return state;
  }
}
