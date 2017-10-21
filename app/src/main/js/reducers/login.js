import { ACTIONS } from '../consts/action_types';
import { STATE } from '../consts/default_state';

export default (state = STATE, action) => {
  switch (action.type) {
    case ACTIONS.LOGIN_FAIL:
      return { ...state };
    case ACTIONS.LOGIN_SUCCESS:
      return { ...state, loggedIn: true };
    default:
      return state;
  }
};
