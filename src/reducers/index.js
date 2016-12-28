import { combineReducers } from 'redux';
import GifsReducer from './gifs';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  form: FormReducer,
  gifs: GifsReducer
});

export default rootReducer;
