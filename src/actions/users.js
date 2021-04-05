export const Types = {
  GET_USERS_REQUEST: "users/get_users_request",
  GET_USERS_SUCCESS: "users/get_users_success",
  CREATE_USER_REQUEST: "users/create_user_request",
  CREATE_USER_SUCCESS: "users/create_user_success",
  DELETE_USER_REQUEST: "users/delete_user_request",
  DELETE_USER_SUCCESS: "users/delete_user_success",
  ERROR: "users/error",
};

export const getUsersRequest = () => ({
  type: Types.GET_USERS_REQUEST,
});

export const getUsersSuccess = ({ users }) => ({
  type: Types.GET_USERS_SUCCESS,
  payload: users,
});

export const createUserRequest = (payload) => ({
  type: Types.CREATE_USER_REQUEST,
  payload,
});

export const createUserSuccess = (payload) => ({
  type: Types.CREATE_USER_SUCCESS,
  payload,
});

export const deleteUserRequest = (userId) => ({
  type: Types.DELETE_USER_REQUEST,
  payload: userId,
});

export const deleteUserSuccess = (userId) => ({
  type: Types.DELETE_USER_SUCCESS,
  payload: userId,
});

export const userError = (error) => ({
  type: Types.ERROR,
  payload: error,
});
