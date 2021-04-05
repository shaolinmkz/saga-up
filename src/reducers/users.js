import { Types } from "../actions/users";

const INITIAL_STATE = {
  users: [],
  error: "",
};

const userReducer = (state = INITIAL_STATE, actions) => {
  switch (actions.type) {
    case Types.GET_USERS_SUCCESS:
      return {
        ...state,
        users: actions.payload,
      };
    case Types.CREATE_USER_SUCCESS:
      return {
        ...state,
        users: [actions.payload, ...state.users],
      };
    case Types.DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter(({ id }) => id !== actions.payload),
      };
    case Types.ERROR:
      return {
        ...state,
        error: actions.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
