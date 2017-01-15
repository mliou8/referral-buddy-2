import { combineReducers } from 'redux';
import AuthReducer from './auth';
import JobsReducer from './jobs';
import ModalReducer from './modal';
import { reducer as FormReducer } from 'redux-form';

const rootReducer = combineReducers({
  auth: AuthReducer,
  form: FormReducer,
  jobs: JobsReducer,
  modal: ModalReducer
});

export default rootReducer;
