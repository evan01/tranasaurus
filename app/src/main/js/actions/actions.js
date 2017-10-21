import { ACTIONS } from '../consts/action_types';

export const loginSuccess = name => ({
  type: ACTIONS.LOGIN_SUCCESS,
  name,
});

export const loginFail = name => ({
  type: ACTIONS.LOGIN_FAIL,
  name,
});
