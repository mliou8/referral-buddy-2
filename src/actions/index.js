export const SIGN_IN_USER = 'SIGN_IN_USER';
export const SIGN_OUT_USER = 'SIGN_OUT_USER';
import { browserHistory } from 'react-router';

export function signInUser()
{
  browserHistory.push('/myStuff');
  return {
    type: SIGN_IN_USER
  }
}

export function signOutUser()
{
  browserHistory.push('/');
  return {
    type: SIGN_OUT_USER
  }
}
