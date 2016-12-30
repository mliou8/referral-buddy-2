import { AUTH_USER, SIGN_OUT_USER, AUTH_ERROR } from '../actions';

const initialState = {
  authenticated: false,
  error: null
};

export default function gifs(state = initialState, action) {
  switch (action.type) {
    case AUTH_USER:
      return {
        ...state,
        authenticated: true,
        error: null
      };

    case SIGN_OUT_USER:
      return {
        ...state,
        authenticated: false,
        error: null
      };

    case AUTH_ERROR:
    console.log("auth error reducer has been hit ", action.payload.message)
      return {
        ...state,
        error: action.payload.message
      };

    default:
      return state;
  }
}
