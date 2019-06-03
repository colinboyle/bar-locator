import isEmpty from "../validation/is-empty";

import { SET_CURRENT_USER, NEWSLETTER_SUCCESS } from "../actions/types";

const initialState = {
  isAuthenticated: false,
  user: {},
  subscribed: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    case NEWSLETTER_SUCCESS:
      return {
        ...state,
        subscribed: true
      };
    default:
      return state;
  }
}
