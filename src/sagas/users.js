import {
  call,
  takeEvery,
  take,
  takeLatest,
  fork,
  put,
} from "redux-saga/effects";
import * as actions from "../actions/users";
import * as api from "../api/users";

function* getUserWorker() {
  try {
    const {
      data: { data: users },
    } = yield call(api.getUsers);

    yield put(
      actions.getUsersSuccess({
        users,
      })
    );
  } catch (error) {}
}

function* watchGetUsersRequest() {
  yield takeEvery(actions.Types.GET_USERS_REQUEST, getUserWorker);
}

function* createUserWorker(action) {
  try {
    const { data: user } = yield call(api.createUser, action.payload);

    yield put(actions.createUserSuccess(user));
  } catch (error) {
    yield put(actions.userError("An error occurred on creating a user"));
  }
}

function* watchCreateUserRequest() {
  yield takeLatest(actions.Types.CREATE_USER_REQUEST, createUserWorker);
}
function* deleteUserWorker({ userId }) {
  try {
    yield call(api.deleteUser, userId);

    yield put(actions.deleteUserSuccess(userId));
  } catch (error) {
    yield put(actions.userError("An error occurred on deleting a user"));
  }
}

function* watchDeleteUserRequest() {
  while (true) {
    const action = yield take(actions.Types.DELETE_USER_REQUEST);
    yield call(deleteUserWorker, { userId: action.payload });
  }
}

const usersSagas = [
  fork(watchGetUsersRequest),
  fork(watchCreateUserRequest),
  fork(watchDeleteUserRequest),
];

export default usersSagas;
